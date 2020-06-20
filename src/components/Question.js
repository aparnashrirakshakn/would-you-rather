import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPercentage, getVotedIndicator } from '../utils/helpers'
import { handleAnswer, handleAddAnswer } from '../actions/answers'
import indicator from '../utils/indicator.png'

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
      <div className="user-question-container">
        <div className="card col-8 pl-0 pr-0">
            <div className="card-header">
              <span>{question.author} asks...</span>
            </div>
            <div className="card-body user-question-card col-12 pl-0 pr-0">
                <div className="avatar-container col-12 col-md-3">
                  <img src={authorAvatar} alt="Author's Avatar" />
                </div>
                <div className="question-container col-12 col-md-9">
                    <h4>Would you rather</h4>
                    <ul>
                      {['optionOneText', 'optionTwoText'].map((key) => {
                        const count = question[key.slice(0,-4) + 'Votes'].length
                        return(
                          <li key={key}
                          onClick = {() => {
                            if(vote === null && !this.answered) {
                              this.handleAnswer(key.slice(0,-4))
                            }
                          }} 
                            className={`option ${vote === key.slice(0,-4)+'Votes' ? 'chosen' : ''}`}>
                            {vote === null ?
                              question[key]
                            : <div className='result'>
                                {getVotedIndicator(vote, key.slice(0,-4)+'Votes') && 
                                    <div className='vote-indicator'>
                                      <img src={indicator} alt="Your Vote" className='mb-2'/>
                                      <span>Your vote</span>
                                    </div>
                                }
                                <span>{question[key]}</span>
                                <div className='results-display'>
                                <span className='percentage-span'>
                                  {getPercentage(count, totalVotes)}%
                                </span>
                                <span>{count} of {totalVotes} votes</span>
                                </div>
                              </div>}
                          </li>
                        )
                        })
                      }
                    </ul>
                </div>
            </div>
        </div>
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
      return vote
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