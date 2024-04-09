import { CheckboxProps } from './types';
import './checkbox.scss';

export const Checkbox = ({ label, id }: CheckboxProps) => {
  return (
    <div className='policy__section'>
      <input
        className='policy__section--checkbox'
        type='checkbox'
        name='check1'
        id={id}
        required
      />

      <label className='policy__section--label' htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
