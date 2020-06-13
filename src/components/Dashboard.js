import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    const { answered, unanswered } = this.props

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
              {question.optionOneText}
              {question.optionTwoText}
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
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)