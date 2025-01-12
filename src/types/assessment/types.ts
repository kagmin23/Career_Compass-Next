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
    answers: Record<string, string | number>;
    timestamp: Date;
  }

  export interface Answer {
    id: string;
    content: string;
  }
  
  export interface Question {
    id: string;
    content: string;
    answers: Answer[];
    tags: string[];
  }
  
  export interface QuestionSet {
    id: string;
    name: string;
    description: string;
    questions: Question[];
    totalQuestions: number;
    tags: string[];
  }
  