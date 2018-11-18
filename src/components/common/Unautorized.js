import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class UnAuthorizer extends Component {
    render(){
        return (
            <div>
                <h1> UnAuthorizer, please<Link to='/auth/signin'>Sign In</Link></h1>
            </div>
            )
    }
}

export default UnAuthorizer