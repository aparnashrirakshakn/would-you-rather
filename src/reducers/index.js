import { combineReducers } from 'redux'
import authenticatedUser from './authenticatedUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authenticatedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})