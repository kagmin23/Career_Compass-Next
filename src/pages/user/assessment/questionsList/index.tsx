import { Button, Card, Modal, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/layout/header";
import { questionsData } from "../../../../constants/constants";

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
    // Lưu data cứng vào sessionStorage khi component mount
    const savedStaticData = sessionStorage.getItem("questionsData");
    if (!savedStaticData) {
      sessionStorage.setItem("questionsData", JSON.stringify(questionsData));
    }

    // Lấy và kết hợp dữ liệu
    const storedQuestionSets = sessionStorage.getItem("questionSets");
    const storedStaticData = sessionStorage.getItem("questionsData");

    let sessionQuestionData: QuestionSet[] = [];
    let staticData: QuestionSet[] = [];

    try {
      if (storedQuestionSets) {
        sessionQuestionData = JSON.parse(storedQuestionSets);
      }
      if (storedStaticData) {
        staticData = JSON.parse(storedStaticData);
      } else {
        staticData = questionsData;
      }
    } catch (error) {
      console.error("Lỗi khi parse dữ liệu từ sessionStorage:", error);
    }

    const combinedData = [...staticData, ...sessionQuestionData];
    setQuestionSets(combinedData);
  }, []);

  const handleStartQuiz = (set: QuestionSet) => {
    // Lưu bộ câu hỏi được chọn vào sessionStorage
    sessionStorage.setItem("selectedQuestionSet", JSON.stringify(set));
    setSelectedSet(set);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    if (selectedSet) {
      // Đảm bảo có dữ liệu câu hỏi trước khi chuyển trang
      const selectedQuestionSet = sessionStorage.getItem("selectedQuestionSet");
      if (selectedQuestionSet) {
        navigate(`/user/do-test/quiz-testing/${selectedSet.id}`, {
          state: { questionSet: selectedSet },
        });
      }
    }
    setIsModalVisible(false);
    setSelectedSet(null);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedSet(null);
    sessionStorage.removeItem("selectedQuestionSet");
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
                <div style={{ marginTop: "8px", marginBottom: 10 }}>
                  {set.tags?.map((tag, index) => (
                    <Tag key={index} color="blue">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    marginTop: "16px",
                    color: "#fff",
                    backgroundColor: "#3182CE",
                    borderColor: "#3182CE",
                  }}
                  onClick={() => handleStartQuiz(set)}
                >
                  Bắt đầu làm bài
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

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
        <p style={{ fontStyle: "italic", color: "#C39023" }}>
          Đây là bài kiểm tra kiểm định yêu cầu bản thân phù hợp công việc và
          định hướng.
        </p>
        <p>Bạn có chắc muốn bắt đầu bài kiểm tra này?</p>
      </Modal>
    </div>
  );
};

export default QuestionsList;
