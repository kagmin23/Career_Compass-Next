import {
    BarChartOutlined,
    CompassOutlined,
    HeartOutlined,
    StarOutlined,
    ToolOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TestType } from '../../../types/assessment/types';

const { Title, Paragraph } = Typography;

const tests: TestType[] = [
  {
    id: 'ikigai',
    title: 'Ikigai Assessment',
    description: 'Khám phá sự cân bằng giữa đam mê, sứ mệnh, nghề nghiệp và sinh kế của bạn',
    icon: <CompassOutlined className="text-4xl text-blue-500" />,
    timeEstimate: '15-20 phút',
    questionsCount: 20,
  },
  {
    id: 'mbti',
    title: 'MBTI Personality Test',
    description: 'Xác định loại tính cách MBTI và các nghề nghiệp phù hợp',
    icon: <UserOutlined className="text-4xl text-green-500" />,
    timeEstimate: '25-30 phút',
    questionsCount: 60,
  },
  {
    id: 'riasec',
    title: 'RIASEC Interest Inventory',
    description: 'Đánh giá sở thích và khuynh hướng nghề nghiệp của bạn',
    icon: <StarOutlined className="text-4xl text-yellow-500" />,
    timeEstimate: '15-20 phút',
    questionsCount: 30,
  },
  {
    id: 'strengthsfinder',
    title: 'StrengthsFinder',
    description: 'Khám phá những điểm mạnh độc đáo và tiềm năng của bạn',
    icon: <BarChartOutlined className="text-4xl text-purple-500" />,
    timeEstimate: '20-25 phút',
    questionsCount: 40,
  },
  {
    id: 'via',
    title: 'VIA Character Strengths',
    description: 'Tìm hiểu các đặc điểm tính cách và giá trị cốt lõi của bạn',
    icon: <HeartOutlined className="text-4xl text-red-500" />,
    timeEstimate: '20-25 phút',
    questionsCount: 35,
  },
  {
    id: 'skills',
    title: 'Skills Assessment',
    description: 'Đánh giá các kỹ năng và năng lực hiện tại của bạn',
    icon: <ToolOutlined className="text-4xl text-orange-500" />,
    timeEstimate: '15-20 phút',
    questionsCount: 25,
  },
];

const TestSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Title level={2}>Bài kiểm tra đánh giá</Title>
        <Paragraph className="text-lg text-gray-600">
          Hãy thực hiện các bài kiểm tra dưới đây để khám phá nghề nghiệp phù hợp với bản thân
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {tests.map((test) => (
          <Col xs={24} md={12} lg={8} key={test.id}>
            <Card 
              hoverable 
              className="h-full"
              actions={[
                <Button 
                  type="primary" 
                  onClick={() => navigate(`/assessment/${test.id}`)}
                >
                  Bắt đầu
                </Button>
              ]}
            >
              <div className="text-center mb-4">
                {test.icon}
              </div>
              <Title level={4} className="text-center mb-3">
                {test.title}
              </Title>
              <Paragraph className="text-gray-600 mb-4">
                {test.description}
              </Paragraph>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⏱ {test.timeEstimate}</span>
                <span>📝 {test.questionsCount} câu hỏi</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TestSelection;