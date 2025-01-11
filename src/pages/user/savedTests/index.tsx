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
  status: "passed" | "failed";
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
    const storedHistory = sessionStorage.getItem("testHistory");
    if (storedHistory) {
      const history = JSON.parse(storedHistory);
      setTestHistory(history);

      const totalTests = history.length;
      const avgScore =
        history.reduce((acc: number, test: TestHistory) => acc + test.score, 0) / totalTests;

      setUserProfile((prev) => ({
        ...prev,
        totalTestsTaken: totalTests,
        averageScore: avgScore,
      }));
    }

    // const storedUser = sessionStorage.getItem("users");
    // if (storedUser) {
      
    // }
  }, []);

  const columns = [
    {
      title: "Tên bài kiểm tra",
      dataIndex: "testName",
      key: "testName",
      render: (text: string, record: TestHistory) => (
        <Link to={`/test-result/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Ngày hoàn thành",
      dataIndex: "completedDate",
      key: "completedDate",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Điểm số",
      dataIndex: "score",
      key: "score",
      render: (score: number) => `${score.toFixed(1)}/10`,
    },
    // {
    //   title: "Câu đúng",
    //   key: "answers",
    //   render: (record: TestHistory) => `${record.correctAnswers}/${record.totalQuestions}`,
    // },
    {
      title: "Thời gian làm",
      dataIndex: "timeSpent",
      key: "timeSpent",
      render: (minutes: number) => `${minutes} phút`,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: "passed" | "failed") => (
        <Tag color={status === "passed" ? "green" : "red"}>
          {status === "passed" ? "Đạt" : "Chưa đạt"}
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div style={{ padding: "6rem 1rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Card style={{ marginBottom: "2rem", padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
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
              <h1 style={{ marginBottom: "0.5rem", fontSize: "24px", fontWeight: "bold" }}>
                {userProfile.name}
              </h1>
              <p style={{ color: "#718096" }}>{userProfile.email}</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#EBF8FF",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#3182CE", marginBottom: "0.5rem" }}>Tổng số bài làm</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2B6CB0" }}>
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
              <h3 style={{ color: "#38A169", marginBottom: "0.5rem" }}>Điểm trung bình</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2F855A" }}>
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
              <h3 style={{ color: "#805AD5", marginBottom: "0.5rem" }}>Xếp hạng</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold", color: "#6B46C1" }}>
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
              <Button style={{ backgroundColor: "#3182CE", color: "#fff", borderColor: "#3182CE" }}>
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
