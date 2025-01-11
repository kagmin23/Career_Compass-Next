import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../types/register-login/types";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: Login) => {
    try {
      setLoading(true); // Bắt đầu loading

      // Lấy dữ liệu người dùng từ sessionStorage
      const storedUsers = JSON.parse(sessionStorage.getItem("users") || "[]");

      // Kiểm tra nếu có dữ liệu người dùng trong sessionStorage
      if (storedUsers.length === 0) {
        message.error("Bạn chưa có tài khoản. Vui lòng đăng ký!");
        setLoading(false);
        return;
      }

      // Mô phỏng một quá trình đăng nhập với dữ liệu từ sessionStorage
      setTimeout(() => {
        // Kiểm tra thông tin đăng nhập với dữ liệu lưu trữ
        const user = storedUsers.find(
          (user: { email: string; password: string }) =>
            user.email === values.email && user.password === values.password
        );

        if (user) {
          message.success("Đăng nhập thành công!");

          // Chuyển hướng theo vai trò
          if (user.role === "admin") {
            navigate("/admin/manager/assessment/question");
          } else {
            navigate("/user/homepage");
          }
        } else {
          message.error("Thông tin đăng nhập không chính xác!");
        }

        setLoading(false); // Kết thúc loading
      }, 2000); // Giả lập quá trình đăng nhập mất 2 giây
    } catch (error) {
      console.error("Login error:", error);
      message.error("Đăng nhập thất bại. Vui lòng thử lại!");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "98vh",
        backgroundColor: "#f9fafb",
        position: "relative",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "95vh",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "50%",
            padding: "40px",
            backgroundColor: "#fff",
            alignContent: "center",
          }}
        >
          <div style={{ padding: 50 }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h2
                style={{ fontSize: "50px", fontWeight: "bold", color: "#333" }}
              >
                ĐĂNG NHẬP
              </h2>
              <p style={{ marginTop: "10px", color: "#666" }}>
                Chào mừng đến với hệ thống định hướng nghề nghiệp!
              </p>
            </div>
            <Form
              form={form}
              name="login"
              onFinish={onFinish}
              layout="vertical"
              size="large"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Email"
                  style={{
                    borderRadius: "5px",
                    height: "40px",
                    fontSize: "14px",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Mật khẩu"
                  style={{
                    borderRadius: "5px",
                    height: "40px",
                    fontSize: "14px",
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    height: "40px",
                    fontSize: "16px",
                    borderRadius: "5px",
                  }}
                >
                  Đăng nhập
                </Button>
              </Form.Item>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ color: "#666", fontSize: "14px" }}>
                  Bằng cách đăng nhập, bạn đồng ý với{" "}
                  <a
                    href="#"
                    style={{ color: "#1890ff", textDecoration: "none" }}
                  >
                    Điều khoản sử dụng
                  </a>{" "}
                  và{" "}
                  <a
                    href="#"
                    style={{ color: "#1890ff", textDecoration: "none" }}
                  >
                    Chính sách bảo mật
                  </a>
                  .
                </p>
                <span style={{ color: "#666", fontSize: "14px" }}>
                  Bạn chưa có tài khoản?{" "}
                  <Link
                    to="/register"
                    style={{ color: "#1890ff", textDecoration: "none" }}
                  >
                    Đăng ký ngay
                  </Link>
                </span>
              </div>
            </Form>
          </div>
        </div>

        <div
          style={{
            width: "50%",
            position: "relative",
            backgroundImage:
              "url('https://cdn.thansohocchuyensau.com/file/b96ffd9f-de16-4b6a-b52e-a7a64199f518.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginForm;
