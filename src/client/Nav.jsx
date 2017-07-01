// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

type Props = {
  role: string,
  name: string,
}

const Nav = ({ role, name }: Props) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/flip">Flip</NavLink></li>
        <li><NavLink to="/guessnumber">Guessnumber</NavLink></li>
        <li><NavLink to="/fizzbuzz">Fizzbuzz</NavLink></li>
        <li><NavLink to="/auth">Auth</NavLink></li>
        <li><NavLink to="/stats">Stats</NavLink></li>
      </ul>
      <div className="navbar-text navbar-right">
        { role === 'guest' && 'Hello guest!' }
        { role === 'user' && `Welcome back ${name}` }
        { role === 'newUser' && `Welcome aboard ${name}` }
      </div>
    </div>
  </nav>
)

const mapStateToProps = state => ({
  role: state.auth.role,
  name: state.auth.name,
})

export default connect(mapStateToProps)(Nav)
