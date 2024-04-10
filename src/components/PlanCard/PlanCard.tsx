import homeIcon from '../../assets/home-icon.svg';
import hospitalIcon from '../../assets/hospital-icon.svg';
import { PlanCardProps } from './types';
import './planCard.scss';

export const PlanCard = ({
  plans,
  onSelectPlan,
  showDiscount = false,
}: PlanCardProps) => {
  return (
    <section className='plan'>
      {plans.map((plan, index) => {
        return (
          <article key={index} className='plan__card'>
            <div
              className='plan__card--tag'
              style={{ visibility: index !== 1 ? 'hidden' : 'visible' }}
            >
              Plan Recomendado
            </div>
            <div className='plan__card--title'>
              <span>{plan.name}</span>
              <img
                src={plan.name.includes('Clínica') ? hospitalIcon : homeIcon}
                alt='icono del plan'
              />
            </div>

            <span className='plan__card--plan-name'>COSTO DEL PLAN</span>
            {showDiscount && (
              <del className='plan__card--plan-discount'>
                ${plan.price} antes
              </del>
            )}
            <p className='plan__card--plan-price'>
              ${showDiscount ? plan.price * 0.95 : plan.price} al mes
            </p>
            <hr />
            <div className='plan__card--description-container'>
              <ul className='plan__card--description'>
                {plan.description.map((d, k) => {
                  return <li key={k}>{d}</li>;
                })}
              </ul>
            </div>
            <div className='button__container'>
              <button
                className='button__plan'
                onClick={() => onSelectPlan(index)}
              >
                Seleccionar Plan
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};
