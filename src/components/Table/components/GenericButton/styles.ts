import { shade } from 'polished';
import styled from 'styled-components';

import { DefaultButton } from '../../styles';

interface ContainerProps {
  color?: string;
}

export const Container = styled(DefaultButton)<ContainerProps>`
  background: ${props => props.color || '#6c757d'};

  &:hover {
    background: ${props => shade(0.2, props.color || '#6c757d')};
  }
  &:disabled {
    background: ${props => shade(0.3, props.color || '#6c757d')};
  }
`;
