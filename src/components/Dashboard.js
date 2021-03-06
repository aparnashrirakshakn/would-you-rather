import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
  state = {
    showAnswered: false
  }
  showUnaswered = () => {
    this.setState(() => ({
      showAnswered: false
    }))
  }
  showAnswered = () => {
    this.setState(() => ({
      showAnswered: true
    }))
  }
  render() {
    const { showAnswered } = this.state
    const { answered, unanswered, users } = this.props

    const list = showAnswered === true
      ? answered
      : unanswered

    return (
      <div>
        <div className='dashboard-toggle'>
          <button
            style={{textDecoration: showAnswered === false ? 'underline' : null}}
            onClick={this.showUnaswered}>
              Unanswered
          </button>
          <span> | </span>
          <button
            style={{textDecoration: showAnswered === true ? 'underline' : null}}
            onClick={this.showAnswered}>
              Answered
          </button>
        </div>
        <ul className='dashboard-list'>
          {list.map((question) => (
            <li key={question.id}>
              <div className="card dashboard-card">
                <div className="card-header">
                    {question.author} asks:
                </div>
                <div className="card-body">
                    <div className="avatar-container">
                        <img src={users[question.author].avatarURL} />
                    </div>
                    <div className="information-container">
                        <h5 className="card-title"><b>Would you rather</b></h5>
                        <p className="card-text">{question.optionOneText} or ...</p>
                        <Link to={`questions/${question.id}`}>
                          <button className="poll-button">View Poll</button>
                        </Link>
                    </div>
                </div>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authenticatedUser, questions, users }) {

  const answers = users[authenticatedUser].answers

  const answered = answers.map((id) => questions[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(questions)
    .filter((id) => !answers.includes(id))
    .map((id) => questions[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  return {
    answered,
    unanswered,
    users
  }
}

export default connect(mapStateToProps)(Dashboard)