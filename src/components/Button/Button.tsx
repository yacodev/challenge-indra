import classNames from 'classnames';
import { ButtonsProps } from './types';
import './button.scss';

export const Button = ({
  title,
  onClick,
  color = 'primary',
  isLoading = false,
}: ButtonsProps) => {
  return (
    <button
      type='submit'
      className={classNames(
        'button',
        color === 'secondary' ? 'button--secondary' : '',
        classNames
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Cargando...' : title}
    </button>
  );
};
