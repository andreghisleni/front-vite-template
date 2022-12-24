import React from 'react';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';

// import { Container } from './styles';

interface ButtonProps {
  func?: (id: string, data?: any) => void;
  type: 'edit' | 'delete';
  id: string;
  data?: any;
}

export const Button: React.FC<ButtonProps> = ({ func, type, id, data }) => {
  return (
    <button
      type="button"
      className={`${type}`}
      onClick={() => {
        func && func(id, data);
      }}
    >
      {type === 'edit' ? (
        <MdModeEdit />
      ) : type === 'delete' ? (
        <MdDeleteSweep />
      ) : null}
    </button>
  );
};
