import styled, { css } from 'styled-components'

export default styled.button`
  width: 100%;
  height: 52px;
  padding: 16px;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  font-weight: 700;

  color: #FFF;
  background: ${({ theme }) => theme.colors.primary.main};

  border: none;
  border-radius: 4px;
  outline: none;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background .5s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: #CCCCCC;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`
