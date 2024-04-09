import { PersonCardProps } from './types';
import './personCard.scss';

export const PersonCard = ({
  personTypeCards,
  selectTypePerson,
}: PersonCardProps) => {
  return (
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
  );
};
