import userIcon from '../../assets/user-icon-24x24.svg';
import { SummaryCardProps } from './types';
import './summaryCard.scss';

export const SummaryCard = ({ user, plan }: SummaryCardProps) => {
  return (
    <article className='card__summary'>
      <span className='card__summary--header'>PRECIOS CALCULADOS PARA:</span>
      <div className='card__summary--user-info'>
        <img src={userIcon} alt='' />
        <span>{user?.name + ' ' + user?.lastName}</span>
      </div>
      <hr />
      <span className='card__summary--title'>Responsable de pago</span>
      <span className='card__summary--text'>
        {user?.typeDocument + ': ' + user?.documentNumber}
      </span>
      <span className='card__summary--text'>
        {'Celular: ' + user?.phoneNumber}
      </span>
      <br />
      <span className='card__summary--title'>Plan elegido</span>
      <span className='card__summary--text'>{plan?.name}</span>
      <span className='card__summary--text'>
        Costo del Plan ${plan?.price} al mes
      </span>
    </article>
  );
};
