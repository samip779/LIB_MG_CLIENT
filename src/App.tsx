import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
