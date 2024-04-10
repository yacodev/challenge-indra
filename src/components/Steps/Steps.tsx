import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import btnBack from '../../assets/back-mobile.svg';
import './steps.scss';

export const Steps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentStep = location.pathname;
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (currentStep === '/offer-plan') {
      setStep(1);
    } else if (currentStep === '/summary') {
      setStep(2);
    }
  }, [currentStep]);

  const handleBack = () => {
    if (step === 1) {
      navigate('/');
    } else {
      navigate('/offer-plan');
    }
  };

  return (
    <div>
      <nav className='steps'>
        <section className={step === 1 ? 'offer--active' : 'offer'}>
          <span>1</span> Planes y coberturas
        </section>
        <section className='separador'>- - - - </section>
        <section className={step === 2 ? 'resume--active' : 'resume'}>
          <span>2</span> Resumen
        </section>
      </nav>
      <nav className='steps__mobile'>
        <img
          className='steps__mobile--btn-back'
          src={btnBack}
          alt='icono regresar al paso anterior'
          onClick={handleBack}
          onKeyDown={handleBack}
        />
        {step === 1 ? <span> PASO 1 DE 2</span> : <span> PASO 2 DE 2</span>}
        <div className='steps__mobile--progress-bar'>
          <div
            className={
              step === 1 ? 'progress__bar--step1' : 'progress__bar--step2'
            }
          ></div>
        </div>
      </nav>
    </div>
  );
};
