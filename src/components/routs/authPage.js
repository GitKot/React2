import React, {Component} from 'react'
import SignInForm from '../auth/signInForm'
import SignUpForm from "../auth/signUpForm"
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp, moduleName} from "../../ducks/auth"
import Loader from '../common/loader'
 
class AuthPage extends Component {
   
    render(){
        const {loading} = this.props
        return(
            <div>
                <h1>Auth Page</h1>
                <NavLink to = '/auth/signin' activeStyle={{color:'red'}}>sign In</NavLink>
                <NavLink to = '/auth/signup' activeStyle={{color:'red'}}>sign Up</NavLink>
                
                <Route path = "/auth/signin" render ={ ()=> <SignInForm onSubmit = {this.handleSingnIn}/> } />
               
                <Route path = "/auth/signup" render ={()=> <SignUpForm onSubmit = {this.handleSingnUp}/>} />
                {loading && <Loader/>}
                
            </div>
        )
    }
    handleSingnIn= (values) => console.log('_______', values)
    handleSingnUp= ({email, password}) => this.props.signUp(email, password)
}

export default connect(state => ({
    loading:state[moduleName].loading
}), {signUp})(AuthPage)