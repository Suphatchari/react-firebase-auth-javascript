import { useUserAuth } from "@context/UserAuthContext";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

// 🔐 Yup validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .max(200, "กรุณากรอกอีเมลไม่เกิน 200 ตัวอักษร")
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมล"),
  password: Yup.string()
    .max(200, "กรุณากรอกรหัสผ่านไม่เกิน 200 ตัวอักษร")
    .min(6, "รหัสผ่านอย่างน้อย 6 ตัว")
    .required("กรุณากรอกรหัสผ่าน"),
});

function LoginForm() {
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await logIn(values.email, values.password);
          toast.success("เข้าสู่ระบบสำเร็จ");
          navigate("/home");
        } catch (err) {
          // ❌ ลบ type assertion: const error = err as FirebaseError;
          const errorCode = err?.code || "";
          if (errorCode === "auth/invalid-credential") {
            toast.error("คุณกรอกชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");
          } else {
            toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {/* Email */}
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>อีเมล :</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="กรอกอีเมล"
              value={values.email}
              onChange={handleChange}
              isInvalid={!!errors.email && touched.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>รหัสผ่าน :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="กรอกรหัสผ่าน"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password && touched.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid">
            <Button
              variant="primary"
              type="submit"
              className="fw-bold mt-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
