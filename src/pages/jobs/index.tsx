import { Avatar, Button, Card, Col, List, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
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
    ],
  },
];

// Danh sách công việc mới với hình ảnh
const jobsWithImages = [
  {
    title: "Nhà thiết kế đồ họa",
    note: "Sáng tạo, chú ý chi tiết, có kỹ năng thị giác mạnh.",
    image: "https://source.unsplash.com/150x150/?design",
  },
  {
    title: "Kỹ sư phần mềm",
    note: "Thành thạo lập trình và giải quyết vấn đề logic.",
    image: "https://source.unsplash.com/150x150/?software",
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
    <div
      style={{
        padding: "6rem 2rem 4rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Header />
      <Title level={3} style={{ textAlign: "center", marginBottom: "2rem" }}>
        Khám phá công việc qua các phương pháp khác nhau
      </Title>
      <Row gutter={[16, 16]}>
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

        {/* Hiển thị danh sách công việc có hình ảnh */}
        <Col xs={24} sm={24} md={24}>
          <Card
            title="Công việc với hình ảnh"
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
      </Row>

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
  );
};

export default Jobs;
