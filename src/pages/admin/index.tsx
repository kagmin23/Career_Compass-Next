import { LogoutOutlined, QuestionCircleOutlined, QuestionOutlined, StockOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "../../components/not-found";
import AdminAnalysis from './manager/analysis';
import AdminQuestions from "./manager/assessment/question";
import QuestionSets from './manager/assessment/questionSets';

const { Sider } = Layout;

const AdminManager: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        style={{
          position: 'fixed',
          left: 0,
          height: '100vh',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          width: 250,
        }}
      >
        <div style={{ padding: '16px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1d4ed8' }}>Admin Dashboard</h1>
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={['questions']}
          style={{ height: 'calc(100vh - 180px)' }}
          items={[
            {
              key: 'questions',
              icon: <QuestionOutlined />,
              label: 'Câu hỏi',
              onClick: () => navigate('/admin/manager/assessment/question'),
            },
            {
              key: 'question-sets',
              icon: <QuestionCircleOutlined />,
              label: 'Bộ câu hỏi',
              onClick: () => navigate('/admin/manager/assessment/question-sets'),
            },
            {
              key: 'analysis',
              icon: <StockOutlined />,
              label: 'Đánh giá',
              onClick: () => navigate('/admin/manager/analysis'),
            },
          ]}
        />

        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '16px',
        }}>
          <Button
            type="primary"
            danger
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            style={{ width: '100%' }}
          >
            Đăng xuất
          </Button>
        </div>
      </Sider>

      <Layout style={{ marginLeft: 195 }}>
        <div
          style={{
            flex: 1,
            padding: '10px',
            overflowY: 'auto',
            backgroundColor: '#f3f4f6',
          }}
        >
          <Routes>
            <Route path="/manager/assessment/question" element={<AdminQuestions />} />
            <Route path="/manager/assessment/question-sets" element={<QuestionSets />} />
            <Route path="/manager/analysis" element={<AdminAnalysis />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Layout>
    </Layout>
  );
};

export default AdminManager;
