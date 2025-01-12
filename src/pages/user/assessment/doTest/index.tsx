import { Button, Input, Modal } from "antd";
import { Circle } from 'rc-progress'; // Đảm bảo bạn đã cài rc-progress
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
}

const QuizTesting: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questionSet, setQuestionSet] = useState<QuestionSet | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 phút = 3600 giây

  useEffect(() => {
    const storedSet = sessionStorage.getItem("selectedQuestionSet");
    if (storedSet) {
      const parsedSet = JSON.parse(storedSet);
      if (parsedSet.id === id) {
        setQuestionSet(parsedSet);
      } else {
        navigate("/user/do-test");
      }
    } else {
      navigate("/user/do-test");
    }

    // Đặt đồng hồ đếm ngược
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Dọn dẹp interval khi component bị hủy
    return () => clearInterval(timer);
  }, [id, navigate]);

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleAnswerClear = (questionId: string) => {
    setUserAnswers((prev) => {
      const newAnswers = { ...prev };
      delete newAnswers[questionId]; // Xóa câu trả lời của câu hỏi này
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    if (!questionSet) return;

    const answeredQuestions = Object.keys(userAnswers).length;
    const totalQuestions = questionSet.questions.length;

    Modal.confirm({
      title: "Xác nhận nộp bài",
      content: `Bạn có chắc muốn nộp bài? Bạn đã làm ${answeredQuestions}/${totalQuestions} câu.`,
      okText: "Nộp bài",
      cancelText: "Huỷ",
      onOk: () => {
        alert(`Đã nộp bài: ${answeredQuestions}/${totalQuestions} câu`);
        sessionStorage.removeItem("selectedQuestionSet");
        navigate("/user/do-test");
      },
      onCancel: () => {
        // Khi người dùng chọn hủy, không làm gì cả
      },
    });
  };

  const handleCancel = () => {
    Modal.confirm({
      title: "Xác nhận hủy",
      content: "Bạn có chắc muốn hủy? Mọi câu trả lời sẽ bị mất.",
      okText: "Thoát",
      cancelText: "Tiếp tục làm bài",
      onOk: () => {
        sessionStorage.removeItem("selectedQuestionSet");
        navigate("/user/do-test");
      },
      onCancel: () => {
        // Khi người dùng chọn tiếp tục làm bài, không làm gì cả
      },
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const getAnsweredCount = () => {
    return Object.keys(userAnswers).length;
  };

  if (!questionSet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <p
        style={{
          marginTop: "5rem",
          marginLeft: "0.8rem",
          fontStyle: "italic",
        }}
      >
        * Bài kiểm tra kiểm định đánh giá giá trị năng lực bản thân
      </p>
      <div
        style={{
          paddingBottom: "4rem",
          padding: "0 1rem",
          maxWidth: "100%",
          display: "flex",
          gap: "2rem", // Khoảng cách giữa hai cột
        }}
      >
        {/* Cột bên trái chứa các câu hỏi */}
        <div
          style={{
            flex: 1,
            overflowY: "auto", // Kích hoạt cuộn dọc nếu nội dung vượt quá chiều cao
            maxHeight: "calc(100vh - 8rem)", // Giới hạn chiều cao của phần chứa câu hỏi
          }}
        >
          <h2
            style={{
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Câu hỏi
          </h2>
          {questionSet.questions.map((question, index) => (
            <div
              key={question.id}
              style={{
                padding: "1.5rem",
                marginBottom: "1.5rem",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <p
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                Câu {index + 1}: {question.content}
              </p>
              <div>
                {question.answers.map((answer) => (
                  <label
                    key={answer.id}
                    style={{
                      marginBottom: "0.5rem",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#f1f1f1";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#fff";
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      padding: '0.5rem'
                    }}>
                      <Input
                        type="radio"
                        name={`question-${question.id}`}
                        checked={userAnswers[question.id] === answer.id}
                        onChange={() =>
                          handleAnswerSelect(question.id, answer.id)
                        }
                        style={{
                          width: '5%'
                        }}
                      />
                      <span style={{ fontSize: "1rem" }}>{answer.content}</span>
                    </div>
                  </label>
                ))}
              </div>
              <Button
                size="small"
                type="link"
                onClick={() => handleAnswerClear(question.id)}
                style={{
                  marginTop: '1rem'
                }}
              >
                Xoá lựa chọn của bạn
              </Button>
            </div>
          ))}
        </div>

        {/* Cột bên phải chứa tên bộ câu hỏi, số lượng câu hỏi và thời gian */}
        <div
          style={{
            flex: 0.3,
            padding: "1.5rem",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            maxHeight: '78.4vh', // Giới hạn chiều cao của phần chứa câu hỏi
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>{questionSet.name}</h3>
          <p style={{ marginBottom: "1rem" }}>
            Số lượng câu hỏi: {questionSet.totalQuestions}
            <p>Số câu đã làm: {getAnsweredCount()}</p>
            <p
              style={{
                color: "#C0C0C0",
                marginTop: '2rem'
              }}
            >
              ______________________________________
            </p>
          </p>
          <p>Thời gian: 60 phút</p>
          <p>Thời gian còn lại: {formatTime(timeLeft)}</p>

          {/* Circular Timer */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', position: 'relative' }}>
            <Circle
              percent={(timeLeft / 3600) * 100}
              strokeWidth={8}
              trailWidth={8}
              strokeColor="#1890ff"
              trailColor="#d9d9d9"
              width={120}
              style={{ margin: '0 auto' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1890ff'
              }}
            >
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Các nút điều khiển */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "12rem",
              gap: "1rem",
            }}
          >
            <Button
              onClick={handleCancel}
              type="primary"
              style={{
                padding: "0.5rem 1.5rem",
                fontSize: "1rem",
                backgroundColor: "red",
              }}
            >
              Hủy bài kiểm tra
            </Button>
            <Button
              type="primary"
              onClick={handleSubmit}
              style={{
                padding: "0.5rem 1.5rem",
                fontSize: "1rem",
              }}
            >
              Nộp bài
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTesting;
