import { DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: "6rem", // Thêm padding-top cho khoảng cách giữa header và nội dung
        paddingBottom: "4rem", // Thêm padding-bottom cho phần đuôi
        background: "linear-gradient(to right, #38AD7D, #346766)", // Gradient màu xanh
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Khám phá nghề nghiệp phù hợp với bạn
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              Sử dụng các bài kiểm tra khoa học để tìm hiểu bản thân và định
              hướng nghề nghiệp tương lai
            </p>
          </div>

          <Link to="/user/do-test">
            <div style={{ textAlign: "right" }}>
              <Button
                size="large"
                type="primary"
                style={{
                  backgroundColor: "white",
                  color: "#3b82f6",
                  borderRadius: "8px",
                }}
              >
                Bắt đầu ngay <DoubleRightOutlined />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
