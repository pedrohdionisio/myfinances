import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    margin-bottom: 16px;

    img {
      transform: rotate(-90deg);
      margin-right: 8px;
    }

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`
