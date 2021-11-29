import ReactDOM from 'react-dom'

import { Overlay, Container, Footer } from './styles'
import Button from '../Button'
import { useTransaction } from '../../contexts/TransactionContext'

export default function Modal() {
  const { state, handleRemoveTransaction, handleCloseModal } = useTransaction()

  return ReactDOM.createPortal(
    <Overlay active={state.modal.active}>
      <Container danger={state.modal.danger}>
        <h1>{state.modal.title}</h1>
        <p>{state.modal.message}</p>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCloseModal}
          >
            Cancelar
          </button>
          <Button
            type="button"
            danger={state.modal.danger}
            onClick={() => handleRemoveTransaction(state.modal.deletedItemId)}
          >
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  )
}
