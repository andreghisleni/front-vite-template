import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 20, 0.7);
  padding: 20px;

  @media only screen and (max-width: 420px) {
    padding: 5px;
  }

  z-index: calc(200 * 10 * 100);

  overflow: visible;

  .close {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  .modal {
    position: relative;

    max-width: 736px;
    width: 100%;

    max-height: 90vh;

    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.colors.bg};
    border-radius: 6px;
    position: relative;
    padding: 10px;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.text};
      border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.bg};
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    > div.close-button {
      position: absolute;
      display: flex;

      justify-content: center;
      align-items: center;

      width: 40px;
      height: 40px;

      right: 10px;

      button {
        background: transparent;

        width: 40px;
        height: 40px;
        svg {
          width: 35px;
          height: 35px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 11px;
  }
`;
