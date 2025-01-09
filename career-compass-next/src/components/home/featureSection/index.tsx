import {
  BarChartOutlined,
  CompassOutlined,
  HeartOutlined,
  StarOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const features = [
  {
    icon: <CompassOutlined className="text-4xl text-blue-500" />,
    title: "Ikigai",
    description:
      "Khám phá sự cân bằng giữa đam mê, năng lực, và nhu cầu xã hội",
    image: "https://st.quantrimang.com/photos/image/2021/12/20/Ikigai-1.jpg", // Thay bằng URL hình ảnh thực tế
  },
  {
    icon: <UserOutlined className="text-4xl text-green-500" />,
    title: "MBTI",
    description: "Hiểu rõ tính cách của bạn và nghề nghiệp phù hợp",
    image: "https://images.careerviet.vn/content/images/mbti-la-gi-careerbuilder-3(1).jpeg", // Thay bằng URL hình ảnh thực tế
  },
  {
    icon: <StarOutlined className="text-4xl text-yellow-500" />,
    title: "RIASEC",
    description: "Xác định sở thích và môi trường làm việc lý tưởng",
    image: "https://huongnghiepaau.edu.vn/wp-content/uploads/2022/02/mat-ma-holland.jpg", // Thay bằng URL hình ảnh thực tế
  },
  {
    icon: <BarChartOutlined className="text-4xl text-purple-500" />,
    title: "StrengthsFinder",
    description: "Khám phá điểm mạnh độc đáo của bạn",
    image: "https://media.licdn.com/dms/image/v2/C4E12AQEKZVXSG9iGuA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1520153262403?e=1740009600&v=beta&t=3as_XEjhgHSME08EuAWq3ZX8dC_gNvSZ3Am1SYwQ0FE", // Thay bằng URL hình ảnh thực tế
  },
  {
    icon: <HeartOutlined className="text-4xl text-red-500" />,
    title: "VIA Character",
    description: "Tìm hiểu các đặc điểm tính cách nổi bật",
    image: "https://trangtamly.blog/wp-content/uploads/2024/06/viatescover.jpg?w=800", // Thay bằng URL hình ảnh thực tế
  },
  {
    icon: <ToolOutlined className="text-4xl text-orange-500" />,
    title: "Skills Assessment",
    description: "Đánh giá kỹ năng và năng lực hiện tại",
    image: "https://aztraining.vn/wp-content/uploads/2023/03/AZ-CAREERS-TRAINING-TIPS-SKILLS-ASSESSMENT.jpg", // Thay bằng URL hình ảnh thực tế
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: "1rem",
        paddingBottom: "4rem",
        backgroundColor: "#f8fafc", // Tailwind bg-gray-50
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
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Các phương pháp hướng nghiệp
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              style={{
                transition: "box-shadow 0.3s",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              hoverable
            >
              <div style={{ textAlign: "center", position: "relative" }}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: "100%",
                    height: "10rem",
                    objectFit: "cover",
                    marginBottom: "1rem",
                    borderRadius: "0.375rem", // Rounded corners
                  }}
                />
                <div>{feature.icon}</div>
                <h3
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#4b5563" }}>{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
