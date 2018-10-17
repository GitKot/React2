import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import AdminPage from './routs/adminPage'
import AuthPage from './routs/authPage'

class Root extends Component {
  render() {
    return (
      <div>
        <Route path = "/admin" component = {AdminPage}/>
        <Route path = "/auth" component ={AuthPage} /> 
      </div>
    );
  }
}

export default Root;
