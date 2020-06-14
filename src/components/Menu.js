import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return(
        <nav className='nav'>
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
        </nav>
    )
}