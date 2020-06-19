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
            <form className='add-form col-sm-12 col-md-6' onSubmit = {this.handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        Create a New Question
                    </div>
                    <div className="card-body new-question-container">
                        <h5><b>Would you rather</b></h5>
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
                        <span><b>?</b></span>
                        <button className='add-button col-12' type='Submit' disabled={this.isDisabled()}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            
        )
    }
}

export default connect()(AddQuestion)