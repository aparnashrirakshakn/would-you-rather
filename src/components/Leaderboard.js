import React  from 'react'
import { connect } from 'react-redux'

function Leaderboard({ users }) {
    return (
        <ul>
            {users.map((user, idx) => (
                <li key={user.id}>
                    <div className={"leaderboard-card card col-sm-12 col-md-8 pl-0 pr-0 " + getMedalColor(idx)}>
                        <div className="card-body col-12 pt-2 pb-2">
                            <div className="avatar-container col-sm-12 col-md-3">
                                <img src={process.env.PUBLIC_URL + user.avatarURL} />
                            </div>
                            <div className="user-information-container col-sm-12 col-md-6">
                                <h4>{user.name}</h4>
                                <p>{user.questions} Questions</p>
                                <p>{user.answers} Answers</p>
                            </div>
                            <div className="score-container col-sm-12 col-md-3">
                                <div className="card">
                                    <div className="card-header">
                                        Score
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-pill badge-success">{user.questions+user.answers}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

function getMedalColor(idx) {
    if(idx === 0) {
        return 'gold'
    }
    else if(idx === 1) {
        return 'silver'
    }
    else if(idx === 2) {
        return 'bronze'
    }
    else {
        return ''
    }
}

function mapStateToProps ({ users }) {
    return {
        users: Object.keys(users)
            .map((id) => {
                const { name, avatarURL, questions, answers} = users[id]

                return {
                    id,
                    name,
                    avatarURL,
                    questions: questions.length,
                    answers: answers.length
                }
            }).sort ((a,b) => (b.questions + b.answers) - (a.questions + a.answers))
    }
}

export default connect(mapStateToProps)(Leaderboard)