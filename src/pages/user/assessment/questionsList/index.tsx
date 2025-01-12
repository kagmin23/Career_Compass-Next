import { Button, Card, Modal, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/layout/header";

interface Question {
  id: string;
  content: string;
  answers: { id: string; content: string }[];
}

interface QuestionSet {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  questions: Question[];
  tags: string[];
}

const QuestionsList: React.FC = () => {
  const [questionSets, setQuestionSets] = useState<QuestionSet[]>([]);
  const [selectedSet, setSelectedSet] = useState<QuestionSet | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestionSets = sessionStorage.getItem("questionSets");
    if (storedQuestionSets) {
      setQuestionSets(JSON.parse(storedQuestionSets));
    }
  }, []);

  const handleStartQuiz = (set: QuestionSet) => {
    setSelectedSet(set);
    setIsModalVisible(true); // Hiển thị modal
  };

  const handleModalOk = () => {
    if (selectedSet) {
      sessionStorage.setItem(
        "selectedQuestionSet",
        JSON.stringify(selectedSet)
      );
      navigate(`/user/do-test/quiz-testing/${selectedSet.id}`); // Điều hướng sang trang mới
    }
    setIsModalVisible(false);
    setSelectedSet(null);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedSet(null);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "6rem",
          paddingBottom: "4rem",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Danh sách bài kiểm tra
          </h1>
          <p style={{ color: "#718096" }}>
            Chọn một bài kiểm tra để bắt đầu làm bài
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {questionSets.map((set) => (
            <Card
              key={set.id}
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {set.name}
                </h2>
                <p style={{ color: "#718096", marginBottom: "16px" }}>
                  {set.description}
                </p>
                <div style={{ fontSize: "14px", color: "#A0AEC0" }}>
                  <p>Số câu hỏi: {set.totalQuestions}</p>
                </div>
                <div style={{ marginTop: "8px" }}>
                  {set.tags?.map((tag, index) => (
                    <Tag key={index} color="blue">
                      {tag}
                    </Tag>
                  )) || <span>No Tags Available</span>}
                </div>
              </div>
              <Button
                style={{
                  width: "100%",
                  marginTop: "16px",
                  color: "#fff",
                  backgroundColor: "#3182CE",
                  borderColor: "#3182CE",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2B6CB0")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3182CE")
                }
                onClick={() => handleStartQuiz(set)}
              >
                Bắt đầu làm bài
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        title="Xác nhận làm bài kiểm tra!"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>
          <strong>"{selectedSet?.name}"</strong>
        </p>
        <p
          style={{
            fontStyle: "italic",
            color: "#C39023",
          }}
        >
          Đây là bài kiểm tra kiểm định yêu cầu bản thân phù hợp công việc và
          định hướng.
        </p>
        <p>Bạn có chắc muốn bắt đầu bài kiểm tra này?</p>
      </Modal>
    </div>
  );
};

export default QuestionsList;
