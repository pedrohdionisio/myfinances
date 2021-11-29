import PropTypes from 'prop-types'

import { createContext, useContext, useReducer } from 'react'
import transactionReducer from '../reducers/transactionReducer'

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const initialState = {
    transactions: [
      // {
      //   id: 1,
      //   name: 'Netflix',
      //   type: 'expense',
      //   category: 'Lazer',
      //   date: '28/11/2021',
      //   price: '45,00',
      // },
      // {
      //   id: 2,
      //   name: 'Salário',
      //   type: 'revenue',
      //   category: 'Trabalho',
      //   date: '28/11/2021',
      //   price: '1.300,00',
      // },
    ],
  }

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(transactionReducer, initialState)

  return (
    <TransactionContext.Provider value={{ state }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionContext)

TransactionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
