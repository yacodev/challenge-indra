import { Link } from 'react-router-dom';
import { HeaderPage } from '../../components/HeaderPage';
import { Steps } from '../../components/Steps';
import backBtn from '../../assets/icon-button.svg';
import { useSelector } from 'react-redux';
import { StateSelector } from '../../models/selectorModel';
import { User } from '../../models/userModel';
import { PersonCard } from '../../components/PersonCard/PersonCard';
import './offerPlans.scss';

export const OfferPlans = () => {
  const userState = useSelector<StateSelector>((state) => state.user) as User;

  return (
    <div>
      <HeaderPage />
      <Steps />
      <div className='offers__container'>
        <Link to='/'>
          <button className='offers__container--btn-back'>
            <img src={backBtn} alt='icono regresar a la vista anterior' />
            Volver
          </button>
        </Link>

        <div className='offers__container--initial-message'>
          <h1> {userState?.name} ¿Para quién deseas cotizar?</h1>
          <span>Selecciona la opción que se ajuste más a tus necesidades.</span>
        </div>
        <PersonCard />
      </div>
    </div>
  );
};
