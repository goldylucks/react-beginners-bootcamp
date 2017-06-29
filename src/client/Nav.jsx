// @flow

import React from 'react'

import { NavLink } from 'react-router-dom'

type Props = {
  greetingMessage: string,
}

const Nav = ({ greetingMessage }: Props) =>
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><NavLink to="/" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/flip" className="nav-item">Flip</NavLink></li>
        <li><NavLink to="/guessnumber" className="nav-item">Guessnumber</NavLink></li>
        <li><NavLink to="/fizzbuzz" className="nav-item">Fizzbuzz</NavLink></li>
        <li><NavLink to="/auth" className="nav-item">Auth</NavLink></li>
      </ul>
      <div className="pull-right">
        <div className="navbar-text">{greetingMessage}</div>
      </div>
    </div>
  </nav>

export default Nav
