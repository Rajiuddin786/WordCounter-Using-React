import React from 'react';
import Logo from "../assets/unnamed.webp"

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Logo" className="logo" />
        <span className="title">Word Counter</span>
    </header>
  )
}
