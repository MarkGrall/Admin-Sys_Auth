import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import classnames from "classnames";
import ClientPlanHeader from "./Header/Client - Plan";

import Overview from "./Overview/index";
import PlanDetails from "./PlanDetails/Details";
import ProductDetails from "./ProductDetails/index";

import Portfolio from "./Portfolio/index";
import TransactionTable from "./Transactions/Transactions"
import Documents from "./Documents/DocumentsTable"
import Premium from "./Premium/Premium"
import Switch from "./Switch/Switch";
import Messages from "./Messages/index";
import Notes from "./Notes/index";
import ErrorRectification from "./ErrorRectification/index";



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
              Plan Details
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Product Details
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Portfolio
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Transactions
            </NavLink>
          </NavItem>
		  
		  
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              Documents
            </NavLink>
          </NavItem>
		  
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "7" })}
              onClick={() => {
                this.toggle("7");
              }}
            >
              Payments
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "8" })}
              onClick={() => {
                this.toggle("8");
              }}
            >
              Switch Funds
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "9" })}
              onClick={() => {
                this.toggle("9");
              }}
            >
              Messages
            </NavLink>
          </NavItem>
		  
		  <NavItem >
            <NavLink
              className={classnames({ active: this.state.activeTab === "10" })}
              onClick={() => {
                this.toggle("10");
              }}
            >
              Notes
            </NavLink>
          </NavItem>

		  <NavItem >
            <NavLink
              className={classnames({ active: this.state.activeTab === "11" })}
              onClick={() => {
                this.toggle("11");
              }}
            >
              Error Rectification
            </NavLink>
          </NavItem>		  
		  
		 
		  
		  
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <h4 className="tab-title">{name}</h4>
            <Overview/>
          </TabPane>
		  <TabPane tabId="2"><PlanDetails/></TabPane>
          <TabPane tabId="3"><ProductDetails/></TabPane>
		  <TabPane tabId="4"><Portfolio/></TabPane>
		  <TabPane tabId="5"><TransactionTable/></TabPane>
		  <TabPane tabId="6"><Documents/></TabPane>
		  <TabPane tabId="7"><Premium/></TabPane>
		  <TabPane tabId="8"><Switch/></TabPane>
		  <TabPane tabId="9"><Messages/></TabPane>
		  <TabPane tabId="10"><Notes/></TabPane>
		  <TabPane tabId="11"><ErrorRectification/></TabPane>
        </TabContent>
      </div>
    );
  }
}

const Pension = () => (
	<div>
         <ClientPlanHeader className="p-0 m-0"/>	
		<TabsWithTextLabel  />
	</div>
);


export default Pension;
