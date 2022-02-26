import styled from 'styled-components';

export const Container = styled.div`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }
  }
  button:hover {
    cursor: pointer;
  }
  button.cancel {
    background: #39b100;
  }
  button.delete {
    background: #f12b2c;
  }
`;
