/* eslint-disable no-case-declarations */
const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, transactions: [...state.transactions, action.payload] }

    case 'REMOVE_ITEM':
      return {
        ...state,
        modal: {
          active: false,
          danger: false,
          selectedItemId: null,
          title: '',
          message: '',
        },
        transactions: state.transactions.filter((item) => item.id !== action.payload),
      }

    case 'EDIT_ITEM':
      const updateTransaction = action.payload

      const updateTransactions = state.transactions.map((transaction) => {
        if (transaction.id === updateTransaction.id) {
          return updateTransaction
        }
        return transaction;
      })
      return {
        ...state,
        transactions: updateTransactions,
      }

    case 'GET_TOTALS':
      const expense = state.transactions.filter((item) => item.type === 'expense')
      const revenue = state.transactions.filter((item) => item.type === 'revenue')
      return {
        ...state,
        totalExpense: expense.reduce((a, b) => a + parseFloat(b.value), 0),
        totalRevenue: revenue.reduce((a, b) => a + parseFloat(b.value), 0),
      }

    case 'GET_BALANCE':

      return {
        ...state,
        balance: (state.totalRevenue - state.totalExpense),
      }

    case 'ACTIVE_MODAL':
      return { ...state, modal: action.payload }

    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          active: false,
          danger: false,
          selectedItemId: null,
          title: '',
          message: '',
        },
      }

    default:
      return state
  }
}

export default transactionReducer
