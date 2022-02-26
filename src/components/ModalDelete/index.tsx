import React, { useCallback } from 'react';

import Modal from '../Modal';
import { Container } from './styles';

interface IModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: () => void;
  id?: string;
  handleDelete: (id: string) => void;
}

export const ModalDelete: React.FC<IModalProps> = ({
  title,
  id,
  isOpen,
  setIsOpen,
  handleDelete: handeleDel,
}) => {
  const handleCancel = useCallback(() => {
    setIsOpen();
  }, [setIsOpen]);

  const handleDelete = useCallback(() => {
    id && handeleDel(id);
  }, [handeleDel, id]);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h1>{title}</h1>
        <div>
          <button type="button" className="cancel" onClick={handleCancel}>
            <p className="text">Cancelar</p>
          </button>
          <button type="button" className="delete" onClick={handleDelete}>
            <p className="text">Excluir</p>
          </button>
        </div>
      </Container>
    </Modal>
  );
};
