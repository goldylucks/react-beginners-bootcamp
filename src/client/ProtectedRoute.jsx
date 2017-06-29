// @flow

import React from 'react'
import { Redirect } from 'react-router'

type Props = {
  component: any,
}

class ProtectedRoute extends React.Component {

  state = {
    isLoading: true,
    authorized: false,
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, authorized: true })
    }, 2000)
  }

  props: Props

  render() {
    if (this.state.isLoading) {
      return <h1>Loading ...</h1>
    }
    if (!this.state.authorized) {
      return <Redirect to="/" />
    }
    return this.props.component
  }
}

export default ProtectedRoute
