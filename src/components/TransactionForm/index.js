import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer, Wrapper } from './styles'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

export default function TransactionForm({ buttonLabel }) {
  return (
    <Wrapper method="post" action="result" onSubmit="" noValidate>
      <FormGroup>
        <Input
          type="text"
          placeholder="Nome*"
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Valor*"
        />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="">Tipo da transação*</option>
          <option value="expense">Despesa</option>
          <option value="revenue">Receita</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Categoria*"
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="date"
          placeholder="Data*"
        />
      </FormGroup>

      <ButtonContainer>
        <FormGroup>
          <Button type="submit">{buttonLabel}</Button>
        </FormGroup>
      </ButtonContainer>
    </Wrapper>
  )
}

TransactionForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
