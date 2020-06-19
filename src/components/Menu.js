import React from 'react'
import { NavLink } from 'react-router-dom'
import AUTHENTICATED_ID from '../actions/shared'

export default function Menu() {
    return(
        <div>
            <nav className='menu'>
                <div>
                    <ul>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' exact activeClassName='active'>
                                Leaderboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add' exact activeClassName='active'>
                                Add Question
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                <ul>
                    <li>
                        Hello, {AUTHENTICATED_ID}!
                    </li>
                    <li>
                        <button className="logout-button">Logout </button>
                    </li>
                </ul>
                </div>
            </nav>

            {/* <div className="card">
                <div className="card-header">
                    Tyler asks:
                </div>
                <div className="card-body">
                    <div className="avatar-container">
                        <img src={tyler} height="124px" width="124px" alt="author avatar" />
                    </div>
                    <div className="question-container">
                        <h5 className="card-title"><b>Would you rather</b></h5>
                        <p className="card-text">Learn React or ...</p>
                        <button className="poll-button">View Poll</button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    Sarah asks:
                </div>
                <div className="card-body">
                    <div className="avatar-container">
                        <img src={sarah} height="124px" width="124px" alt="author avatar" />
                    </div>
                    <div className="question-container">
                        <h5 className="card-title"><b>Would you rather</b></h5>
                        <p className="card-text">Learn React or ...</p>
                        <button className="poll-button">View Poll</button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    John asks:
                </div>
                <div className="card-body">
                    <div className="avatar-container">
                        <img src={john} height="124px" width="124px" alt="author avatar" />
                    </div>
                    <div className="question-container">
                        <h5 className="card-title"><b>Would you rather</b></h5>
                        <p className="card-text">Learn React or ...</p>
                        <button className="poll-button">View Poll</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}