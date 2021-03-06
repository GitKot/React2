import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorFild from "../common/errorFild"

class SignUpForm extends Component {
    render(){
        const {handleSubmit} = this.props
        return(
            <div>
                <h1>sign Up</h1>
                <form onSubmit = {handleSubmit}>
                    <div>
                        <Field name='email' component ={ErrorFild}/>
                    </div>
                    <div>
                        <Field name='password' component ={ErrorFild} type="password"/>
                    </div>
                    <div>
                        <input type = "submit" />
                    </div>
                </form>
            </div>
        )
    }
}

const validate = ({email, password}) => {
    const errors = {}
    if (!email) errors.email = 'email is required'
    else if(!emailValidator.validate(email)) errors.email = 'invalid email'
    if(!password) errors.password = 'password is required'
    else if(password.length < 8) errors.password = 'password id short'
    return errors
}

export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm)