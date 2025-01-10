import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../../types/register-login/types";

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: Register) => {
    try {
      setLoading(true);
            
      setTimeout(() => {
        const mockNewUser = {
          email: values.email,
          password: values.password,
          role: "user",
        };
        
        // Get existing users and ensure it's an array
        const existingUsersStr = sessionStorage.getItem("users");
        let users: Array<typeof mockNewUser> = [];
        
        if (existingUsersStr) {
          try {
            const parsed = JSON.parse(existingUsersStr);
            // Verify that parsed data is an array
            users = Array.isArray(parsed) ? parsed : [];
          } catch (error) {
            console.error("Đăng ký không thành công", error);
            // If parsing fails, start with empty array
            users = [];
          }
        }

        // Check if email already exists
        if (users.some(user => user.email === values.email)) {
          message.error("Email đã tồn tại trong hệ thống!");
          setLoading(false);
          return;
        }

        // Add new user
        users.push(mockNewUser);
        
        // Save back to sessionStorage
        sessionStorage.setItem("users", JSON.stringify(users));
        
        message.success("Đăng ký thành công!");
        navigate("/login");
        
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      message.error("Đăng ký thất bại. Vui lòng thử lại!");
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
      }}
    >
      {/* Vùng phủ toàn màn hình */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.15)", // Để tạo lớp nền mờ
            zIndex: 9999, // Đảm bảo Spin nằm trên tất cả các phần tử khác
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
          height: "95vh", // Ensure the full height is used
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Phần hình ảnh */}
        <div
          style={{
            width: "50%",
            position: "relative",
            backgroundImage:
              "url('https://cdn.thansohocchuyensau.com/file/b96ffd9f-de16-4b6a-b52e-a7a64199f518.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%", // Ensure the image takes full height of the container
          }}
        ></div>
        {/* Phần khung đăng ký */}
        <div
          style={{
            width: "50%",
            padding: "40px",
            backgroundColor: "#fff",
            alignContent: "center",
          }}
        >
          <div
            style={{
              padding: 50,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h2
                style={{ fontSize: "50px", fontWeight: "bold", color: "#333" }}
              >
                ĐĂNG KÝ
              </h2>
              <p style={{ marginTop: "10px", color: "#666" }}>
                Chào mừng bạn đến với hệ thống định hướng nghề nghiệp!
              </p>
            </div>
            <Form
              form={form}
              name="register"
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

              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu xác nhận không khớp!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Xác nhận mật khẩu"
                  style={{
                    borderRadius: "5px",
                    height: "40px",
                    fontSize: "14px",
                  }}
                />
              </Form.Item>

              <Form.Item>
                {/* Vòng quay độc lập (Spin) */}
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
                  >
                    Đăng ký
                  </Button>
              </Form.Item>

              {/* Dòng thông tin Điều khoản sử dụng và Đăng ký */}
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ color: "#666", fontSize: "14px" }}>
                  Bằng cách đăng ký, bạn đồng ý với{" "}
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
                  Bạn đã có tài khoản?{" "}
                  <Link
                    to="/login"
                    style={{ color: "#1890ff", textDecoration: "none" }}
                  >
                    Đăng nhập ngay
                  </Link>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
