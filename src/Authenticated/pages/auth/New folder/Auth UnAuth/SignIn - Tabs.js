import React, { Component } from 'react';

import {
  Button,Card,Col,CardBody,Form, FormGroup, 
  Label,Input,CustomInput,Row,Nav, NavItem, NavLink,TabContent,TabPane
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";
import SignUp from "./SignUp";
import SignIn from "./SignIn - Page";

import avatar from "../../assets/img/avatars/avatarMG.jpg";


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
