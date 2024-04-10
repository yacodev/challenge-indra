import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../view/Register';
import { OfferPlans } from '../view/OfferPlans';
import { SummaryPage } from '../view/Summary';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<RegisterPage />} />
      <Route path='/offer-plan' element={<OfferPlans />} />
      <Route path='/summary' element={<SummaryPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
