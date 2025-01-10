export interface Question {
    id: string;
    type: 'single' | 'multiple' | 'scale';
    text: string;
    options?: Array<{
      value: string;
      label: string;
    }>;
    category?: string;
  }
  
  export interface TestType {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    timeEstimate: string;
    questionsCount: number;
  }
  
  export interface TestResult {
    testId: string;
    answers: Record<string, any>;
    timestamp: Date;
  }

//   interface Question {
//     id: string;
//     question: string;
//     options: string[];
//   }