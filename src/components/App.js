import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import Question from './Question'
import Menu from './Menu'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar />
          <div className = 'container'>
            <Menu />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:id' component={Question} />
                  <Route path='/add' component={AddQuestion} />
                </div>}
          </div>
        </div>
      </BrowserRouter>

    )
  }
}

function mapStateToProps ({ authenticatedUser }) {
  return {
    loading: authenticatedUser === null
  }
}

export default connect(mapStateToProps)(App)