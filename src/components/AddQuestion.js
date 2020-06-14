import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleInputChange = (e) => {
        const { value, name } = e.target

        this.setState(() => ({
            [name]: value
        }))
    }

    isDisabled = () => {
        const { optionOneText, optionTwoText } = this.state

        return optionOneText === '' || optionTwoText === ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push('/')
        this.props.dispatch(handleAddQuestion(this.state))
    }

    render() {
        const { optionOneText, optionTwoText } = this.state

        return(
            <form className='add-form' onSubmit = {this.handleSubmit}>
                <h3 style={{marginBottom: 5}}>Would you rather</h3>
                <input
                    id='option-one'
                    value={optionOneText}
                    onChange={this.handleInputChange}
                    name='optionOneText'
                    className='input'
                    type='text'
                />
                <span>or</span>
                <input
                    id='option-two'
                    value={optionTwoText}
                    onChange={this.handleInputChange}
                    name='optionTwoText'
                    className='input'
                    type='text'
                />
                <button className='btn' type='Submit' disabled={this.isDisabled()}>
                    Submit
                </button>
            </form>
        )
    }
}

export default connect()(AddQuestion)