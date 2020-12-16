import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import config from './app.config';

import Navigation from './components/shared/Navigation';

//import SignIn from "./UnAuthenticated/pages/auth/SignInB";
import SignIn_Authentication from "./UnAuthenticated/pages/auth/SignIn_Authentication";
//<Route path="/auth/sign-in" render={() => <SignIn_Authentication baseUrl={config.url} />} />

//The Navigation file determines if it goes to the authenicated or un authenticated app

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>

		  <Route path="/implicit/callback" component={ImplicitCallback} />
        </main>
      </div>
    );
  }
}


