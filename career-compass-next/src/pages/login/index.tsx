import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../types/register-login/types";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate(); // Add useNavigate for redirecting

  const onFinish = async (values: Login) => {
    try {
      setLoading(true);
      console.log("Login values:", values);

      // Cứng một tài khoản admin
      const mockAdminAccount = {
        email: "admin@domain.com",
        password: "123",
        role: "admin",
      };

      // Kiểm tra xem tài khoản đăng nhập có khớp với tài khoản admin hay không
      if (
        values.email === mockAdminAccount.email &&
        values.password === mockAdminAccount.password
      ) {
        message.success("Đăng nhập thành công!");

        // Redirect to admin dashboard
        navigate("/admin/manager/assessment/question");
      } else {
        const response = {
          success: true,
          role: "user",
        };

        if (response.success) {
          message.success("Đăng nhập thành công!");

          // Redirect based on user role
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
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Đăng nhập</h2>
          <p className="mt-2 text-gray-600">Chào mừng đến với hệ thống hướng nghiệp</p>
        </div>

        <Form form={form} name="login" onFinish={onFinish} layout="vertical" size="large">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" className="rounded-lg" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              loading={loading}
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="text-center">
            <span className="text-gray-600">Chưa có tài khoản? </span>
            <Link to="/register" className="text-blue-600 hover:text-blue-700">
              Đăng ký ngay
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
