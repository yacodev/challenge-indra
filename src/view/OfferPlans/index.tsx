import { useNavigate } from 'react-router-dom';
import { HeaderPage } from '../../components/HeaderPage';
import { Steps } from '../../components/Steps';
import backBtnIcon from '../../assets/icon-button.svg';
import { useSelector } from 'react-redux';
import { StateSelector } from '../../models/selectorModel';
import { User } from '../../models/userModel';
import { PersonCard } from '../../components/PersonCard/PersonCard';
import { useApi } from '../../hooks/useApi';
import { API } from '../../utils/api';
import { useState, useEffect, useMemo } from 'react';
import { initialPersonTypeCard } from '../../utils/initialValues';
import { PlanList } from '../../models/planModel';
import { PlanCard } from '../../components/PlanCard/PlanCard';
import { useDispatch } from 'react-redux';
import { setCurrentPlan } from '../../store/slices/plan/planSlice';
import { getAge } from '../../utils/getAge';
import './offerPlans.scss';

export const OfferPlans = () => {
  const userState = useSelector<StateSelector>((state) => state.user) as User;
  const { data, getData } = useApi({ url: API.PLAN, execute: false });
  const [personTypeCards, setPersonTypeCards] = useState(initialPersonTypeCard);
  const [plans, setPlans] = useState<PlanList[]>([]);
  const [showDiscount, setShowDiscount] = useState(false);
  const navigate = useNavigate();
  const planDispatch = useDispatch();

  const handleSelectPlan = (index: number) => {
    const newPlanSelected = plans[index];
    planDispatch(setCurrentPlan(newPlanSelected));
    navigate('/summary');
  };

  const ageUser = useMemo(() => getAge(userState.birthDay), [userState]);

  const showPlans = useMemo(
    () =>
      personTypeCards.some(
        (personTypeCard) => personTypeCard.isActive === true
      ),
    [personTypeCards]
  );

  useEffect(() => {
    if (data?.list) {
      const newPlans = data.list.filter((plan: PlanList) => plan.age > ageUser);
      setPlans(newPlans);
    }
  }, [data, ageUser]);

  useEffect(() => {
    const newInitialPersonTypeCard = initialPersonTypeCard.map((card) => ({
      ...card,
      isActive: false,
    }));
    setPersonTypeCards(newInitialPersonTypeCard);
  }, []);

  const selectTypePerson = async (key: number) => {
    const personTypeCardUpdated = personTypeCards.map((card, index) => {
      if (key === index && !card.isActive) {
        card.isActive = true;
        setShowDiscount(true);
      } else {
        card.isActive = false;
        setShowDiscount(false);
      }
      return card;
    });
    setPersonTypeCards(personTypeCardUpdated);
    await getData();
  };

  const backRegisterPage = () => {
    navigate('/');
  };

  return (
    <div>
      <HeaderPage />
      <Steps />
      <div className='offers'>
        <button className='offers__button--back' onClick={backRegisterPage}>
          <img src={backBtnIcon} alt='icono regresar a la vista anterior' />
          <span>Volver</span>
        </button>

        <div className='offers__message'>
          <h1 className='offers__message--title'>
            {' '}
            {userState?.name} ¿Para quién deseas cotizar?
          </h1>
          <span className='offers__message--description'>
            Selecciona la opción que se ajuste más a tus necesidades.
          </span>
        </div>
        <PersonCard
          personTypeCards={personTypeCards}
          selectTypePerson={selectTypePerson}
        />
        {showPlans && (
          <PlanCard
            plans={plans}
            onSelectPlan={handleSelectPlan}
            showDiscount={showDiscount}
          />
        )}
      </div>
    </div>
  );
};
