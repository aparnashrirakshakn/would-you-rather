import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHENTICATED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthenticatedUser(AUTHENTICATED_ID))
        dispatch(hideLoading())
      })
  }
}