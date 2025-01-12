import { BarChartOutlined } from "@ant-design/icons";
import {
    Button,
    Card,
    List,
    Modal,
    Select,
    Space,
    Table,
    Tag,
    Tooltip,
    Typography,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";

const { Title } = Typography;
const { Option } = Select;

interface QuestionDetail {
  questionId: string;
  questionContent: string;
  selectedAnswerId: string | null;
  selectedAnswerContent: string | null;
  allAnswers: {
    id: string;
    content: string;
  }[];
}

interface StudentSubmission {
  id: string;
  questionSetName: string;
  questionSetId: string;
  completionDate: string;
  completionTime: string;
  status: string;
  answeredQuestions: number;
  totalQuestions: number;
  questionDetails: QuestionDetail[];
}

const AdminAnalysis: React.FC = () => {
  const [selectedQuestionSet, setSelectedQuestionSet] = useState<string>("all");
  const [submissions, setSubmissions] = useState<StudentSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<StudentSubmission[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<StudentSubmission | null>(null);

  const questionSets = [
    { id: "pending", name: "Đang phân tích" },
    { id: "completed", name: "Đã phân tích" },
  ];

  const columns: ColumnsType<StudentSubmission> = [
    {
      title: "Bộ câu hỏi",
      dataIndex: "questionSetName",
      key: "questionSetName",
      width: 200,
    },
    {
      title: "Số câu đã làm",
      key: "answeredQuestions",
      width: 100,
      align: "center",
      render: (_, record) => (
        `${record.answeredQuestions}/${record.totalQuestions}`
      ),
    },
    {
      title: "Thời gian làm",
      dataIndex: "completionTime",
      key: "completionTime",
      width: 100,
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 100,
      align: "center",
      render: (status) => (
        <Tag color={status === "Đã phân tích" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Đánh giá",
      key: "action",
      width: 50,
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Xem chi tiết">
            <Button
              icon={<BarChartOutlined />}
              onClick={() => handleViewDetail(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleViewDetail = (submission: StudentSubmission) => {
    setSelectedSubmission(submission);
    setIsModalVisible(true);
  };

  // Cập nhật hàm xử lý lọc
  const handleQuestionSetChange = (value: string) => {
    setSelectedQuestionSet(value);
    if (value === "all") {
      setFilteredSubmissions(submissions);
    } else {
      const status = value === "pending" ? "Đang phân tích" : "Đã phân tích";
      const filtered = submissions.filter(
        (submission) => submission.status === status
      );
      setFilteredSubmissions(filtered);
    }
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("quizResult");
    if (storedData) {
      try {
        const parsedData: StudentSubmission[] = JSON.parse(storedData);
        setSubmissions(parsedData);
        setFilteredSubmissions(parsedData); // Khởi tạo filteredSubmissions
      } catch (error) {
        console.error("Lỗi khi parse dữ liệu từ sessionStorage:", error);
      }
    }
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card>
        <Title level={3}>Quản lý bài làm của học sinh</Title>

        <div style={{ marginBottom: 20 }}>
          <Space>
            <span>Trạng thái:</span>
            <Select
              style={{ width: 170 }}
              value={selectedQuestionSet}
              onChange={handleQuestionSetChange}
            >
              <Option value="all">Tất cả</Option>
              {questionSets.map((set) => (
                <Option key={set.id} value={set.id}>
                  {set.name}
                </Option>
              ))}
            </Select>
          </Space>
        </div>

        <Table
          columns={columns}
          dataSource={filteredSubmissions}
          rowKey="questionSetId"
          pagination={{
            total: filteredSubmissions.length,
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Tổng số ${total} bài làm`,
          }}
        />
      </Card>

      {/* Modal hiển thị chi tiết bài làm */}
      <Modal
        title="Chi tiết bài làm"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        width={800}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Đóng
          </Button>
        ]}
      >
        {selectedSubmission && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <Title level={4}>{selectedSubmission.questionSetName}</Title>
              <Space direction="vertical">
                <p>
                  <strong>Ngày nộp:</strong>{" "}
                  {new Date(selectedSubmission.completionDate).toLocaleString()}
                </p>
                <p>
                  <strong>Thời gian làm bài:</strong>{" "}
                  {selectedSubmission.completionTime}
                </p>
                <p>
                  <strong>Số câu đã làm:</strong>{" "}
                  {`${selectedSubmission.answeredQuestions}/${selectedSubmission.totalQuestions}`}
                </p>
                <Tag color={selectedSubmission.status === "Đã phân tích" ? "green" : "red"}>
                  {selectedSubmission.status}
                </Tag>
              </Space>
            </div>

            <List
              itemLayout="vertical"
              dataSource={selectedSubmission.questionDetails}
              renderItem={(detail, index) => (
                <List.Item style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                      Câu {index + 1}: {detail.questionContent}
                    </p>
                    <div style={{ marginLeft: "20px" }}>
                      {detail.allAnswers.map((answer) => (
                        <p
                          key={answer.id}
                          style={{
                            marginBottom: "5px",
                            color: detail.selectedAnswerId === answer.id ? '#1890ff' : 'inherit',
                            fontWeight: detail.selectedAnswerId === answer.id ? 'bold' : 'normal',
                          }}
                        >
                          {detail.selectedAnswerId === answer.id ? '✓ ' : '○ '}
                          {answer.content}
                        </p>
                      ))}
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminAnalysis;