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
