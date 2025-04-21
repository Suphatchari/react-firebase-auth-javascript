import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserAuth } from "@context/UserAuthContext";

function Home() {
  const navigate = useNavigate();
  const { user, getUserDetailsFromFirestore, logOut } = useUserAuth();
  const [phoneNumber, setPhoneNumber] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUserDetails() {
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        const data = await getUserDetailsFromFirestore(user.uid);
        if (!isMounted) return;

        if (!data) {
          toast.error("ไม่พบข้อมูลผู้ใช้ใน Firestore");
          setPhoneNumber(null);
        } else {
          setPhoneNumber(data.phone);
        }
      } catch (err) {
        toast.error("เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ใช้");
        console.error("❌ Error fetching user details :", err);
      }
    }

    fetchUserDetails();

    return () => {
      isMounted = false;
    };
  }, [user, navigate, getUserDetailsFromFirestore]);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("ออกจากระบบสำเร็จ");
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "เกิดข้อผิดพลาดขณะออกจากระบบ");
    }
  };

  return (
    <div className="text-center my-5">
      <h2 className="w-100 fw-bold mb-3">Home</h2>
      <p>Hi!!, {user?.displayName ? user.displayName : "-"}</p>
      <p>
        <b>อีเมล : </b>
        {user?.email || "-"}
      </p>
      <p>
        <b>เบอร์โทรศัพท์ : </b>
        {phoneNumber || "-"}
      </p>
      <p>
        <b>UID : </b>
        {user?.uid || "-"}
      </p>

      <Button variant="danger" className="fw-bold" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Home;
