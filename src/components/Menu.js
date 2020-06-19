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
                            <NavLink to='/home' exact activeClassName='active'>
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
        </div>
    )
}