import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button,Card,Col,CardBody,Form, FormGroup, Label,Input,CustomInput,Row,Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";


export default withAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      Email: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.Email,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({error: err.message});
        console.log(err.statusCode + ' error', err)
      });
  }

  handleEmailChange(e) {
    this.setState({ Email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    const errorMessage = this.state.error ? 
    <span className="error-message">{this.state.error}</span> : 
    null;

    return (
			<div>
			<React.Fragment>
			<Card>
			  <CardBody>
				<div className="m-sm-1">
				  <div className="text-center fa-2x">

					<FontAwesomeIcon
					icon={faInfinity}
					className="align-middle text-primary mr-2 "
					/>{" "}
					<span className="align-middle ">Actuarial Tech</span>
				  </div>
				  
				  <Form onSubmit={this.handleSubmit}>
				    {errorMessage}
					<FormGroup>
					  <Label>Email</Label>
					  <Input
						bsSize="lg"
						id="Email"
						type="email"
						name="email"
						placeholder="Enter your email"
						value={this.state.Email}
						onChange={this.handleEmailChange} 
					  />
					  					  
					</FormGroup>
					<FormGroup>
					  <Label>Password</Label>
					  <Input
						bsSize="lg"
						id="password"
						type="password"
						name="password"
						placeholder="Enter your password"
						value={this.state.password}
						onChange={this.handlePasswordChange} />
					  />
					  <small>
						<Link to="/auth/reset-password">Forgot password?</Link>
					  </small>
					</FormGroup>
					
					<div>
					<Row >
					  <Col md="5" >
					  <CustomInput
						type="checkbox"
						id="rememberMe"
						label="Remember me next time"
						defaultChecked
					  />
					</Col>	
					<Col>		
						<Link to="/plans/Overview">
						
							<Button 
								color="primary" 
								size="lg"
								id="submit"
								type="submit"
								value="Submit"						
								onClick={this.handleSubmit}
							>
							  Sign in
							</Button>
						
						</Link>
				     </Col>

					</Row>
					</div>
					
				  </Form>
				</div>
			  </CardBody>
			</Card>
			</React.Fragment>
			</div>
		  );
  }
});

