import React from 'react'
import { Link } from 'react-router-dom'

import {
  Wrapper,
  SearchInputContainer,
  ResumeContainer,
  ResumeItem,
  ListHeader,
  Card,
} from './styles'

import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

export default function Home() {
  return (
    <Wrapper>
      <SearchInputContainer>
        <input type="text" placeholder="Pesquisar transações..." />
      </SearchInputContainer>

      <ResumeContainer>
        <ResumeItem type="expense">
          <h2>Despesas</h2>
          <span>R$ 2.560,85</span>
        </ResumeItem>

        <ResumeItem>
          <h2>Receitas</h2>
          <span>R$ 1.698,85</span>
        </ResumeItem>

        <ResumeItem type="expense">
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

      <Card type="expense">
        <div className="info">
          <div className="info-header">
            <h3 className="name">Netflix</h3>
            <span className="category">Lazer</span>
          </div>

          <span className="date">Realizada em: 16/02/2021</span>
          <span className="price">R$45,00</span>
        </div>

        <div className="actions">
          <Link to="/edit">
            <img src={edit} alt="Editar item" />
          </Link>
          <img src={trash} alt="Excluir item" />
        </div>
      </Card>

      <Card type="revenue">
        <div className="info">
          <div className="info-header">
            <h3 className="name">Netflix</h3>
            <span className="category">Lazer</span>
          </div>

          <span className="date">Realizada em: 16/02/2021</span>
          <span className="price">R$45,00</span>
        </div>

        <div className="actions">
          <Link to="/edit">
            <img src={edit} alt="Editar item" />
          </Link>
          <img src={trash} alt="Excluir item" />
        </div>
      </Card>
    </Wrapper>
  )
}
