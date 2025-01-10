import { CodeSandboxOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Layout.Footer
      style={{
        background: "linear-gradient(to right, #346766, #38AD7D)",
        color: 'white',
        padding: '2rem 1rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1200px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '2rem',
            alignItems: 'flex-start', // Căn phần tử theo chiều dọc
          }}
        >
          {/* Career Compass */}
          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              Career Compass
            </h3>
            <p
              style={{
                color: '#cbd5e0', // Gray-400
              }}
            >
              Hỗ trợ định hướng nghề nghiệp cho học sinh
            </p>
            <p
              style={{
                color: '#cbd5e0', // Gray-400
              }}
            >
              ...
            </p>
          </div>

          {/* Liên kết */}
          <div>
            <h4
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
              }}
            >
              Liên kết
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                color: '#cbd5e0', // Gray-400
              }}
            >
              <li>
                <Link to="#" style={{ color: '#cbd5e0' }}>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="#" style={{ color: '#cbd5e0' }}>
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="#" style={{ color: '#cbd5e0' }}>
                  Chính sách
                </Link>
              </li>
            </ul>
          </div>

          {/* Bài kiểm tra */}
          <div>
            <h4
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
              }}
            >
              Bài kiểm tra
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                color: '#cbd5e0',
              }}
            >
              <li>
                <Link to="#" style={{ color: '#cbd5e0' }}>
                  MBTI
                </Link>
              </li>
              <li>
                <Link to="#" style={{ color: '#cbd5e0' }}>
                  RIASEC
                </Link>
              </li>
              <li>
                <Link to="#" style={{ color: '#cbd5e0' }}>
                  StrengthsFinder
                </Link>
              </li>
            </ul>
          </div>

          {/* Theo dõi */}
          <div>
            <h4
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
              }}
            >
              Theo dõi
            </h4>
            <h1
            style={{
              textAlign: 'center'
            }}>
              <CodeSandboxOutlined />
            </h1>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid white',
            marginTop: '2rem',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#cbd5e0',
          }}
        >
          <p>&copy; 2024 Career Compass. All rights reserved.</p>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
