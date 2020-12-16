import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import classnames from "classnames";

import Category from "./Category/index";
import Group from "./Group/index";
import Product from "./Product/index";

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
              Product Category
            </NavLink>
          </NavItem>
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Product Group
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Product
            </NavLink>
          </NavItem>		  
		  
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><Category/></TabPane>
		  <TabPane tabId="2"><Group/></TabPane>
          <TabPane tabId="3"><Product/></TabPane>
        </TabContent>
      </div>
    );
  }
}

const ProductSearch = () => (
	<div>
		<TabsWithTextLabel  />
	</div>
);


export default ProductSearch;
