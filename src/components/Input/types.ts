type HideBorderRadius = 'tl' | 'tr' | 'bl' | 'br';
type HideBorder = 'left' | 'top' | 'bottom' | 'right';

export interface InputProps {
  label: string;
  name: string;
  hideBorderRadius?: HideBorderRadius | HideBorderRadius[];
  hideBorder?: HideBorder | HideBorder[];
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
  required?: boolean;
  type?: 'text' | 'number';
  maxLength?: number;
}
