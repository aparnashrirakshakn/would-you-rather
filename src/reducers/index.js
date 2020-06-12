import authenticatedUser from './authenticatedUser'
import users from './users'
import questions from './questions'
import { combineReducers } from 'redux'

export default combineReducers({
    authenticatedUser,
    users,
    questions,
})