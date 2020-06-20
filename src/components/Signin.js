import React, { Component } from 'react'
import team from '../utils/team.png'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
import { connect } from "react-redux"
import { Redirect } from 'react-router'

class Signin extends Component {

  state = {
    selectedUser: ''
  }
  
  handleSignin = (e) => {
    e.preventDefault();
    const selectedUserId = this.state.selectedUser

    new Promise((res, rej) => {
      setTimeout(() => res(), 500);
    }).then(() => {
      this.props.dispatch(setAuthenticatedUser(selectedUserId))
    });
    
  }

  handleInputChange = (e) => {
    const { value } = e.target
    this.setState(() => ({
        selectedUser: value
    }))
  }

  render() {

      return(
      <div className='sign-in-container'>
        <div className="card col-12 col-md-6 pl-0 pr-0 sign-in-card">
          <div className="card-header col-12">
            <b>Would You Rather</b>
          </div>
          <div className="card-body">
            <img src={team} className='mb-3 pb-3'/>
            <form>
              <div className="form-group">
                <label htmlFor="sign-in-select"><b>Sign in as</b></label>
                <select className="form-control" onChange={this.handleInputChange} id="sign-in-select">
                  <option>Select User</option>
                  <option>sarahedo</option>
                  <option>tylermcginnis</option>
                  <option>johndoe</option>
                </select>
              </div>
                <button className="poll-button" onClick={this.handleSignin}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
      )
    }
}

// Use these users to populate the dropdown
const mapDispatchToProps = dispatch => ({
  setAuthenticatedUser,
  dispatch
});

export default connect(null, mapDispatchToProps)(Signin);