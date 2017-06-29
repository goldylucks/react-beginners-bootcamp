// @flow

import React from 'react'

import { NavLink } from 'react-router-dom'

const Nav = () =>
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><NavLink to="/" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/flip" className="nav-item">Flip</NavLink></li>
      </ul>
    </div>
  </nav>

export default Nav
