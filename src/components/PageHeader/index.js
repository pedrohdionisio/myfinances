import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Wrapper } from './styles'

import arrow from '../../assets/images/arrow.svg'

export default function PageHeader({ title }) {
  return (
    <Wrapper>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <h2>{title}</h2>
    </Wrapper>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
