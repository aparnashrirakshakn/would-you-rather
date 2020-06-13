import React, { Component } from 'react'

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
        console.log('Add Question: ',this.state)
    }

    render() {
        const { optionOneText, optionTwoText } = this.state

        return(
            <form className='add-form' onSubmit = {this.handleSubmit}>
                <h3 style={{marginBottom: 5}}>Would you rather</h3>
                <input
                    id='first-option'
                    value={optionOneText}
                    onChange={this.handleInputChange}
                    name='optionOneText'
                    className='input'
                    type='text'
                />
                <span>or</span>
                <input
                    id='second-option'
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

export default AddQuestion