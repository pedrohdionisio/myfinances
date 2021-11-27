import styled from 'styled-components'

export default styled.select`
  width: 100%;
  height: 52px;

  font-size: 16px;

  padding: 8px 16px;

  border: 2px solid transparent;
  border-radius: 4px;
  outline: none;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  transition: border-color 0.5s ease;
  appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`
