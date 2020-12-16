import React from "react";
import { Card,CardBody, Container, Row, Col,Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import InvestmentBondPlan from "./Overview/InvestmentBondPlan";
import Statistics from "./Overview/Statistics";
import LineChart from "./Overview/LineChart";
import Funds from "./Overview/Funds";
import classnames from "classnames";

import Portfolio from "./Portfolio/Portfolio";
import Transactions from "./Transactions/Transactions";
import Documents from "./Documents/DocumentsTable";
import Premium from "./Premium/Premium";
import SwitchFunds from "./Switch/Switch";
 
const InvestmentBond = () => (
  <Container fluid className="p-0">
    <Statistics />
	<Card>
		<CardBody>
			<h1 className="h3 mb-3 ml-2">Overview and Policy Performance</h1>

			<Row>
				<Col lg="4" >
					<InvestmentBondPlan />
				</Col >
				
				<Col lg="8" >
					<LineChart />
				</Col >
			</Row>
		</CardBody>
	</Card>
	
	<Card>
		<CardBody>
			<Funds />
		</CardBody>
	</Card>
  </Container>
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
              Portfolio
            </NavLink>
          </NavItem>
		  
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Transactions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Documents
            </NavLink>
          </NavItem>
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Payments
            </NavLink>
          </NavItem>
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              Switch Funds
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <h4 className="tab-title">{name}</h4>
            <InvestmentBond/>
          </TabPane>
          
		  <TabPane tabId="2">
			 <Portfolio/>
          </TabPane>

		  <TabPane tabId="3">
			 <Transactions/>
          </TabPane>
		  
          <TabPane tabId="4">
			  <Documents/>
          </TabPane>
		  
		  <TabPane tabId="5">
		      <Premium/>	
          </TabPane>
		  
		  <TabPane tabId="6">
			<SwitchFunds/>
          </TabPane>
        
		</TabContent>
      </div>
    );
  }
}

const InvestmentBondTabs = () => (
        <TabsWithTextLabel  />
);

export default InvestmentBondTabs;