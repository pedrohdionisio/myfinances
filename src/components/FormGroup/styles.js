import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    margin-top: 8px;
    display: block;

    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
  }

`
