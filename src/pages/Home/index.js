import React from 'react'
import { Link } from 'react-router-dom'

import {
  Wrapper, SearchInputContainer, ResumeContainer, ResumeItem, ListHeader,
} from './styles'

import arrow from '../../assets/images/arrow.svg'

export default function Home() {
  return (
    <Wrapper>
      <SearchInputContainer>
        <input
          type="text"
          placeholder="Pesquisar transações..."
        />
      </SearchInputContainer>

      <ResumeContainer>
        <ResumeItem type="minus">
          <h2>Despesas</h2>
          <span>R$ 2.560,85</span>
        </ResumeItem>

        <ResumeItem>
          <h2>Receitas</h2>
          <span>R$ 1.698,85</span>
        </ResumeItem>

        <ResumeItem type="minus">
          <h2>Balanço</h2>
          <span>R$ -862,00</span>
        </ResumeItem>
      </ResumeContainer>

      <ListHeader>
        <div>
          <span>Nome</span>
          <img src={arrow} alt="Filter" />
        </div>

        <Link to="/new">Nova transação</Link>
      </ListHeader>
    </Wrapper>
  )
}
