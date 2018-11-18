import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import ErrorField from '../common/errorFild'

class SignInForm extends Component {
    render(){
        const {handleSubmit} = this.props
        return(
            <div>
                <h1>sign In</h1>
                <form onSubmit = {handleSubmit}>
                   <div>
                        <Field name='email' component ={ErrorField}/>
                   </div>
                   <div>
                        <Field name='password' component ={ErrorField} type="password"/>
                    </div>
                    <div>
                        <input type = "submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'auth' //назвать можно как угодноn но form  обязательно
})(SignInForm)