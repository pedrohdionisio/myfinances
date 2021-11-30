import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchInputContainer = styled.div`
  input {
    width: 100%;
    height: 50px;

    padding: 0 16px;
    margin-bottom: 40px;

    background: #fff;

    border: none;
    border-radius: 25px;

    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);

    &::placeholder {
      font-size: 16px;
      color: #bcbcbc;
    }
  }
`

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  width: 100%;

  padding-bottom: 24px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
`

export const ResumeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};

    margin-bottom: 8px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${({ type }) => (type === 'expense' ? '#F97171' : '#6FEB7B')};
  }
`

export const ListHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 24px;

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
      margin-right: 8px;
    }
  }
`

export const NewTransactionButton = styled.button`
  width: 180px;

  text-decoration: none;
  font-weight: 700;
  font-size: 16px;

  background: transparent;
  color: ${({ theme }) => theme.colors.primary.main};

  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  padding: 12px 14px;

  transition: all 0.5s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
  }
`

export const Card = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 120px;

  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  border-radius: 5px;

  margin-top: 24px;
  padding: 16px;

  .info {
    .info-header {
      display: flex;
      align-items: flex-start;
      width: 100%;

      margin-bottom: 8px;

      .name {
        word-break: break-all;
        text-transform: capitalize;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.gray[900]};
        margin-right: 16px;
      }

      .category {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 12px;

        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.primary.lighter};

        padding: 3px 8px;

        border-radius: 5px;
      }
    }

    .date {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
      margin-bottom: 12px;
    }

    .price {
      display: block;

      font-weight: bold;
      font-size: 24px;
      color: ${({ type }) => (type === 'expense' ? '#F97171' : '#6FEB7B')};
    }
  }

  .actions {
    position: absolute;
    right: 16px;
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
    }

    a {
      img {
        margin-top: 8px;
        margin-right: 8px;
      }
    }
  }
`

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 24px 0;
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`

export const EmptySearchContainer = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 24px;

  img {
    margin-right: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-all;

    strong {
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`
