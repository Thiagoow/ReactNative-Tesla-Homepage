import React from 'react'
import { Container, Logo, Menu } from './headStyles'

const Header = () => {
  return (
    <Container>
      <Logo
        source={require('../../assets/img/logo.png')}
        resizeMode="contain"
      />
      <Menu
        source={require('../../assets/img/menu.png')}
        resizeMode="contain"
      />
    </Container>
  )
}

export default Header
