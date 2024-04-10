import { useNavigate } from 'react-router-dom';
import { Steps } from '../../components/Steps';
import { HeaderPage } from '../../components/HeaderPage';
import backBtnIcon from '../../assets/icon-button.svg';
import { SummaryCard } from '../../components/SummaryCard';
import { useSelector } from 'react-redux';
import { StateSelector } from '../../models/selectorModel';
import { User } from '../../models/userModel';
import { PlanList } from '../../models/planModel';
import './summary.scss';

export const SummaryPage = () => {
  const navigate = useNavigate();
  const userState = useSelector<StateSelector>((state) => state.user) as User;
  const planState = useSelector<StateSelector>(
    (state) => state?.plan
  ) as PlanList;

  console.log({ planState });
  const backOfferPage = () => {
    navigate('/offer-plan');
  };

  return (
    <div>
      <HeaderPage />
      <Steps />
      <button className='offers__container--btn-back' onClick={backOfferPage}>
        <img src={backBtnIcon} alt='icono regresar a la vista anterior' />
        <span>Volver</span>
      </button>
      <section className='summary__container'>
        <div className='summary__container--title'>Resumen del seguro</div>
        <SummaryCard user={userState} plan={planState} />
      </section>
    </div>
  );
};
