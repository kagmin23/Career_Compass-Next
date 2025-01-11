import {
  FileProtectOutlined,
  LoginOutlined,
  MailOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Dropdown, List, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // Fake notification data
  const notifications = [
    { id: 1, title: "Thông báo 1", description: "Bạn có bài kiểm tra mới." },
    { id: 2, title: "Thông báo 2", description: "Hạn nộp bài kiểm tra còn 1 ngày." },
    { id: 3, title: "Thông báo 3", description: "Bạn đã hoàn thành bài kiểm tra." },
  ];

  const notificationMenu = (
    <div
      style={{
        width: "300px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <List
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item
            style={{
              padding: "10px",
              borderBottom: "1px solid #f0f0f0",
              cursor: "pointer",
            }}
          >
            <Link to='/user/notification/analysis/id'><div>
              <strong>{item.title}</strong>
              <div style={{ fontSize: "12px", color: "#888" }}>
                {item.description}
              </div>
            </div>
            </Link>
          </List.Item>
        )}
        style={{
          maxHeight: "200px",
          overflowY: "auto",
        }}
      />
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        <Link to="#" style={{ color: "#3b82f6" }}>
          Xem tất cả thông báo
        </Link>
      </div>
    </div>
  );

  const menu = (
    <Menu>
      <Menu.Item key="saved-tests">
        <Link to="/user/saved-tests">
          <FileProtectOutlined /> &nbsp;&nbsp;Bài kiểm tra của bạn
        </Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/login">
          <LoginOutlined /> &nbsp;&nbsp;Đăng xuất
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        zIndex: 50,
        width: "98.9%",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          padding: "0 1rem",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          <Link
            to="/user/homepage"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#3b82f6", // Blue color
            }}
          >
            Career Compass
          </Link>

          <Menu
            mode="horizontal"
            style={{
              display: "flex",
              justifyContent: "center",
              flex: 1,
              border: "none",
            }}
          >
            <Menu.Item key="home">
              <Link to="/user/homepage">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="tests">
              <Link to="/user/do-test">Bài kiểm tra</Link>
            </Menu.Item>
            <Menu.Item key="careers">
              <Link to="/user/list-jobs">Nghề nghiệp</Link>
            </Menu.Item>
          </Menu>

          {/* Avatar section */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 70,
              }}
            >
              <Dropdown overlay={notificationMenu} trigger={["hover"]}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <MailOutlined style={{ fontSize: "18px" }} />
                </div>
              </Dropdown>
              <Dropdown overlay={menu} trigger={["hover"]}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#3b82f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <UserSwitchOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
