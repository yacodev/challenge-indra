import { useId } from 'react';
import classNames from 'classnames';
import { SelectProps } from './types';
import './select.scss';

export const Select = ({ hideBorderRadius }: SelectProps) => {
  const id = useId();

  const selectStyles = classNames(
    'select__container',
    hideBorderRadius && Array.isArray(hideBorderRadius)
      ? hideBorderRadius.map((v) => 'no-radius-' + v).join(' ')
      : hideBorderRadius
  );

  console.log({ selectStyles });
  return (
    <label htmlFor={id} className={selectStyles}>
      <select name='' id={id}>
        <option value='DNI'>DNI</option>
      </select>
    </label>
  );
};
