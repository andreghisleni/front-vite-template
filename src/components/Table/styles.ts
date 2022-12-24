import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ITh {
  width?: number;
}

interface ITr {
  haveOtherOpened?: boolean;
  isHovering?: boolean;
}

interface ICollapsableContainer {
  isOpened?: boolean;
  isHovering: boolean;
}

export const Container = styled.div`
  text-align: center;

  background: ${props => props.theme.colors.table.bg};

  border: 1px solid ${props => props.theme.colors.table.border};
  box-sizing: border-box;
  border-radius: 8px;

  padding: 32px;

  div {
    overflow-y: auto;

    @media only screen and (max-width: 850px) {
      overflow: hidden;

      word-wrap: break-word;
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.scrollbar.thumb};
      border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.scrollbar.track};
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 47px;
    h1 {
      color: ${props => props.theme.colors.table.text};
      font-size: 19px;
      line-height: 24px;
      letter-spacing: 0.4px;
    }
    button {
      background: transparent;
      border: none;
      width: 90px;
      height: 24px;

      display: flex;
      align-items: center;
      svg {
        width: 24px;
        height: 24px;
        color: ${props => props.theme.colors.table.header.svg};

        margin-right: 5px;
      }

      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: ${props => props.theme.colors.table.text};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  button {
    display: flex;

    align-items: center;

    padding: 8px 11px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #fff;

    svg {
      width: 24px;
      height: 24px;
    }
    &.edit {
      background: #3751ff;
    }
    &.delete {
      background: #f12b2c;
    }

    & + button {
      margin-left: 16px;
    }
    p {
      margin-left: 6px;

      font-size: 15px;
      line-height: 16px;
      letter-spacing: 0.1px;

      color: #ffffff;
    }

    &:hover {
      cursor: pointer;
    }
    &.edit:hover {
      background: ${shade(0.2, '#3751ff')};
    }
    &.delete:hover {
      background: ${shade(0.2, '#f12b2c')};
    }
  }
`;

export const DefaultButton = styled.button`
  display: flex;

  align-items: center;

  padding: 8px 11px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #fff;

  > svg {
    width: 24px;
    height: 24px;
  }

  & + button {
    margin-left: 16px;
  }
  p {
    margin-left: 6px;

    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.1px;

    color: #ffffff;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CollapsableContainer = styled.tr<ICollapsableContainer>`
  width: 100%;

  ${props =>
    !props.isOpened &&
    css`
      display: none;
    `}
  &:hover {
    background-color: ${props => props.theme.colors.table.bg};
  }
  ${props =>
    props.isHovering &&
    css`
      background-color: ${props.theme.colors.table.bg};
    `}

  border-bottom-width: 1.5px;
  border-style: solid;
  border-color: ${props => props.theme.colors.table.border};

  /* &:hover {
    background: red;
  } */

  td {
    padding: 40px 16px;

    > div {
      display: flex;
      flex-direction: row;

      justify-content: space-between;

      padding-bottom: 10px;

      flex-wrap: wrap;

      > div {
        display: flex;

        width: max-content;

        flex-direction: column;

        padding: 10px;

        span {
          font-weight: bold;
          text-align: left;
        }
        p {
          text-align: left;
        }
      }
    }
  }

  @media only screen and (max-width: 850px) {
    ${props =>
      !props.isOpened
        ? css`
            display: none;
          `
        : css`
            display: block;
          `}

    td {
      display: block;
      > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        > div {
          display: flex;

          width: 100%;

          flex-direction: row;
          justify-content: space-between;

          padding: 20px;

          border-bottom-width: 0.2px;
          border-style: solid;
          border-color: ${props => props.theme.colors.table.border};
        }
      }
    }
  }
`;

export const TableContainer = styled.table`
  font-size: 18px;
  border-collapse: collapse;

  width: 100%;
  min-width: 900px;

  @media only screen and (max-width: 850px) {
    min-width: auto;

    display: block;
    width: 100%;
  }
`;

export const Thead = styled.thead`
  vertical-align: initial;
  padding-bottom: 12px;
  border-style: solid;
  border-bottom-width: 1.5px;
  border-color: ${props => props.theme.colors.table.border};

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const Tbody = styled.tbody`
  @media only screen and (max-width: 850px) {
    display: block;
    width: 100%;
  }
`;

export const Tr = styled.tr<ITr>`
  vertical-align: initial;
  padding-bottom: 12px;

  ${props =>
    props.haveOtherOpened
      ? css`
          border-bottom-width: 0.5px;
        `
      : css`
          border-bottom-width: 1.5px;
        `}
  border-style: solid;
  border-color: ${props => props.theme.colors.table.border};

  /* & + div {
    border-style: solid;
    border-top-width: 1.5px;
    border-color: ${props => props.theme.colors.table.border};
  } */

  @media only screen and (max-width: 850px) {
    display: block;
    width: 100%;

    margin-bottom: 15px;
    height: auto;

    ${props =>
      props.haveOtherOpened &&
      css`
        margin-bottom: 0;
      `}
  }

  &:hover {
    background-color: ${props => props.theme.colors.table.bg};
  }
  ${props =>
    props.isHovering &&
    css`
      background-color: ${props.theme.colors.table.bg};
    `}
`;

export const Th = styled.th<ITh>`
  width: ${props => (props.width ? `${props.width}px` : 'auto')};

  @media only screen and (max-width: 1400px) {
    width: auto;
  }

  vertical-align: initial;
  padding-bottom: 12px;
  border-style: solid;
  border-bottom-width: 1.5px;
  border-color: ${props => props.theme.colors.table.border};

  text-align: left;
  padding: 8px;

  p {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    font-weight: 700;
    color: ${props => props.theme.colors.table.subText};

    & + p {
      font-weight: 400;
    }
  }
`;

export const Td = styled.td`
  text-align: left;
  padding: 8px;

  height: 70px;

  vertical-align: middle;

  p {
    color: ${props => props.theme.colors.table.text};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;

    & + p {
      font-weight: 400;
    }
  }
  /* img {
    width: 300px;
  } */

  @media only screen and (max-width: 850px) {
    display: block;
    width: 100%;

    p {
      text-align: right;

      padding-left: 50%;
      position: relative;
      &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
      }
    }
    div {
      justify-content: right;
    }
  }
`;
