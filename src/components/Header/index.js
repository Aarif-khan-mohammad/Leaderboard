import React from 'react'
import { HeaderContainer , LogoContainer , Logo } from './styledComponents'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="https://assets.ccbp.in/frontend/hooks/leaderboard/nxt-code-logo-img.png"
         alt="logo" />
      </LogoContainer>
    </HeaderContainer>
  )
}

export default Header