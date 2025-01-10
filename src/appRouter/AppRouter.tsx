import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage, Jobs, LoginForm, QuizTesting, RegisterForm, SavedTests, StudentAssessment } from '../pages';
import AdminManager from '../pages/admin';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/user/homepage' element={<HomePage />} />
        <Route path='/user/list-jobs' element={<Jobs />} />
        <Route path='/user/do-test' element={<StudentAssessment />} />
        <Route path='/user/saved-tests' element={<SavedTests />} />
        <Route path='/user/do-test/quiz-testing/:id' element={<QuizTesting />} />
        <Route path='/admin/*' element={<AdminManager />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
