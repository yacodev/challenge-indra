import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../view/Register';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
