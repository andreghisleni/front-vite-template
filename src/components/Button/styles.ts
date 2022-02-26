import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 56px;
  border-radius: 10px;
  border: 0;
  line-height: 21px;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  max-width: 500px;

  font-weight: 500;

  margin-top: 24px;

  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
  }
`;
