import { useEffect, useState } from 'react';
import { Question } from '../types/assessment/types';

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
      filterQuestionsByTags(selectedTags, updatedQuestions);
    }
  };

  const filterQuestionsByTags = (tags: string[], questionList = questions) => {
    if (tags.length === 0) {
      setFilteredQuestions(questionList);
    } else {
      const filtered = questionList.filter(question =>
        question.tags.some(tag => tags.includes(tag))
      );
      setFilteredQuestions(filtered);
    }
  };

  return {
    questions,
    filteredQuestions,
    selectedTags,
    setSelectedTags,
    saveToSessionStorage,
    filterQuestionsByTags
  };
};
