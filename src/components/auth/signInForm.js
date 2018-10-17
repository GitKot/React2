import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class SignInForm extends Component {
    render(){
        const {handleSubmit} = this.props
        return(
            <div>
                <h1>sign In</h1>
                <form onSubmit = {handleSubmit}>
                   
                        <Field name='email' component ="input"/>
                   
                        <Field name='password' component ="input" type="password"/>
                 
                    <div>
                        <input type = "submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'auth'
})(SignInForm)