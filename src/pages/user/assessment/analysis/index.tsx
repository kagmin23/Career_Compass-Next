import { Button, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface Answer {
  questionId: string;
  isCorrect: boolean;
  timeSpent: number;
  category: string;
}

interface TestResult {
  id: string;
  testName: string;
  completedDate: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  answers: Answer[];
  categoryScores: Record<string, number>;
}

const TestResult: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Khai báo useNavigate
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    // Mock data for test result
    const mockResult: TestResult = {
      id: '1',
      testName: 'Test Đánh Giá',
      completedDate: '2025-01-10',
      score: 8.5,
      totalQuestions: 10,
      correctAnswers: 8,
      timeSpent: 15,
      answers: [
        { questionId: '1', isCorrect: true, timeSpent: 1, category: 'Ngữ pháp' },
        { questionId: '2', isCorrect: false, timeSpent: 2, category: 'Đọc hiểu' },
        { questionId: '3', isCorrect: true, timeSpent: 1, category: 'Từ vựng' },
        // Add more answers as needed
      ],
      categoryScores: {
        'Đọc hiểu': 8,
        'Ngữ pháp': 9,
        'Từ vựng': 7,
        'Nghe hiểu': 8
      }
    };

    setResult(mockResult);
  }, [id]);

  const COLORS = ['#4CAF50', '#F44336'];
  // const CATEGORY_COLORS = {
  //   'Đọc hiểu': '#2196F3',
  //   'Ngữ pháp': '#9C27B0',
  //   'Từ vựng': '#FF9800',
  //   'Nghe hiểu': '#00BCD4'
  // };

  if (!result) return <div>Loading...</div>;

  const timeData = result.answers.map((answer, index) => ({
    question: `Q${index + 1}`,
    time: answer.timeSpent
  }));

  const pieData = [
    { name: 'Đúng', value: result.correctAnswers },
    { name: 'Sai', value: result.totalQuestions - result.correctAnswers }
  ];

  const handleGoBack = () => {
    navigate("/user/saved-tests"); // Quay lại trang trước đó
  };

  return (
    <div style={{ minHeight: '95vh', backgroundColor: '#F7FAFC' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ marginBottom: '16px', fontSize: '32px', fontWeight: 'bold', color: '#1A202C' }}>{result.testName}</h1>
          <p style={{ color: '#4A5568' }}>
            Hoàn thành ngày {new Date(result.completedDate).toLocaleDateString('vi-VN')}
          </p>
        </div>

        <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
          <Col xs={24} md={12}>
            <Card title="Đánh giá sơ bộ theo biểu đồ tròn" style={{ height: '100%' }}>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card title="Đánh giá sơ bộ theo đồ thị" style={{ height: '100%' }}>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeData}>
                    <XAxis dataKey="question" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="time"
                      stroke="#2196F3"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Phân tích kết quả */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1A202C' }}>Phân tích kết quả</h2>
          <p style={{ fontSize: '18px', color: '#4A5568', maxWidth: '800px', margin: '0 auto' }}>
            Kết quả của bài kiểm tra cho thấy bạn đã hoàn thành 8 trên tổng số 10 câu hỏi. Điểm của bạn là 8.5/10, chứng tỏ bạn đã có một kết quả khá tốt. 
            Tỷ lệ đúng của bạn đạt 80%, điều này cho thấy bạn hiểu khá rõ các kiến thức đã học. 
            Tuy nhiên, một số câu hỏi trong phần Đọc hiểu cần cải thiện để nâng cao khả năng làm bài.
            Thời gian bạn dành cho mỗi câu hỏi trung bình là khá hợp lý, nhưng một số câu trả lời cần thêm thời gian để suy nghĩ kỹ hơn. 
            Chúc bạn tiếp tục nỗ lực và cải thiện điểm số trong các lần sau!
          </p>
        </div>

        {/* Nút Quay lại */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Button type="primary" onClick={handleGoBack}>Quay lại</Button>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
