import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import classnames from "classnames";
import ProductHeader from "./ProductHeader";

import ProductDetails from "./ProductDetails/index";
import PlanOverview from "./PlanOverview/index";
import Documents from "./Documents/index"
import Charges from  "./Charges/index";
import Premium from  "./Premium/index";

//import Premium from  "./Premium/Modal/Test";
 // {this.props.aboutProps} 

const tableData = [
  {
    ProductCode: "FPB2-Temp1",
	ProductName: "Pension Plan",
	ProductGroup: "FPB",
    ProductCategory: "Regular Premium Pension Plan",
    OpenToNB: "Yes",
	Modified: "Yes",
    PlanCount: 250,
	InForcePlanCount: 150,
	OutOfForcePlanCount: 100,
	FirstRCD: '01/01/2010',
	RecentRCD: '01/01/2020',
	RegularPremium: "Yes",
	Indexation: "No",
	MinRegularPayment : "£100",
	MaxRegularPayment : "£1,000",
	RP_AllocationRate : "100%",
	RP_BidOfferSpread : "Yes",
	SinglePremium: "Yes",
	MinSinglePayment : "£100",
	MaxSinglePayment : "£1,000,000",
	SP_AllocationRate : "100%",
	SP_BidOfferSpread : "Yes",
	TopUp: "Yes",
	EarlyEncashmentCharge: "Yes"
  },
  {
    ProductCode: "PIB1-Temp",
	ProductName: "Investment Bond",
	ProductGroup: "PIB",
    ProductCategory: "Single Premium Bond",
    OpenToNB: "Yes",
	Modified: "Yes",
    PlanCount: 100,
	InForcePlanCount: 80,
	OutOfForcePlanCount: 20,
	FirstRCD: '01/01/2010',
	RecentRCD: '01/01/2020',
	FirstRCD: '01/01/2010',
	RecentRCD: '01/01/2020',
	RegularPremium: "No",
	Indexation: "No",
	MinRegularPayment : "£100",
	MaxRegularPayment : "£1,000",
	RP_AllocationRate : "100%",
	RP_BidOfferSpread : "Yes",
	SinglePremium: "Yes",
	MinSinglePayment : "£100",
	MaxSinglePayment : "£1,000,000",
	SP_AllocationRate : "100%",
	SP_BidOfferSpread : "Yes",
	TopUp: "Yes",
	EarlyEncashmentCharge: "Yes"
  }
];

let tableData_0 = tableData[0]

class TabsWithTextLabel extends React.Component {
  constructor(props) {
    super(props);
	this.state = { 
	//	data: this.props.location.aboutProps
		//	DataRow: this.props.detail
		};

//this.props.location.state.detail

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  
  componentDidMount() {
		//alert ( this.props.aboutProps )
		//alert (this.props.detail)
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
		
		{className}
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
          <TabPane tabId="1"><ProductDetails data={this.props.data} /></TabPane>
		  <TabPane tabId="2"><PlanOverview data={this.props.data} /></TabPane>
		  <TabPane tabId="3"><Documents/></TabPane>
		  <TabPane tabId="4"><Charges/></TabPane>
		  <TabPane tabId="5"><Premium data={this.props.data}/></TabPane>
        </TabContent>
      </div>
    );
  }
}

//<TabsWithTextLabel  />


class Product extends React.Component {
  constructor(props) {
    super(props);
	this.state = { 
		data: tableData_0
		};
	//	console.log("Product0", this.state.data )
  }
  
  componentDidMount () {
	//console.log("Product1", this.state.data )
	
	if(this.props.location.state){
		//Called from button (may not have a prop)
		//alert('1')
		if(this.props.location.state.fromProductSearch) {
			//Called from button with a prop
			//alert('1-1')
			this.setState({ data: this.props.location.state.fromProductSearch })
			//this.setState({ data: this.state.data.fromProductSearch })
		} else {
			//Called from button without a prop
			//alert('1-2')
			this.setState({ data: tableData_0 })
		}
		
	} else {
		//Called without a prop from Nav
		//alert('2')
		this.setState({ data: tableData_0 })
	}
	  
	//console.log("Product2", this.state.data )
    
  }
  //			{this.state.data.ProductCode}
  render() {
	 // console.log("Product3", this.state.data )
    return (
		<div>
			<ProductHeader className="p-0 m-0" data={this.state.data}/>	
			<TabsWithTextLabel data={this.state.data} />
			
		</div>
	
	)
}};



export default Product;
