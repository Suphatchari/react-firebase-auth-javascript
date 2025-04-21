import Loading from "@components/Loading";
import { useUserAuth } from "@context/UserAuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, isLoading } = useUserAuth();

  if (isLoading) {
    return <Loading text="Loading, please wait..." isFullPage />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
