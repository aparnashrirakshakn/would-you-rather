import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
import { connect } from "react-redux"

class Menu extends Component {

    handleSignOut = (e) => {
        e.preventDefault();
        const selectedUserId = ''

        new Promise((res, rej) => {
            setTimeout(() => res(), 500);
        }).then(() => {
            this.props.dispatch(setAuthenticatedUser(selectedUserId))
        });
    }

    render() {
        return (
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
                    Hello, {this.props.authenticatedUser}!
                </li>
                <li>
                    <button className="logout-button" onClick={this.handleSignOut}>Sign out </button>
                </li>
            </ul>
            </div>
        </nav>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setAuthenticatedUser,
    dispatch
});

export default connect(null, mapDispatchToProps)(Menu);