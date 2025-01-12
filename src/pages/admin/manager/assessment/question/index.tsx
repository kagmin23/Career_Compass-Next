import {
  DeleteOutlined,
  EditOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Modal,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import React, { useEffect, useState } from "react";
import { AVAILABLE_TAGS, TAG_COLORS } from "../../../../../constants/constants";

interface Answer {
  id: string;
  content: string;
}

interface Question {
  id: string;
  content: string;
  answers: Answer[];
  tags: string[];
}

interface QuestionSet {
  id: string;
  name: string;
  description: string;
  questions: Question[];
  totalQuestions: number;
  time: number;
  tags: string[];
}

const AdminQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSetModalVisible, setIsSetModalVisible] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [setNameForm] = Form.useForm();
  const [form] = Form.useForm();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const storedQuestions = sessionStorage.getItem("questions");
    if (storedQuestions) {
      const parsedQuestions = JSON.parse(storedQuestions);
      setQuestions(parsedQuestions);
      setFilteredQuestions(parsedQuestions);
    }
  }, []);

  const saveToSessionStorage = (updatedQuestions: Question[]) => {
    sessionStorage.setItem("questions", JSON.stringify(updatedQuestions));
    setQuestions(updatedQuestions);
    setFilteredQuestions(updatedQuestions);
    if (selectedTags.length > 0) {
      const filtered = updatedQuestions.filter((question) =>
        question.tags.some((tag) => selectedTags.includes(tag))
      );
      setFilteredQuestions(filtered);
    }
  };

  const handleCreateQuestionSet = () => {
    setNameForm.validateFields().then((values) => {
      const selectedQuestionSet = questions.filter((q) =>
        selectedQuestions.includes(q.id)
      );

      // Tạo một Set để lưu các tags duy nhất từ các câu hỏi đã chọn
      const uniqueQuestionTags = new Set<string>();
      selectedQuestionSet.forEach((question) => {
        question.tags.forEach((tag) => uniqueQuestionTags.add(tag));
      });

      const newSet: QuestionSet = {
        id: String(Date.now()),
        name: values.setName,
        description: values.setDescription,
        questions: selectedQuestionSet,
        totalQuestions: selectedQuestions.length,
        time: values.time,
        tags: values.tags || Array.from(uniqueQuestionTags),
      };
      const existingSets: QuestionSet[] = JSON.parse(
        sessionStorage.getItem("questionSets") || "[]"
      );

      const updatedSets = [...existingSets, newSet];
      sessionStorage.setItem("questionSets", JSON.stringify(updatedSets));

      message.success("Tạo bộ câu hỏi thành công");
      setIsSetModalVisible(false);
      setNameForm.resetFields();
      setSelectedQuestions([]);
    });
  };

  const handleAddEdit = () => {
    form.validateFields().then((values) => {
      const answers: Answer[] = values.answers.map(
        (answer: { content: string }, index: number) => ({
          id: String(index),
          content: answer.content,
        })
      );

      if (editingQuestion) {
        const updatedQuestions = questions.map((q) =>
          q.id === editingQuestion.id
            ? {
                ...values,
                id: editingQuestion.id,
                answers,
                tags: values.tags || [],
              }
            : q
        );
        saveToSessionStorage(updatedQuestions);
      } else {
        const newQuestion: Question = {
          id: String(Date.now()),
          content: values.content,
          answers,
          tags: values.tags || [],
        };
        saveToSessionStorage([...questions, newQuestion]);
      }

      message.success(
        editingQuestion ? "Cập nhật thành công" : "Thêm mới thành công"
      );
      setIsModalVisible(false);
      form.resetFields();
      setEditingQuestion(null);
    });
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Bạn có chắc chắn muốn xóa câu hỏi này?",
      okText: "Đồng ý",
      cancelText: "Hủy",
      onOk() {
        const updatedQuestions = questions.filter((q) => q.id !== id);
        saveToSessionStorage(updatedQuestions);
        setSelectedQuestions(selectedQuestions.filter((qId) => qId !== id));
        message.success("Xóa thành công");
      },
    });
  };

  const handleTagChange = (selectedTagValues: string[]) => {
    setSelectedTags(selectedTagValues);
    if (selectedTagValues.length === 0) {
      setFilteredQuestions(questions);
    } else {
      const filtered = questions.filter((question) =>
        question.tags.some((tag) => selectedTagValues.includes(tag))
      );
      setFilteredQuestions(filtered);
    }
  };

  const columns = [
    {
      title: "Tạo bộ câu hỏi",
      dataIndex: "checkbox",
      key: "checkbox",
      width: 130,
      align: "center" as const,
      render: (_: unknown, record: Question) => (
        <Checkbox
          checked={selectedQuestions.includes(record.id)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedQuestions([...selectedQuestions, record.id]);
            } else {
              setSelectedQuestions(
                selectedQuestions.filter((id) => id !== record.id)
              );
            }
          }}
        />
      ),
    },
    {
      title: "Câu hỏi",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Đáp án",
      dataIndex: "answers",
      key: "answers",
      render: (answers: Answer[]) => (
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>{answer.content}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Phương pháp",
      dataIndex: "tags",
      key: "tags",
      width: 100,
      render: (tags: string[]) => (
        <Space wrap>
          {tags?.map((tag) => (
            <Tag
              key={tag}
              color={TAG_COLORS[tag as keyof typeof TAG_COLORS] || "blue"}
            >
              {tag}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: "Thao tác",
      key: "actions",
      align: "center" as const,
      width: 100,
      render: (_: unknown, record: Question) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingQuestion(record);
              form.setFieldsValue({
                content: record.content,
                answers: record.answers.map((a) => ({
                  content: a.content,
                })),
                tags: record.tags,
              });
              setIsModalVisible(true);
            }}
          >
            Sửa
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div
        className="flex justify-between mb-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setEditingQuestion(null);
              form.resetFields();
              setIsModalVisible(true);
            }}
          >
            Thêm câu hỏi
          </Button>
          <Select
            mode="multiple"
            style={{ width: "300px" }}
            placeholder="Lọc theo thẻ"
            onChange={handleTagChange}
            value={selectedTags}
            options={AVAILABLE_TAGS.map((tag) => ({ label: tag, value: tag }))}
          />
        </Space>

        {selectedQuestions.length > 0 && (
          <Button
            type="primary"
            danger
            onClick={() => setIsSetModalVisible(true)}
          >
            Tạo bộ câu hỏi ({selectedQuestions.length})
          </Button>
        )}
      </div>
      <li
        style={{
          marginBottom: 10,
          fontStyle: "italic",
        }}
      >
        Tổng số câu hỏi: {questions.length}
      </li>
      <Table columns={columns} dataSource={filteredQuestions} rowKey="id" />
      <Modal
        title={editingQuestion ? "Sửa câu hỏi" : "Thêm câu hỏi mới"}
        open={isModalVisible}
        onOk={handleAddEdit}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingQuestion(null);
          form.resetFields();
        }}
        okText={editingQuestion ? "Cập nhật" : "Thêm mới"}
        cancelText="Hủy"
        width={800}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="content"
            label="Nội dung câu hỏi"
            rules={[{ required: true, message: "Vui lòng nhập câu hỏi!" }]}
          >
            <Input.TextArea placeholder="Nhập câu hỏi" />
          </Form.Item>

          <Form.Item
            name="tags"
            label="Thẻ"
            rules={[
              { required: true, message: "Vui lòng chọn ít nhất một thẻ!" },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              placeholder="Chọn thẻ"
              style={{ width: "100%" }}
              options={AVAILABLE_TAGS.map((tag) => ({ label: tag, value: tag }))}
            />
          </Form.Item>

          <Form.List name="answers" initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key} className="space-y-2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Item
                        {...field}
                        label={`Đáp án ${index + 1}`}
                        name={[field.name, "content"]}
                        style={{ flex: 1, marginBottom: 0 }}
                        rules={[
                          { required: true, message: "Vui lòng nhập đáp án!" },
                        ]}
                      >
                        <Input.TextArea placeholder="Nhập đáp án" />
                      </Form.Item>
                      {fields.length > 1 && (
                        <Button
                          type="text"
                          icon={<MinusCircleOutlined />}
                          style={{ marginTop: 25 }}
                          onClick={() => remove(field.name)}
                        />
                      )}
                    </div>
                  </div>
                ))}
                <Form.Item>
                  <Button
                    style={{ marginTop: 25 }}
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Thêm đáp án
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Modal>

      <Modal
        title="Đặt tên cho bộ câu hỏi"
        open={isSetModalVisible}
        onOk={handleCreateQuestionSet}
        onCancel={() => {
          setIsSetModalVisible(false);
          setNameForm.resetFields();
        }}
        okText="Tạo"
        cancelText="Hủy"
      >
        <div
          style={{
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          <div style={{ textAlign: "right", marginBottom: 15 }}>
            Số câu hỏi đã chọn: {selectedQuestions.length}
          </div>

          {/* Hiển thị danh sách tags từ các câu hỏi đã chọn */}
          {selectedQuestions.length > 0 && (
            <div style={{ marginBottom: 15 }}>
              <div style={{ marginBottom: 5 }}>
                Tags từ các câu hỏi đã chọn:
              </div>
              <Space wrap>
                {Array.from(
                  new Set(
                    questions
                      .filter((q) => selectedQuestions.includes(q.id))
                      .flatMap((q) => q.tags)
                  )
                ).map((tag) => (
                  <Tag
                    key={tag}
                    color={TAG_COLORS[tag as keyof typeof TAG_COLORS] || "blue"}
                  >
                    {tag}
                  </Tag>
                ))}
              </Space>
            </div>
          )}
        </div>

        <Form form={setNameForm} layout="vertical">
          <Form.Item
            name="setName"
            label="Tên bộ câu hỏi"
            rules={[
              { required: true, message: "Vui lòng nhập tên bộ câu hỏi!" },
            ]}
          >
            <Input.TextArea placeholder="Nhập tên bộ câu hỏi" />
          </Form.Item>
          <Form.Item
            name="setDescription"
            label="Mô tả"
            rules={[{ required: true, message: "Vui lòng mô tả bộ câu hỏi!" }]}
          >
            <Input.TextArea placeholder="Nhập mô tả bộ câu hỏi" />
          </Form.Item>
          <Form.Item
            name="time"
            label="Thời gian"
            rules={[{ required: true, message: "Vui lòng thiết lập thời gian kiểm tra bộ câu hỏi!" }]}
          >
            <Input type="number" placeholder="Thời gian" />
          </Form.Item>
          <Form.Item
            name="tags"
            label="Thẻ cho bộ câu hỏi"
            help="Nếu không chọn, hệ thống sẽ tự động sử dụng tất cả tags từ các câu hỏi đã chọn"
          >
            <Select
              mode="multiple"
              placeholder="Chọn thẻ cho bộ câu hỏi"
              style={{ width: "100%" }}
              options={AVAILABLE_TAGS.map((tag) => ({ label: tag, value: tag }))}
              allowClear
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminQuestions;