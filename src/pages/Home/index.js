import React from 'react'

import { Wrapper, SearchInputContainer } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <SearchInputContainer>
        <input
          type="text"
          placeholder="Pesquisar transações..."
        />
      </SearchInputContainer>
    </Wrapper>
  )
}
