import React from 'react'

import PageHeader from '../../components/PageHeader'
import TransactionForm from '../../components/TransactionForm'

export default function NewTransaction() {
  return (
    <div>
      <PageHeader title="Nova transação" />
      <TransactionForm buttonLabel="Cadastrar" />
    </div>
  )
}
