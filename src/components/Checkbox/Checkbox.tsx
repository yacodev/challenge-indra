import classNames from 'classnames';
import iconCheck from '../../assets/check-white.svg';
import { CheckboxProps } from './types';
import './checkbox.scss';

export const Checkbox = ({ checked, setChecked, label }: CheckboxProps) => {
  return (
    <div className='checkbox' onClick={() => setChecked((v) => !v)}>
      <div
        className={classNames(
          'checkbox__box',
          checked ? 'checkbox__box--checked' : ''
        )}
      >
        {checked && <img src={iconCheck} alt='checked icon' />}
      </div>
      <p className='checkbox__label'>{label}</p>
    </div>
  );
};
