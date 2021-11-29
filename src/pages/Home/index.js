import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Wrapper,
  SearchInputContainer,
  ResumeContainer,
  ResumeItem,
  ListHeader,
  Card,
  NewTransactionButton,
  EmptyListContainer,
} from './styles'

import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'
import empty from '../../assets/images/empty.svg'

import { useTransaction } from '../../contexts/TransactionContext'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const { state } = useTransaction()

  const { transactions } = state

  const filteredTransactions = useMemo(() => transactions.filter((transaction) => (
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [transactions, searchTerm])

  return (
    <Wrapper>
      {transactions.length === 0 && (
        <EmptyListContainer>
          <ResumeContainer justifyContent="center">
            <Link to="/new">
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Link>
          </ResumeContainer>

          <img src={empty} alt="Lista vazia" />
          <p>
            Você ainda não tem nenhuma transação cadastrada.
            Clique no botão <strong>”Nova Transação”</strong> acima para cadastrar a sua primeira!
          </p>
        </EmptyListContainer>
      )}

      {transactions.length > 0 && (
        <>
          <SearchInputContainer>
            <input
              type="text"
              placeholder="Pesquisar transações..."
              value={searchTerm}
              onChange={({ target }) => setSearchTerm(target.value)}
            />
          </SearchInputContainer>

          <ResumeContainer justifyContent="space-between">
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

            <Link to="/new">
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Link>
          </ListHeader>

          {filteredTransactions.map((transaction) => (
            <Card key={transaction.id} type={transaction.type}>
              <div className="info">
                <div className="info-header">
                  <h3 className="name">{transaction.name}</h3>
                  <span className="category">{transaction.category}</span>
                </div>

                <span className="date">Realizada em: {transaction.date}</span>
                <span className="price">R${transaction.price}</span>
              </div>

              <div className="actions">
                <Link to="/edit/01">
                  <img src={edit} alt="Editar item" />
                </Link>
                <img src={trash} alt="Excluir item" />
              </div>
            </Card>
          ))}
        </>
      )}
    </Wrapper>
  )
}
