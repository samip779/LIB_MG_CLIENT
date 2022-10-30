import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
