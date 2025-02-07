import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Space,
  Table,
  Typography,
  message,
} from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";

const { Text } = Typography;

interface Question {
  id: string;
  content: string;
  answers: { id: string; content: string }[];
}

interface QuestionSet {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  questions: Question[];
  tags: string[];
}

const QuestionSets: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingSet, setEditingSet] = useState<QuestionSet | null>(null);
  const [questionSets, setQuestionSets] = useState<QuestionSet[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    const storedQuestionSets = sessionStorage.getItem("questionSets");
    if (storedQuestionSets) {
      setQuestionSets(JSON.parse(storedQuestionSets));
      const parsedSets = JSON.parse(storedQuestionSets);
      console.log('hi',parsedSets);
    }
  }, []);

  const handleSave = () => {
    form.validateFields().then((values) => {
      if (editingSet) {
        const updatedSets = questionSets.map((set) =>
          set.id === editingSet.id
            ? {
                ...editingSet,
                ...values,
                totalQuestions: editingSet.questions.length,
              }
            : set
        );
        setQuestionSets(updatedSets);
        sessionStorage.setItem("questionSets", JSON.stringify(updatedSets));
        message.success("Cập nhật bộ câu hỏi thành công!");
      }
      setIsModalVisible(false);
      setEditingSet(null);
      form.resetFields();
    });
  };

  const handleDelete = (id: string) => {
    const updatedSets = questionSets.filter((set) => set.id !== id);
    setQuestionSets(updatedSets);
    sessionStorage.setItem("questionSets", JSON.stringify(updatedSets));
    message.success("Xóa bộ câu hỏi thành công!");
  };

  const columns: ColumnsType<QuestionSet> = [
    {
      title: "Tên bộ câu hỏi",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: QuestionSet) => (
        <a onClick={() => setSelectedQuestions(record.questions)}>
          {text}
        </a>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Số câu hỏi",
      dataIndex: "totalQuestions",
      key: "totalQuestions",
      width: 150,
      align: "center",
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 100,
      align: "center",
      render: (_: unknown, record: QuestionSet) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingSet(record);
              form.setFieldsValue({
                name: record.name,
                description: record.description,
              });
              setIsModalVisible(true);
            }}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa bộ câu hỏi này?"
            okText="Đồng ý"
            cancelText="Hủy"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <li style={{ fontSize: 17 }}>Danh sách bộ câu hỏi</li>
        <p style={{ marginBottom: 10, fontStyle: "italic" }}>
          Tổng số Bộ câu hỏi: {questionSets.length}
        </p>
      </div>

      <Table columns={columns} dataSource={questionSets} rowKey="id" />

      <Modal
        title={editingSet ? "Sửa bộ câu hỏi" : "Thêm bộ câu hỏi"}
        open={isModalVisible}
        onOk={handleSave}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingSet(null);
          form.resetFields();
        }}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Tên bộ câu hỏi"
            rules={[{ required: true, message: "Vui lòng nhập tên bộ câu hỏi!" }]}
          >
            <Input placeholder="Nhập tên bộ câu hỏi" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô tả"
            rules={[{ required: true, message: "Vui lòng nhập mô tả bộ câu hỏi!" }]}
          >
            <Input.TextArea placeholder="Nhập mô tả bộ câu hỏi" />
          </Form.Item>
        </Form>
      </Modal>

      {selectedQuestions && (
        <Modal
          title="Bộ câu hỏi:"
          open={!!selectedQuestions}
          onCancel={() => setSelectedQuestions(null)}
          footer={null}
        >
          {selectedQuestions.map((question) => (
            <div key={question.id} style={{ marginBottom: 10 }}>
              <Text strong>{question.content}</Text>
              <ul>
                {question.answers.map((answer, index) => (
                  <li key={index}>{answer.content}</li>
                ))}
              </ul>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default QuestionSets;