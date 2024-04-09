import { useDispatch } from 'react-redux';
import { Plan } from '../../models/planModel';
import { setCurrentPlan } from '../../store/slices/plan/planSlice';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home-icon.svg';
import hospitalIcon from '../../assets/hospital-icon.svg';
import './planCard.scss';

export const PlanCard = ({ list }: Plan) => {
  const planDispatch = useDispatch();
  const handlePlan = (index: number) => {
    planDispatch(setCurrentPlan(list[index]));
  };

  return (
    <section className='plan-selection-container'>
      {list.map((card, index) => {
        return (
          index < 3 && (
            <article key={index} className='plan-selection-container__card'>
              <div
                className='plan-selection-container__tag'
                style={{ visibility: index !== 1 ? 'hidden' : 'visible' }}
              >
                Plan Recomendado
              </div>
              <div className='plan-selection-container__title'>
                <span>{card.name}</span>
                <img
                  src={card.name.includes('Clínica') ? hospitalIcon : homeIcon}
                  alt=''
                />
              </div>

              <span>COSTO DEL PLAN</span>
              <del>$99 antes</del>
              <p>${card.price} al mes</p>
              <hr />
              <div>
                <ul className='plan-selection-container__description'>
                  {card.description.map((d, k) => {
                    return <li key={k}>{d}</li>;
                  })}
                </ul>
              </div>
              <Link to='/resume'>
                <button onClick={() => handlePlan(index)}>
                  Seleccionar Plan
                </button>
              </Link>
            </article>
          )
        );
      })}
    </section>
  );
};
