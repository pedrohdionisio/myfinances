import styled from 'styled-components'

export const Wrapper = styled.div``

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
