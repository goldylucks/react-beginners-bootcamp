// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/flip">Flip</NavLink></li>
        <li><NavLink to="/guessnumber">Guessnumber</NavLink></li>
        <li><NavLink to="/fizzbuzz">Fizzbuzz</NavLink></li>
        <li><NavLink to="/auth">Auth</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Nav
