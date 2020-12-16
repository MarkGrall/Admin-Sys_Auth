import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

//import classnames from "classnames";
import ProductHeader from "./ProductHeader";

import ProductDetails from "./ProductDetails/index";
import PlanOverview from "./Overview/index";
import Documents from "./Documents/index"
import Charges from  "./Charges/index";
import Premium from  "./Charges/index";



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
              Product Details 
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Plan Overview
            </NavLink>
          </NavItem>

		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Documents
            </NavLink>
          </NavItem>

		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Charges
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Premiums
            </NavLink>
          </NavItem>
		  
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><ProductDetails /></TabPane>
		  <TabPane tabId="2"><PlanOverview/></TabPane>
		  <TabPane tabId="3"><Documents/></TabPane>
		  <TabPane tabId="4"><Charges/></TabPane>
		  <TabPane tabId="5"><Premium/></TabPane>
        </TabContent>
      </div>
    );
  }
}

const Product = () => (
	<div>
         <ProductHeader className="p-0 m-0"/>	
		<TabsWithTextLabel  />
	</div>
);


export default Product;
