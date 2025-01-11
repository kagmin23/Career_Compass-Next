import { BarChartOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Select, Space, Table, Tag, Tooltip, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

const { Title } = Typography;
const { Option } = Select;

interface StudentSubmission {
    id: string;
    studentName: string;
    studentId: string;
    questionSetName: string;
    submittedAt: string;
    score: number;
    status: 'completed' | 'in_progress' | 'not_started';
    timeSpent: number;
}

const AdminAnalysis: React.FC = () => {
    const [selectedQuestionSet, setSelectedQuestionSet] = useState<string>('all');
    
    // Mock data - thay thế bằng API call thực tế
    const questionSets = [
        { id: '1', name: 'Toán học cơ bản' },
        { id: '2', name: 'Vật lý đại cương' },
        { id: '3', name: 'Hóa học hữu cơ' },
    ];

    const submissions: StudentSubmission[] = [
        {
            id: '1',
            studentName: 'Nguyễn Văn A',
            studentId: 'SV001',
            questionSetName: 'Toán học cơ bản',
            submittedAt: '2024-01-11 09:30',
            score: 85,
            status: 'completed',
            timeSpent: 45,
        },
        // Thêm dữ liệu mẫu khác...
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'success';
            case 'in_progress':
                return 'processing';
            default:
                return 'default';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'Hoàn thành';
            case 'in_progress':
                return 'Đang làm';
            default:
                return 'Chưa bắt đầu';
        }
    };

    const columns: ColumnsType<StudentSubmission> = [
        {
            title: 'Mã SV',
            dataIndex: 'studentId',
            key: 'studentId',
            width: 100,
        },
        {
            title: 'Tên sinh viên',
            dataIndex: 'studentName',
            key: 'studentName',
            width: 200,
        },
        {
            title: 'Bộ câu hỏi',
            dataIndex: 'questionSetName',
            key: 'questionSetName',
            width: 200,
        },
        {
            title: 'Thời gian nộp',
            dataIndex: 'submittedAt',
            key: 'submittedAt',
            width: 150,
        },
        {
            title: 'Điểm số',
            dataIndex: 'score',
            key: 'score',
            width: 100,
            render: (score) => `${score}/100`,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            width: 120,
            render: (status) => (
                <Tag color={getStatusColor(status)}>
                    {getStatusText(status)}
                </Tag>
            ),
        },
        {
            title: 'Thời gian làm (phút)',
            dataIndex: 'timeSpent',
            key: 'timeSpent',
            width: 150,
        },
        {
            title: 'Thao tác',
            key: 'action',
            width: 120,
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Xem chi tiết">
                        <Button 
                            icon={<EyeOutlined />} 
                            onClick={() => handleViewDetail(record.id)}
                        />
                    </Tooltip>
                    <Tooltip title="Thống kê">
                        <Button 
                            icon={<BarChartOutlined />} 
                            onClick={() => handleViewStats(record.id)}
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const handleViewDetail = (submissionId: string) => {
        console.log('Xem chi tiết bài làm:', submissionId);
        // Implement view detail logic
    };

    const handleViewStats = (submissionId: string) => {
        console.log('Xem thống kê:', submissionId);
        // Implement statistics view logic
    };

    const handleQuestionSetChange = (value: string) => {
        setSelectedQuestionSet(value);
        // Implement filtering logic
    };

    return (
        <div className="p-6">
            <Card>
                <Title level={3}>Quản lý bài làm của học sinh</Title>
                
                <div className="mb-4">
                    <Space>
                        <span>Bộ câu hỏi:</span>
                        <Select
                            style={{ width: 300 }}
                            value={selectedQuestionSet}
                            onChange={handleQuestionSetChange}
                        >
                            <Option value="all">Tất cả bộ câu hỏi</Option>
                            {questionSets.map(set => (
                                <Option key={set.id} value={set.id}>
                                    {set.name}
                                </Option>
                            ))}
                        </Select>
                    </Space>
                </div>

                <Table
                    columns={columns}
                    dataSource={submissions}
                    rowKey="id"
                    scroll={{ x: 1200 }}
                    pagination={{
                        total: submissions.length,
                        pageSize: 10,
                        showSizeChanger: true,
                        showTotal: (total) => `Tổng số ${total} bài làm`,
                    }}
                />
            </Card>
        </div>
    );
};

export default AdminAnalysis;