import React from "react";
import { Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import classnames from "classnames";

import Shares from "./Funds/FundPrices";
import Funds from "./Funds/FundPrices";
import Trackers from "./Funds/FundPrices";
import Bonds from "./Funds/FundPrices";
import Futures from "./Funds/FundPrices";
import Options from "./Funds/FundPrices";
import Favourites from "./Funds/FundPrices";

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
              Shares
            </NavLink>
          </NavItem>
          
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Funds
            </NavLink>
          </NavItem>
		  
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Trackers ETF's
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
              Futures
            </NavLink>
          </NavItem>
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              Options
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "7" })}
              onClick={() => {
                this.toggle("7");
              }}
            >
              Favourites
            </NavLink>
          </NavItem>
        </Nav>
		
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <h4 className="tab-title">{name}</h4>
            <Funds/>
          </TabPane>
          
		  <TabPane tabId="2">
			 <Shares/>
          </TabPane>

		  <TabPane tabId="3">
			 <Trackers/>
          </TabPane>
		  
          <TabPane tabId="4">
			  <Futures/>
          </TabPane>
		  
		  <TabPane tabId="5">
		      <Options/>	
          </TabPane>
		  
		  <TabPane tabId="6">
			<Bonds/>
          </TabPane>
		  
		  <TabPane tabId="7">
			<Favourites/>
          </TabPane>
        
		</TabContent>
      </div>
    );
  }
}

const FundCentre = () => (
        <TabsWithTextLabel  />
);

export default FundCentre;