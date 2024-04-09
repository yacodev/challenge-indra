import { Link } from 'react-router-dom';
import { HeaderPage } from '../../components/HeaderPage';
import { Steps } from '../../components/Steps';
import backBtn from '../../assets/icon-button.svg';
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
import './offerPlans.scss';

export const OfferPlans = () => {
  const userState = useSelector<StateSelector>((state) => state.user) as User;
  useMemo(() => {
    initialPersonTypeCard.forEach((card) => (card.isActive = false));
  }, []);
  const { data, getData } = useApi({ url: API.PLAN, execute: false });
  const [personTypeCards, setPersonTypeCards] = useState(initialPersonTypeCard);
  const [dataCards, setDataCards] = useState<PlanList[]>([]);

  useEffect(() => {
    if (data?.list) {
      setDataCards(data.list);
    }
  }, [data]);

  const selectTypePerson = async (key: number) => {
    const personTypeCardUpdated = personTypeCards.map((card, index) => {
      if (key === index && !card.isActive) {
        card.isActive = true;
      } else {
        card.isActive = false;
      }
      return card;
    });
    setPersonTypeCards(personTypeCardUpdated);
    await getData();
  };

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
        <PersonCard
          personTypeCards={personTypeCards}
          selectTypePerson={selectTypePerson}
        />
        {dataCards.length > 0 &&
          personTypeCards.some(
            (personTypeCard) => personTypeCard.isActive === true
          ) && <PlanCard list={dataCards} />}
      </div>
    </div>
  );
};
