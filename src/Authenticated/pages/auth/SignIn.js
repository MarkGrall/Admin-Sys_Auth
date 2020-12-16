import React from "react";
import { Link } from "react-router-dom";

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

import avatar from "../../assets/img/avatars/avatarMG.jpg";

const SignIn = () => (
  <React.Fragment>
    <div className="text-center mt-2">
      <h2>Sign in to your account</h2>
    </div>

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
		  
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Enter your password"
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
			 <Link to="/Client/Plans/PersonalPension">
                <Button color="primary" size="lg">
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
);


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
           
            <SignIn/>
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
