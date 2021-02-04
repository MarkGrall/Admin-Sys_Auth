import React from "react";
import { Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import classnames from "classnames";

import Client from "./Client/index";
import Plan from "./Plan/index"

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
    const {  className } = this.props;

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
              Client
            </NavLink>
          </NavItem>
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Plan
            </NavLink>
          </NavItem> 
		  
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><Client/></TabPane>
		  <TabPane tabId="2"><Plan/></TabPane>
        </TabContent>
      </div>
    );
  }
}

const ClientPlanSearch = () => (
	<div>
		<TabsWithTextLabel  />
	</div>
);


export default ClientPlanSearch;
