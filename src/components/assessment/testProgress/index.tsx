import { Card, Progress } from 'antd';
import React from 'react';

interface TestProgressProps {
  current: number;
  total: number;
  timeRemaining?: number;
}

const TestProgress: React.FC<TestProgressProps> = ({ current, total, timeRemaining }) => {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <Card className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">
          Câu hỏi {current}/{total}
        </span>
        {timeRemaining && (
          <span className="text-gray-600">
            ⏱ {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </span>
        )}
      </div>
      <Progress percent={percentage} status="active" />
    </Card>
  );
};

export default TestProgress;