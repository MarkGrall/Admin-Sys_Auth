import React from 'react';
//import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import AuthenticatedApp from '../../Authenticated/App-Authenticated';
import UnauthenticatedApp from '../../UnAuthenticated/App-Unauthenticated';

const Navig = withAuth(class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    const authNav = this.state.authenticated ?
			<div>
				<AuthenticatedApp />
			</div>
		:
			<div>
				<UnauthenticatedApp />		
			 </div>
		;
    return (
      <nav>
          {authNav}	
      </nav>
    )
  }
});

export default Navig;
