import React from "react";
import { Card,CardBody, Container, Row, Col,Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import TermAssuarancePlan from "./Overview/TermAssuarancePlan";
import Statistics from "./Overview/Statistics";
import DocumentsTable from "./Documents/DocumentsTable";
import classnames from "classnames";


const TermAssuarance = () => (
  <Container fluid className="p-0">
    <Statistics />
	<Card>
		<CardBody>
			<h1 className="h3 mb-3 ml-2">Overview</h1>
			<TermAssuarancePlan />

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
              Premiums
            </NavLink>
          </NavItem>
		  
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <h4 className="tab-title">{name}</h4>
            <TermAssuarance/>
          </TabPane>
          
		  <TabPane tabId="2">
				<DocumentsTable/>
          </TabPane>
		  
          <TabPane tabId="3">
			
          </TabPane>
		  
        </TabContent>
      </div>
    );
  }
}

const TermAssuaranceTabs = () => (
        <TabsWithTextLabel  />
);


export default TermAssuaranceTabs;