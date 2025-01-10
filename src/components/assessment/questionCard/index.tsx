import { Button, Card, Checkbox, Radio, Slider, Space } from 'antd';
import React from 'react';
import { Question } from '../../../types/assessment/types';

interface QuestionCardProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  onNext: () => void;
  isLast: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  value,
  onChange,
  onNext,
  isLast,
}) => {
  const renderAnswer = () => {
    switch (question.type) {
      case 'single':
        return (
          <Radio.Group 
            onChange={(e) => onChange(e.target.value)} 
            value={value}
            className="w-full"
          >
            <Space direction="vertical" className="w-full">
              {question.options?.map((option) => (
                <Radio 
                  key={option.value} 
                  value={option.value}
                  className="w-full p-3 border rounded-lg hover:bg-gray-50"
                >
                  {option.label}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        );
      
      case 'multiple':
        return (
          <Checkbox.Group
            onChange={onChange}
            value={value}
            className="w-full"
          >
            <Space direction="vertical" className="w-full">
              {question.options?.map((option) => (
                <Checkbox
                  key={option.value}
                  value={option.value}
                  className="w-full p-3 border rounded-lg hover:bg-gray-50"
                >
                  {option.label}
                </Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        );
      
      case 'scale':
        return (
          <div className="px-4">
            <Slider
              min={1}
              max={5}
              value={value}
              onChange={onChange}
              marks={{
                1: 'Hoàn toàn không đồng ý',
                2: 'Không đồng ý',
                3: 'Trung lập',
                4: 'Đồng ý',
                5: 'Hoàn toàn đồng ý'
              }}
            />
          </div>
        );
    }
  };

  return (
    <Card className="mb-6">
      <h3 className="text-lg font-medium mb-6">{question.text}</h3>
      {renderAnswer()}
      <div className="mt-6 flex justify-end">
        <Button 
          type="primary" 
          onClick={onNext}
          disabled={value === undefined || value === null}
        >
          {isLast ? 'Hoàn thành' : 'Câu tiếp theo'}
        </Button>
      </div>
    </Card>
  );
};

export default QuestionCard;
