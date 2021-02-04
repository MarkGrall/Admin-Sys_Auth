import React from "react";
import { Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import classnames from "classnames";

import Overview from "./ProductSetup/Products";
import ProductSetup from "./ProductSetup/Products";
import EventOrder from "./EventOrder/index"
import MortalityRates from  "./MortalityRates/index";
import TaxRates from  "./TaxRates/index";
import UWPRates from  "./UWP_Rates/index";
import BankHolidays from  "./BankHolidays/index";
import FundPrices from  "./Charges/index";
import EarlyEncashmentCharge from  "./EarlyEncashmentCharge/index";


class TabsWithTextLabel extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "3"
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
    const { className } = this.props;

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
              Product Setup 
            </NavLink>
          </NavItem>


		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Event Order
            </NavLink>
          </NavItem>

		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Mortality Rates
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Tax Rates
            </NavLink>
          </NavItem>
		  
		 <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              UWP Rates
            </NavLink>
          </NavItem>
		  
		  		 <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "7" })}
              onClick={() => {
                this.toggle("7");
              }}
            >
              Bank Holidays
            </NavLink>
          </NavItem>
		  
		 <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "8" })}
              onClick={() => {
                this.toggle("8");
              }}
            >
              Fund Prices
            </NavLink>
          </NavItem>
		  
		 <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "9" })}
              onClick={() => {
                this.toggle("9");
              }}
            >
              Early Encashment Charge
            </NavLink>
          </NavItem>

		  
		  
		  
		  
        </Nav>
        <TabContent activeTab={this.state.activeTab}> 
		  <TabPane tabId="1"><Overview/></TabPane>
		  <TabPane tabId="2"><ProductSetup/></TabPane>
		  <TabPane tabId="3"><EventOrder/></TabPane>
		  <TabPane tabId="4"><MortalityRates/></TabPane>
		  <TabPane tabId="5"><TaxRates/></TabPane>
		  <TabPane tabId="6"><UWPRates/></TabPane>
		  <TabPane tabId="7"><BankHolidays/></TabPane>
		  <TabPane tabId="8"><FundPrices/></TabPane>
		  <TabPane tabId="9"><EarlyEncashmentCharge/></TabPane>
		  
        </TabContent>
      </div>
    );
  }
}

const Parameters = () => (
	<div>
		<TabsWithTextLabel  />
	</div>
);


export default Parameters;
