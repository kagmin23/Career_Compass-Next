import { FileProtectOutlined, LoginOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="logout">
        <Link to="/user/saved-tests"><FileProtectOutlined /> &nbsp;&nbsp;Bài kiểm tra của bạn</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/login"><LoginOutlined /> &nbsp;&nbsp;Đăng xuất</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          padding: '0 1rem',
          margin: '0 auto',
          maxWidth: '1200px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem',
          }}
        >
          <Link
            to="/user/homepage"
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#3b82f6', // Blue color
            }}
          >
            Career Compass
          </Link>

          <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'center', flex: 1, border: 'none' }}>
            <Menu.Item key="home">
              <Link to="/user/homepage">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="tests">
              <Link to="/user/do-test">Bài kiểm tra</Link>
            </Menu.Item>
            <Menu.Item key="careers">
              <Link to="/user/list-jobs">Nghề nghiệp</Link>
            </Menu.Item>
          </Menu>

          {/* Avatar section */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Dropdown overlay={menu} trigger={['hover']}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                <UserSwitchOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
