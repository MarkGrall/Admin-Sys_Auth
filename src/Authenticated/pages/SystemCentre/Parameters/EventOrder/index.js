import React from "react";
import { Card,CardBody, Container, Row, Col,Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import classnames from "classnames";
import BootstrapTable  from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';

import Current from "./Current/index";
import All from "./All/index";

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
              Current Event Order
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              All Event Order
            </NavLink>
          </NavItem>
	
		</Nav> 
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><Current/></TabPane>
		  <TabPane tabId="2"><All/></TabPane>
        </TabContent>
      </div>
    );
  }
}



//<TabsWithTextLabel  className="tab-primary"  />

const TabsContainer = () => (
	<div>
		<Container fluid className="p-0">
			<Card className="m-0 mb-2  p-2">
			<TabsWithTextLabel  className="tab-primary"  />
			
			</Card>
		</Container>
	</div>
);



export default TabsContainer;
