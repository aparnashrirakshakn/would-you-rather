import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
      <div className='poll-container'>
        {JSON.stringify(this.props)}
      </div>
    )
  }
}

function mapStateToProps ({ authenticatedUser, questions, users}, { match }) {
  const { id } = match.params
  const question = questions[id]

  if (!question) {
    return {
      question: null
    }
  }

  const vote = ['optionOneVotes', 'optionTwoVotes'].reduce((vote, key) => {
    if (vote !== null) {
      return vote[0]
    }

    return question[key].includes(authenticatedUser)
      ? key
      : vote
  }, null)

  return {
    question,
    vote,
    authenticatedUser,
    authorAvatar: users[question.author].avatarURL
  }
}

export default connect(mapStateToProps)(Question)