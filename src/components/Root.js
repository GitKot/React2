import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import AdminPage from './routs/adminca'
import AuthPage from './routs/autentif'

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
