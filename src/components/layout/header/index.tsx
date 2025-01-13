import {
  FileProtectOutlined,
  LoginOutlined,
  MailOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Badge, Dropdown, List, Menu } from "antd"; // Thêm Badge từ antd
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface QuestionDetail {
  questionId: string;
  questionContent: string;
  selectedAnswerId: string | null;
  selectedAnswerContent: string | null;
  allAnswers: {
    id: string;
    content: string;
  }[];
}

interface StudentSubmission {
  id: string;
  questionSetName: string;
  questionSetId: string;
  completionDate: string;
  completionTime: string;
  status: string;
  answeredQuestions: number;
  totalQuestions: number;
  questionDetails: QuestionDetail[];
  evaluation?: string;
}

interface StoredQuizData {
  id: string;
  questionSetName: string;
  questionSetId: string;
}

const Header: React.FC = () => {
  const [notifications, setNotifications] = useState<StudentSubmission[]>([]);

  useEffect(() => {
    const quizResult = sessionStorage.getItem("quizResult");
  
    if (quizResult) {
      const quizData = JSON.parse(quizResult) as StoredQuizData[];
      const formattedNotifications = quizData
        .map((quiz: StoredQuizData) => ({
          id: quiz.id,
          questionSetName: quiz.questionSetName,
          questionSetId: quiz.questionSetId,
          completionDate: '',
          completionTime: '',
          status: '',  // Lưu ý: Cần đảm bảo có trường status trong dữ liệu quiz
          answeredQuestions: 0,
          totalQuestions: 0,
          questionDetails: []
        }))
        // .filter((item) => item.status === "Đã phân tích"); // Lọc theo status
  
      setNotifications(formattedNotifications);
    }
  }, []);
  
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
            <Link to='/user/saved-tests'>
              <div style={{ color: '#3B81F6'}}>
                Bộ câu hỏi: <strong>{item.questionSetName}</strong>
                <p style={{
                  fontSize: '10px',
                  color: 'gray'
                }}>Bài kiểm tra của bạn đã được ghi nhận đánh giá. <br></br>Theo dõi tại đây!</p>
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
              color: "#3b82f6",
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
                  <Badge count={notifications.length} size="small">
                    <MailOutlined style={{ fontSize: "18px" }} />
                  </Badge>
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