export interface ButtonsProps {
  title: string;
  onClick?: () => void;
  className?: string;
  color?: 'primary' | 'secondary';
  isLoading?: boolean;
}
