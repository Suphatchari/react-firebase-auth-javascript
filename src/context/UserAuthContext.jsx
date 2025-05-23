import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

import { auth, db } from "../firebase";

const userAuthContext = createContext(undefined);

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sign up with email and password
  // This function creates a new user with email and password using Firebase Authentication
  async function signUpWithEmail(email, password) {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("❌ Error in signUpWithEmail :", error);
      throw error;
    }
  }

  // Sign up with user information and save to Firestore
  // This function creates a new user with email and password, then updates the user's profile and saves additional user information to Firestore
  async function signUpWithUserInformation({
    email,
    password,
    firstName,
    lastName,
    phone,
  }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: email.trim().toLowerCase(),
        firstName,
        lastName,
        phone,
        createdAt: new Date(),
      });
      return user;
    } catch (error) {
      console.error("❌ Error in signUpWithUserInformation :", error);
      throw error;
    }
  }

  // Sign in with email and password
  // This function signs in a user with email and password using Firebase Authentication
  async function logIn(email, password) {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("❌ Error in logIn :", error);
      throw error;
    }
  }

  // Sign in with custom token from backend
  // This function signs in a user with a custom token generated by the backend server using Firebase Authentication
  async function logInWithCustomTokenFromBackend(token) {
    try {
      const userCredential = await signInWithCustomToken(auth, token);
      setUser(userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("❌ Error in logInWithCustomTokenFromBackend :", error);
      throw error;
    }
  }

  // Get user details from Firestore
  // This function retrieves user details from Firestore using the user's UID
  async function getUserDetailsFromFirestore(uid) {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        return userDocSnap.data();
      } else {
        console.warn(`User with UID ${uid} not found in Firestore`);
        return null;
      }
    } catch (error) {
      console.error("❌ Error in getUserDetailsFromFirestore :", error);
      throw error;
    }
  }

  // Check for duplicate email in Firestore
  // This function checks if an email already exists in Firestore by querying the "users" collection
  async function checkDuplicateEmailInFirestore(email) {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("❌ Error in checkDuplicateEmailInFirestore :", error);
      throw error;
    }
  }

  // Log out the user
  // This function signs out the current user using Firebase Authentication
  async function logOut() {
    try {
      return signOut(auth);
    } catch (error) {
      console.error("❌ Error in logOut :", error);
      throw error;
    }
  }

  // Listen for authentication state changes
  // This effect runs when the component mounts and listens for changes in the user's authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser ? currentUser : "❌ No user logged in");
      setUser(currentUser);

      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(3000);

      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Provide the context value to all children components
  // The context value includes the user object, loading state, and authentication functions
  return (
    <userAuthContext.Provider
      value={{
        user,
        isLoading,
        signUpWithEmail,
        signUpWithUserInformation,
        logIn,
        logInWithCustomTokenFromBackend,
        getUserDetailsFromFirestore,
        checkDuplicateEmailInFirestore,
        logOut,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
// This hook can be used in any component that is a child of the UserAuthContextProvider
// It throws an error if used outside of the provider
// eslint-disable-next-line react-refresh/only-export-components
export function useUserAuth() {
  const context = useContext(userAuthContext);

  if (!context) {
    throw new Error(
      "useUserAuth must be used within a UserAuthContextProvider"
    );
  }

  return context;
}
