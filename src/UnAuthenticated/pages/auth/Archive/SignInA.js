import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { withAuth } from '@okta/okta-react';

import {
  Button,
  Card,Col,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Row,
  Nav, NavItem, NavLink,TabContent,TabPane
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";
import SignUp from "./SignUp";

import OktaAuth from '@okta/okta-auth-js';
import config from '../../../app.config';



const LoginForm_2 = withAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    //alert("Test1")
	e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
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

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
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
    <span className="error-message">{this.state.error} :Incorrect username or password</span> : 
    null;

    return (
      <React.Fragment>
	  <form onSubmit={this.handleSubmit}>  
		
		<div className="text-center mt-2">
			<h2>Sign in to your account A</h2>
		</div>
		
		<Card>
		  <CardBody>
			<div className="m-sm-1">
			  <div className="text-center fa-2x">
				<FontAwesomeIcon icon={faInfinity} className="align-middle text-primary mr-2 " />{" "}
				<span className="align-middle ">Actuarial Tech</span>
			  </div>
			  
			  <Form>
				<FormGroup>
				  <Label>Email</Label>
				  <Input bsSize="lg" type="email" name="email" placeholder="Enter your email" 
						 id="username" value={this.state.username}  onChange={this.handleUsernameChange}
				  />
				</FormGroup>
				<FormGroup>
				  <Label>Password</Label>
				  <Input bsSize="lg" type="password" name="password" placeholder="Enter your password"
						 id="password" value={this.state.password} onChange={this.handlePasswordChange}
				  />
				  <small>
					<Link to="/auth/reset-password">Forgot password?</Link>
				  </small>
				  <Row >
				
				  </Row>
				</FormGroup>
				
				<div>
					<Row className="text-danger ml-2 mb-2 "  >
					 {errorMessage}	
					</Row>
				</div>
				
				<div>
					<Row >
						<Col md="5" >
						   <CustomInput type="checkbox" id="rememberMe" label="Remember me next time" defaultChecked />
						</Col>	
						<Col>		
							<Button color="primary" size="lg" id="submit" type="submit" value="Submit"  >
							  Sign in
							</Button> 
						</Col>
					</Row>
				</div>
			  </Form>
			</div>
		  </CardBody>
		</Card>
      </form>
	  </React.Fragment>
    );
  }
});

//<Link to="/Client/Client">


class TabsWithTextLabel extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { name, className } = this.props;

    return (
      <div className={"tab " + className}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Sign Up
            </NavLink>
          </NavItem>
         
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <LoginForm_2 baseUrl={config.url}/>
          </TabPane>
          
		  <TabPane tabId="2">
            <SignUp/>
          </TabPane>
		  
        </TabContent>
      </div>
    );
  }
}


export default TabsWithTextLabel;
