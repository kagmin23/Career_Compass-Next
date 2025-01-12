import { Button, Card, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/layout/header";

interface TestHistory {
  id: string;
  testName: string;
  completedDate: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  status: "pending" | "done";
}

interface UserProfile {
  name: string;
  email: string;
  totalTestsTaken: number;
  averageScore: number;
}

const SavedTests: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Người dùng",
    email: "user@example.com",
    totalTestsTaken: 0,
    averageScore: 0,
  });

  const [testHistory, setTestHistory] = useState<TestHistory[]>([]);

  useEffect(() => {
    const storedHistory = sessionStorage.getItem("quizResult");
    if (storedHistory) {
      try {
        const history = JSON.parse(storedHistory);

        // Kiểm tra nếu quizResult là đối tượng hợp lệ
        if (history && Array.isArray(history)) {
          setTestHistory(history);

          // Tính toán dữ liệu người dùng
          const totalTests = history.length;
          const avgScore = history.reduce((acc, curr) => acc + curr.score, 0) / totalTests;

          setUserProfile((prev) => ({
            ...prev,
            totalTestsTaken: totalTests,
            averageScore: avgScore,
          }));
        } else {
          console.error("quizResult không phải là một mảng hợp lệ", history);
        }
      } catch (error) {
        console.error("Lỗi khi phân tích quizResult từ sessionStorage:", error);
      }
    }
  }, []);

  const columns = [
    {
      title: "Tên bài kiểm tra",
      dataIndex: "questionSetName",
      key: "questionSetName",
    },
    {
      title: "Ngày hoàn thành",
      dataIndex: "completionDate",
      key: "completionDate",
      align: 'center' as const,
      width: 150,
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Thời gian làm",
      dataIndex: "completionTime",
      key: "completionTime",
      align: 'center' as const,
      width: 130,
      render: (minutes: number) => `${minutes}`,
    },
    {
      title: "Kết quả",
      dataIndex: "status",
      key: "status",
      align: 'center' as const,
      width: 200,
      render: (status: "pending" | "done") => (
        <Tag color={status === "pending" ? "green" : "red"}>
          {status === "pending" ? "Đã phân tích" : "Đang phân tích"}
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div
        style={{
          padding: "6rem 1rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Card style={{ marginBottom: "2rem", padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                marginRight: "1.5rem",
                backgroundColor: "#E2E8F0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#A0AEC0",
              }}
            >
              {userProfile.name.charAt(0)}
            </div>
            <div>
              <h1
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {userProfile.name}
              </h1>
              <p style={{ color: "#718096" }}>{userProfile.email}</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#EBF8FF",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#3182CE", marginBottom: "0.5rem" }}>
                Tổng số bài làm
              </h3>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2B6CB0",
                }}
              >
                {userProfile.totalTestsTaken}
              </p>
            </div>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#F0FFF4",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#38A169", marginBottom: "0.5rem" }}>
                Điểm trung bình
              </h3>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2F855A",
                }}
              >
                {userProfile.averageScore.toFixed(1)}/10
              </p>
            </div>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#FAF5FF",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#805AD5", marginBottom: "0.5rem" }}>
                Xếp hạng
              </h3>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#6B46C1",
                }}
              >
                {userProfile.averageScore >= 8
                  ? "Xuất sắc"
                  : userProfile.averageScore >= 6.5
                  ? "Khá"
                  : "Trung bình"}
              </p>
            </div>
          </div>
        </Card>

        <Card
          title="Lịch sử làm bài"
          extra={
            <Link to="/user/do-test">
              <Button
                style={{
                  backgroundColor: "#3182CE",
                  color: "#fff",
                  borderColor: "#3182CE",
                }}
              >
                Làm bài mới
              </Button>
            </Link>
          }
        >
          <Table
            columns={columns}
            dataSource={testHistory}
            rowKey="id"
            pagination={{ pageSize: 10, showSizeChanger: false }}
          />
        </Card>
      </div>
    </div>
  );
};

export default SavedTests;
