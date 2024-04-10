import { PlanList } from '../../models/planModel';
import homeIcon from '../../assets/home-icon.svg';
import hospitalIcon from '../../assets/hospital-icon.svg';
import './planCard.scss';

export interface PlanCardProps {
  plans: PlanList[];
  onSelectPlan: (index: number) => void;
}

export const PlanCard = ({ plans, onSelectPlan }: PlanCardProps) => {
  return (
    <section className='plan-selection-container'>
      {plans.map((plan, index) => {
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
                <span>{plan.name}</span>
                <img
                  src={plan.name.includes('Clínica') ? hospitalIcon : homeIcon}
                  alt=''
                />
              </div>

              <span>COSTO DEL PLAN</span>
              <del>$99 antes</del>
              <p>${plan.price} al mes</p>
              <hr />
              <div>
                <ul className='plan-selection-container__description'>
                  {plan.description.map((d, k) => {
                    return <li key={k}>{d}</li>;
                  })}
                </ul>
              </div>
              <button onClick={() => onSelectPlan(index)}>
                Seleccionar Plan
              </button>
            </article>
          )
        );
      })}
    </section>
  );
};
