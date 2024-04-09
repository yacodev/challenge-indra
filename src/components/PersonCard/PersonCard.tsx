import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { PlanList } from '../../models/planModel';
import { initialPersonTypeCard } from '../../utils/initialValues';
import { API } from '../../utils/api';
import './personCard.scss';
import { PlanCard } from '../PlanCard';

export const PersonCard = () => {
  const { data, getData } = useApi({ url: API.PLAN, execute: false });
  const [personTypeCards, setPersonTypeCards] = useState(initialPersonTypeCard);
  const [dataCards, setDataCards] = useState<PlanList[]>([]);

  useEffect(() => {
    if (data?.list) {
      setDataCards(data.list);
    }
  }, [data]);

  console.log({ dataCards });

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
    <>
      <section className='person__card--container'>
        {personTypeCards.map((personTypeCard, key) => {
          return (
            <article
              className={
                personTypeCard.isActive
                  ? 'person__card--card-active'
                  : 'person__card--card'
              }
              onClick={() => selectTypePerson(key)}
              onKeyDown={() => {}}
              key={key}
            >
              <input
                type='checkbox'
                className='person__card--checkbox'
                checked={personTypeCard.isActive}
                readOnly
                name='check'
              />
              <img src={personTypeCard.img} alt='nada' />
              <span>{personTypeCard.person}</span>

              <p>{personTypeCard.description}</p>
            </article>
          );
        })}
      </section>
      {dataCards.length > 0 &&
        personTypeCards.some(
          (personTypeCard) => personTypeCard.isActive === true
        ) && <PlanCard list={dataCards} />}
    </>
  );
};
