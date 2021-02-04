import React from "react";
import { Card, Container, Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import classnames from "classnames";


import Current from "./Current";
import Past from "./Transactions";


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
              Current
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Past
            </NavLink>
          </NavItem>

		  
		</Nav> 
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><Current/></TabPane>
		  <TabPane tabId="2"><Past/></TabPane>
        </TabContent>
      </div>
    );
  }
}

const Charges = () => (
	<div>
		<Container fluid className="p-0">
			<Card className="m-0 mb-2  p-2">
			<TabsWithTextLabel  className="tab-primary"  />
			
			
			</Card>
		</Container>
	</div>
);



export default Charges;
