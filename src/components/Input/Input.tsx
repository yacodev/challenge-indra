import classNames from 'classnames';
import { useId } from 'react';
import { InputProps } from './types';
import './input.scss';

export const Input = ({
  label,
  name,
  hideBorderRadius,
  hideBorder,
  value,
  onChange,
  hasError = false,
  required,
  type = 'text',
  maxLength = undefined,
}: InputProps) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={classNames(
        'input',
        hideBorderRadius && Array.isArray(hideBorderRadius)
          ? hideBorderRadius.map((v) => 'no-radius-' + v).join(' ')
          : hideBorderRadius,
        hideBorder && 'no-border-' + hideBorder,
        hasError && 'error'
      )}
    >
      {label}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
      />
    </label>
  );
};
