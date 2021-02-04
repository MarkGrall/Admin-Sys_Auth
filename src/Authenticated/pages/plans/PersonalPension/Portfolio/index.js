import React from "react";
import { Card, Container, Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import classnames from "classnames";

import Balance from "./Balance";

import UL from "./Shares";
import ETF from "./Shares";
import Shares from "./Shares";
import Bonds from "./Shares";
import Options from "./Shares";


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
              Unit Linked Funds
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              ETF's
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Shares
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Bonds
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Options
            </NavLink>
          </NavItem>
        </Nav>
		
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><UL/></TabPane>
		  <TabPane tabId="2"><ETF/></TabPane>
          <TabPane tabId="3"><Shares/></TabPane>
		  <TabPane tabId="4"><Bonds/></TabPane>
		  <TabPane tabId="5"><Options/></TabPane>

        </TabContent>
      </div>
    );
  }
}

const Portfolio = () => (
	<div>
         <Balance className="p-0 m-0"/>	
		<Container fluid className="p-0">
			<Card className="m-0 mb-2  p-2">
			<TabsWithTextLabel  className="tab-primary"  />
			
			
			</Card>
		</Container>
	</div>
);



export default Portfolio;
