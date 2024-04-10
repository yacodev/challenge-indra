import { PersonCardProps } from './types';
import './personCard.scss';

export const PersonCard = ({
  personTypeCards,
  selectTypePerson,
}: PersonCardProps) => {
  return (
    <section className='card--container'>
      {personTypeCards.map((personTypeCard, key) => {
        return (
          <article
            className={personTypeCard.isActive ? 'card card--active' : 'card'}
            onClick={() => selectTypePerson(key)}
            onKeyDown={() => {}}
            key={key}
          >
            <input
              type='checkbox'
              className='card--checkbox'
              checked={personTypeCard.isActive}
              readOnly
              name='check'
            />
            <img src={personTypeCard.img} alt='icono de la card' />
            <span className='card--title'>{personTypeCard.person}</span>

            <p className='card--description'>{personTypeCard.description}</p>
          </article>
        );
      })}
    </section>
  );
};
