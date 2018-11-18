import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {moduleName} from '../../ducks/auth'
import UnAuthorizer from './Unautorized'

class ProtectedRout extends Component{
    render(){
        const {component, ...rest} = this.props
        
        return <Route {...rest} render = {this.renderProtected}/>
    }
    renderProtected = (routeProps) => {
        const {component: ProtectedComponet, authorized} = this.props
        return authorized ? <ProtectedComponet {...routeProps}/> : <UnAuthorizer/> 
    } 
}

export default connect(state => ({
    autorized: !!state[moduleName].user
}),null,null, {pure:false})(ProtectedRout)