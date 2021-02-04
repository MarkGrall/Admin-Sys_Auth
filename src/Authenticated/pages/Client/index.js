import React from "react";
import {Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import classnames from "classnames";

import ClientCont from "./Client Header";

import Overview from "./Overview/index";
import Documents from "./Documents/DocumentsTable"
import Messages from "./Messages/index";
import Notes from "./Notes/index";


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
    const { className } = this.props;

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
              Overview
            </NavLink>
          </NavItem>
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Documents
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Messages
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Notes
            </NavLink>
          </NavItem>
		  
		  
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><Overview/></TabPane>
		  <TabPane tabId="2"><Documents/></TabPane>
          <TabPane tabId="3"><Messages/></TabPane>
		  <TabPane tabId="4"><Notes/></TabPane>
        </TabContent>
      </div>
    );
  }
}

//
const Pension = () => (
	<div>
        <ClientCont className="p-0 m-0"/>	
			<TabsWithTextLabel  />
	</div>
);


export default Pension;
