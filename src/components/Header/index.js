import React from 'react'

import { Wrapper } from './styles'

import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="My Finances" />
    </Wrapper>
  )
}
