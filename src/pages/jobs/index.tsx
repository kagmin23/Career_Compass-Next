import { Avatar, Button, Card, Col, List, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";

const { Title, Text } = Typography;

// Danh sách phương pháp và công việc
const methods = [
  {
    name: "Ikigai",
    jobs: [
      {
        title: "Huấn luyện viên cuộc sống",
        note: "Hỗ trợ định hướng cuộc sống, cải thiện kỹ năng và phát triển cá nhân.",
        image: "https://source.unsplash.com/150x150/?life,coach",
      },
      {
        title: "Diễn giả tạo động lực",
        note: "Truyền cảm hứng qua lời nói, giúp mọi người đạt được mục tiêu.",
        image: "https://source.unsplash.com/150x150/?motivation,speaker",
      },
      {
        title: "Tư vấn viên nghề nghiệp",
        note: "Giúp xác định mục tiêu nghề nghiệp và kế hoạch phát triển.",
        image: "https://source.unsplash.com/150x150/?career,counselor",
      },
      {
        title: "Giảng viên Yoga",
        note: "Dạy yoga để cải thiện sức khỏe và cân bằng tâm trí.",
        image: "https://source.unsplash.com/150x150/?yoga,instructor",
      },
      // Thêm công việc mới vào đây
      {
        title: "Nhà sáng lập doanh nghiệp",
        note: "Xây dựng và phát triển doanh nghiệp từ đầu.",
        image: "https://source.unsplash.com/150x150/?entrepreneur",
      },
    ],
  },
  {
    name: "MBTI",
    jobs: [
      {
        title: "Chuyên viên nhân sự",
        note: "Quản lý nhân sự và tối ưu hóa tài năng tổ chức.",
        image: "https://source.unsplash.com/150x150/?hr,specialist",
      },
      {
        title: "Nhà tâm lý học",
        note: "Tư vấn, hỗ trợ tinh thần và nghiên cứu hành vi con người.",
        image: "https://source.unsplash.com/150x150/?psychologist",
      },
      // Thêm công việc mới vào đây
      {
        title: "Chuyên viên tư vấn quản lý",
        note: "Tư vấn chiến lược và giúp tối ưu hóa quy trình công ty.",
        image: "https://source.unsplash.com/150x150/?management,consultant",
      },
    ],
  },
  {
    name: "RIASEC",
    jobs: [
      {
        title: "Kỹ sư xây dựng",
        note: "Thiết kế, xây dựng và duy trì các công trình hạ tầng.",
        image: "https://source.unsplash.com/150x150/?construction,engineer",
      },
      {
        title: "Nhà khoa học",
        note: "Nghiên cứu và phát triển các lý thuyết khoa học mới.",
        image: "https://source.unsplash.com/150x150/?scientist",
      },
      {
        title: "Họa sĩ",
        note: "Sáng tạo các tác phẩm nghệ thuật bằng nhiều phương tiện khác nhau.",
        image: "https://source.unsplash.com/150x150/?artist",
      },
      {
        title: "Kế toán",
        note: "Quản lý các tài khoản tài chính, báo cáo và phân tích dữ liệu kế toán.",
        image: "https://source.unsplash.com/150x150/?accountant",
      },
    ],
  },
  {
    name: "StrengthsFinder",
    jobs: [
      {
        title: "Chuyên viên nhân sự",
        note: "Quản lý nhân sự và tối ưu hóa tài năng tổ chức.",
        image: "https://source.unsplash.com/150x150/?hr,specialist",
      },
      {
        title: "Nhà tâm lý học",
        note: "Tư vấn, hỗ trợ tinh thần và nghiên cứu hành vi con người.",
        image: "https://source.unsplash.com/150x150/?psychologist",
      },
      {
        title: "Chuyên viên tư vấn quản lý",
        note: "Tư vấn chiến lược và giúp tối ưu hóa quy trình công ty.",
        image: "https://source.unsplash.com/150x150/?management,consultant",
      },
    ],
  },
];

// Danh sách công việc mới với hình ảnh
const jobsWithImages = [
  {
    title: "Chuyên viên phân tích dữ liệu",
    note: "Phân tích và đưa ra quyết định từ các bộ dữ liệu lớn với kỹ năng phân tích và thống kê.",
    image: "https://source.unsplash.com/150x150/?data,analyst",
  },
  {
    title: "Kỹ sư cơ khí",
    note: "Thiết kế và cải tiến các hệ thống cơ khí với kỹ năng kỹ thuật và tư duy sáng tạo.",
    image: "https://source.unsplash.com/150x150/?mechanical,engineer"
  },
  {
    title: "Giảng viên đại học",
    note: "Chia sẻ kiến thức và truyền cảm hứng cho sinh viên bằng sự kiên nhẫn và sự tận tâm.",
    image: "https://source.unsplash.com/150x150/?university,professor"
  },
];

const Jobs: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{
    title: string;
    note: string;
    image: string;
  } | null>(null);

  const showModal = (job: { title: string; note: string; image: string }) => {
    setSelectedJob(job);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "4rem 0 2rem 0",
        }}
      >
        <Header />
        <Title level={3} style={{ textAlign: "center", marginBottom: "2rem" }}>
          Khám phá công việc qua các phương pháp khác nhau
        </Title>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          
        }}>
          <Row gutter={[30, 30]}>
            {methods.map((method) => (
              <Col key={method.name} xs={24} sm={12} md={8} lg={8}>
                <Card
                  title={method.name}
                  bordered={true}
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <List
                    size="small"
                    dataSource={method.jobs}
                    renderItem={(job) => (
                      <List.Item>
                        <Text
                          style={{ cursor: "pointer", color: "#1890ff" }}
                          onClick={() => showModal(job)}
                        >
                          - {job.title}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            ))}

            {/* Thêm một card mới với công việc */}
            <Col xs={24} sm={12} md={8} lg={8}>
              <Card
                title="Các công việc sáng tạo"
                bordered={true}
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#ffffff",
                }}
              >
                <List
                  size="small"
                  dataSource={jobsWithImages}
                  renderItem={(job) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={job.image} />}
                        title={
                          <Text
                            style={{ cursor: "pointer", color: "#1890ff" }}
                            onClick={() => showModal(job)}
                          >
                            {job.title}
                          </Text>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>

        {/* Hiển thị danh sách công việc có hình ảnh */}
        <div
          style={{
            marginTop: 30,
          }}
        >
          <Col xs={24} sm={24} md={24}>
            <Card
              title="Xem thêm..."
              bordered={true}
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              <List
                size="large"
                dataSource={jobsWithImages}
                renderItem={(job) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={job.image} />}
                      title={
                        <Text
                          style={{ cursor: "pointer", color: "#1890ff" }}
                          onClick={() => showModal(job)}
                        >
                          {job.title}
                        </Text>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </div>

        {/* Modal hiển thị chi tiết */}
        <Modal
          title={selectedJob?.title}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="close" onClick={handleCancel}>
              Đóng
            </Button>,
          ]}
        >
          <div style={{ textAlign: "center" }}>
            {selectedJob?.image && (
              <img
                src={selectedJob.image}
                alt={selectedJob.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                }}
              />
            )}
            <Text strong>Ghi chú:</Text>
            <p>{selectedJob?.note}</p>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
