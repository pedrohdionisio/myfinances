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
  justify-content: space-between;
  align-items: center;

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
    color: ${({ type }) => (type === 'minus' ? '#F97171' : '#6FEB7B')};
  }
`
