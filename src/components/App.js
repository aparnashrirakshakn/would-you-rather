import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <AddQuestion />}
      </div>
    )
  }
}

function mapStateToProps ({ authenticatedUser }) {
  return {
    loading: authenticatedUser === null
  }
}

export default connect(mapStateToProps)(App)