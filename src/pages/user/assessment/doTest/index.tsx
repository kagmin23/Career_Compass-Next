import { Button, Input } from "antd";
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
  }, [id, navigate]);

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleSubmit = () => {
    if (!questionSet) return;

    const answeredQuestions = Object.keys(userAnswers).length;
    const totalQuestions = questionSet.questions.length;

    if (
      confirm(
        `Bạn có chắc muốn nộp bài? Bạn đã làm ${answeredQuestions}/${totalQuestions} câu.`
      )
    ) {
      alert(`Đã nộp bài: ${answeredQuestions}/${totalQuestions} câu`);
      sessionStorage.removeItem("selectedQuestionSet");
      navigate("/user/do-test");
    }
  };

  const handleCancel = () => {
    if (confirm("Bạn có chắc muốn hủy? Mọi câu trả lời sẽ bị mất.")) {
      sessionStorage.removeItem("selectedQuestionSet");
      navigate("/user/do-test");
    }
  };

  if (!questionSet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div
        style={{
          paddingTop: "6rem",
          paddingBottom: "4rem",
          padding: "0 1rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {questionSet.name}
        </h2>

        <div>
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
                      display: "flex",
                      alignItems: "center",
                      padding: "0.75rem",
                      marginBottom: "0.5rem",
                      border: "1px solid #d9d9d9",
                      borderRadius: "4px",
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#f1f1f1";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#fff";
                    }}
                  >
                    <Input
                      type="radio"
                      name={`question-${question.id}`}
                      checked={userAnswers[question.id] === answer.id}
                      onChange={() =>
                        handleAnswerSelect(question.id, answer.id)
                      }
                      style={{ marginRight: "1rem" }}
                    />
                    <span style={{ fontSize: "1rem" }}>{answer.content}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "2rem",
            gap: "1rem",
          }}
        >
          <Button
            onClick={handleCancel}
            style={{
              padding: "0.5rem 1.5rem",
              fontSize: "1rem",
              backgroundColor: "#e5e5e5",
              borderColor: "#d9d9d9",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleSubmit}
            style={{
              padding: "0.5rem 1.5rem",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Nộp bài
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizTesting;
