import React from 'react';
import { IconType } from 'react-icons';

import Icon from '../../../Icon';
import { Container } from './styles';

interface ButtonProps {
  func?: (id: string, data?: any) => void;
  icon?: (data: any) => IconType;
  label?: string;
  color?:
    | 'black'
    | 'gray'
    | 'red'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'purple'
    | string;
  id: string;
  data?: any;
  disabled?: (data: any) => boolean;
}

export const GenericButton: React.FC<ButtonProps> = ({
  func,
  icon,
  label,
  color,
  id,
  data,
  disabled,
}) => {
  return (
    <Container
      type="button"
      color={color}
      onClick={() => {
        func && func(id, data);
      }}
      disabled={disabled && disabled(data)}
    >
      {icon && <Icon icon={(icon as (_: any) => IconType)(data)} />}
      {label && <p>{label}</p>}
    </Container>
  );
};
