import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPercentage } from '../utils/helpers'
import { handleAnswer, handleAddAnswer } from '../actions/answers'

const getVoteKeys = () => ['optionOneVotes', 'optionTwoVotes']

class Question extends Component {

  handleAnswer = (answer) => {
    const {question, authenticatedUser} = this.props
    this.answered = true

    this.props.dispatch(handleAddAnswer({
      authenticatedUser,
      answer,
      id: question.id
    }))
  }

  render() {
    if(this.props.question === null) {
      return <p>This question does not exist</p>
    }

    const { question, vote, authorAvatar } = this.props

    const totalVotes = getVoteKeys().reduce((total, key) => total + question[key].length, 0)

    return (
      <div className='poll-container'>
        <h1>
          Would you rather
        </h1>
        <div className='poll-author'>
          By <img arc={authorAvatar} alt="Author's Avatar" />
        </div>
        <ul>
          {['optionOneText', 'optionTwoText'].map((key) => {
            const count = question[key.slice(0,-4) + 'Votes'].length
            console.log("VOTE: ",vote)
            return(
              <li key={key}
              onClick = {() => {
                if(vote === null && !this.answered) {
                  this.handleAnswer(key.slice(0,-4))
                }
              }} 
                className={`option ${vote === key.slice(0,-4) ? 'chosen' : ''}`}>
                {vote === null ?
                  question[key]
                : <div className='result'>
                    <span>{question[key]}</span>
                    {<span>{getPercentage(count, totalVotes)}%</span>}
                  </div>}
              </li>
            )
            })
          }
        </ul>
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

  const vote = getVoteKeys().reduce((vote, key) => {
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