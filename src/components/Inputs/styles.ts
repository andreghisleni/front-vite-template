import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  border: boolean;
  maxWidth?: string | number;

  multiline?: boolean;
}

interface PasswordForceProps {
  value: number;
}
export const Container = styled.div<ContainerProps>`
  /* position: relative; */
  width: 100%;

  max-width: ${props => props.maxWidth || 'none'};

  @media only screen and (max-width: 1100px) {
    max-width: none;
    width: 100%;
    > div {
      /* max-width: none;
      width: 100%; */
    }
  }

  label {
    color: ${props => props.theme.colors.input.text};
  }

  label + div {
    margin-top: 8px !important;
  }

  & + div {
    margin-top: 8px;
  }
  > div {
    background: ${props => props.theme.colors.input.bg};
    border-radius: 10px;
    line-height: 21px;
    /* padding: 16px; */

    width: 100%;

    /* min-width: 400px; */

    ${props =>
      props.multiline
        ? css`
            height: auto;
            padding: 10px 4px;
          `
        : css`
            height: 52px;
          `}

    display: flex;
    align-items: center;

    border: 0.2px solid ${props => props.theme.colors.input.border};

    color: ${props => props.theme.colors.input.text};
    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    ${props =>
      props.isFocused &&
      css`
        border-color: ${props.theme.colors.primary};
        color: ${props.theme.colors.primary};
      `}


    ${props =>
      props.isFilled &&
      css`
        color: ${props.theme.colors.primary};
      `}

    >svg {
      margin-left: 15px;
      margin-right: 16px;
    }
    > div.InputSelect {
      width: 100%;
      label {
        color: ${props => props.theme.colors.input.text};
      }
    }
    input,
    textarea {
      min-width: 100px;
      background: transparent;

      height: 20px;
      margin-left: 16px;
      margin-right: 16px;

      border: 0;

      font-size: 16px;

      color: ${props => props.theme.colors.input.text};

      flex: 1;

      &:focus {
        outline: 0;
      }
      &::placeholder {
        color: ${props => props.theme.colors.input.placeholder};
      }
      &:disabled {
        color: ${props => props.theme.colors.input.placeholder};
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${props =>
          shade(-0.8, props.theme.colors.input.text)};
        box-shadow: 0 0 0px 1000px ${props => props.theme.colors.input.bg} inset;

        transition: background-color 5000s ease-in-out 0s;
      }
    }
    &.disabled {
      background: ${props => shade(0.1, props.theme.colors.input.bg)};
    }

    textarea {
      height: auto;
      min-height: 100px;
    }
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  margin-right: 16px;

  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const Copy = styled.div`
  height: 52px;
  border-left: 0.4px solid
    ${props => shade(0.3, props.theme.colors.input.border)};

  width: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0;
    width: 20px;
    height: 20px;
  }

  :hover {
    cursor: pointer;
    color: ${props => shade(-0.2, props.theme.colors.input.placeholder)};
  }
`;

export const PasswordForce = styled.progress<PasswordForceProps>`
  position: absolute;
  bottom: 1.5px;

  width: 100%;
  height: 4px;
  &::-webkit-progress-bar {
    border-radius: 0px 0px 10px 10px;
    background: ${props => props.theme.colors.input.bg};
  }

  &::-webkit-progress-value {
    border-bottom-left-radius: 10px;
    ${props =>
      props.value !== undefined &&
      props.value === 100 &&
      css`
        border-bottom-right-radius: 10px;
      `}

    background: ${props =>
      props.value !== undefined &&
      (props.value <= 25
        ? props.theme.colors.input.progress.red
        : props.value <= 50
        ? props.theme.colors.input.progress.orange
        : props.value <= 75
        ? props.theme.colors.input.progress.yellow
        : props.value <= 100 && props.theme.colors.input.progress.green)};
  }
`;

/**
 * 0 - 25 red
 * 25 - 50 orange
 * 50 -75  yellow
 * 75 - 100 green
 */
