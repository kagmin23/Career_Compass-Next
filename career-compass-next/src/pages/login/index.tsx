import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../types/register-login/types";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: Login) => {
    try {
      setLoading(true);
      console.log("Login values:", values);

      const mockAdminAccount = {
        email: "admin@domain.com",
        password: "123",
        role: "admin",
      };

      if (
        values.email === mockAdminAccount.email &&
        values.password === mockAdminAccount.password
      ) {
        message.success("Đăng nhập thành công!");
        navigate("/admin/manager/assessment/question");
      } else {
        const response = {
          success: true,
          role: "user",
        };

        if (response.success) {
          message.success("Đăng nhập thành công!");

          if (response.role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/user/homepage");
          }
        } else {
          message.error("Đăng nhập thất bại. Vui lòng thử lại!");
        }
      }
    } catch (error) {
      message.error("Đăng nhập thất bại. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "5px",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: 'calc(100vh - 100px)',
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Phần khung đăng nhập */}
        <div
          style={{
            width: "100%",
            padding: "40px",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
              Đăng nhập
            </h2>
            <p style={{ marginTop: "10px", color: "#666" }}>
              Chào mừng đến với hệ thống hướng nghiệp
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
                  backgroundColor: "#1890ff",
                  borderColor: "#1890ff",
                  height: "40px",
                  fontSize: "16px",
                  borderRadius: "5px",
                }}
                loading={loading}
              >
                Đăng nhập
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#666" }}>Chưa có tài khoản? </span>
              <Link
                to="/register"
                style={{ color: "#1890ff", textDecoration: "none" }}
              >
                Đăng ký ngay
              </Link>
            </div>
          </Form>
        </div>

        {/* Phần hình ảnh */}
        <div
          style={{
            width: "50%",
            position: "relative",
            backgroundImage: "url('https://cdn.thansohocchuyensau.com/file/b96ffd9f-de16-4b6a-b52e-a7a64199f518.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              // position: "absolute",
              inset: "0",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Welcome to Career Next
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
