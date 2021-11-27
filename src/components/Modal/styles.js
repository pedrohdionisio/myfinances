import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, .6);
  backdrop-filter: blur(5px);

  overflow-y: hidden;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 450px;
  height: 200px;
  padding: 24px;

  background: #FFF;

  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
    font-size: 22px;
  }

  p {
    margin-top: 8px;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 32px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 94px;
    height: 40px;
    padding: 8px;

    background: ${({ theme }) => theme.colors.danger.main};
  }

  .cancel-button {

    color: ${({ theme }) => theme.colors.gray[200]};
    background: transparent;
    font-size: 16px;

    margin-right: 8px;
    border: none;
  }
`
