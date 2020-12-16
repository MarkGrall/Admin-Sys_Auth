import React from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table, Container } from "reactstrap";

import ModelIcon from "./Modal/ModalIcon";


let ProdData = { Value1: "", Value2: "", Value3: "", Value4: "", Value5:"", Value6:""}

const HeaderData = [
   { Header: "Regular Premium Contributions", Name1: "Regular Premium", Name2: "Indexation", Name3: "Min Regular Payment", Name4: "Max Regular Payment", Name5:"Allocation Rate", Name6:"Bid Offer Spread"},
   { Header: "Single Premium Contributions", Name1: "Single Premium", Name2: "Top up Allowed", Name3: "Min Single Payment", Name4: "Max Single Payment", Name5:"Allocation Rate", Name6:"Bid Offer Spread"} 
]

let HeaderData_0 = HeaderData[0]
let HeaderData_1 = HeaderData[1]  


///////////////////////////////////////////////////
const ProductData = [ 
   { Header: "Premiums", Name1: "Min Regular Payment", Value1: "£100", Name2: "Max Regular Payment", Value2: "£1,000", Name3: "Min Single Top-up", Value3:"£1,000", 
     Name4:"Allocation Rate", Value4:"100%", Name5:"Bid Offer Spread", Value5:"No Bid Offer Spread"
  }
]
var ProductData_1 = ProductData[0];

class Table_1 extends React.Component {
  	constructor(props) {
		super(props);
		this.state = { 
			ProdData: this.props.ProdData
		};
	}
  
	componentDidMount() {
		this.setState({ProdData: this.props.ProdData}) 
		//alert('here4444')
	}
  
  render() {
    const {ProdData} = this.state;
    return ( 
	<Row>
	  <Table size="sm" className="m-0">
		<tbody>
		  <tr>
			<th> {this.props.HeaderData.Name1} </th>
			<td>{this.state.ProdData.Value1}</td>
		  </tr>
		  <tr>
			<th>{this.props.HeaderData.Name2} </th>
			<td>{this.state.ProdData.Value2} </td>
		  </tr>
		  <tr>
			<th>{this.props.HeaderData.Name3} </th>
			<td>{this.state.ProdData.Value3} </td>
		  </tr>
		  <tr>
			<th>{this.props.HeaderData.Name4} </th>
			<td>{this.state.ProdData.Value4} </td>
		  </tr>
		  <tr>
			<th>{this.props.HeaderData.Name5} </th>
			<td>{this.state.ProdData.Value5} </td>
		  </tr>
		  <tr>
			<th>{this.props.HeaderData.Name6} </th>
			<td>{this.state.ProdData.Value6} </td>
		  </tr>
		</tbody>
	  </Table>
	</Row>
)}}	

class Plan extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: ProductData,
			data_0: ProductData_1,
			ProdData: ProdData
		};
	}
	
	componentDidMount() {
		ProdData.Value1 = this.props.Value1
		ProdData.Value2 = this.props.Value2
		ProdData.Value3 = this.props.Value3
		ProdData.Value4 = this.props.Value4
		ProdData.Value5 = this.props.Value5
		ProdData.Value6 = this.props.Value6
		//console.log("Test1", ProdData )	
	}
	
	handleCallback = (childData) =>{
		this.setState({data: childData})
		//this.state.data=childData
		//alert( 'Here2' + this.state.data.Value1 + ' ' + this.state.data.Value2 + ' ' + this.state.data.Value3 + ' ' + this.state.data.Value4 + ' ' + this.state.data.Value5 )
	}
  
  render() {
  //console.log("Test2", ProdData )
    return (
	<Col  md="6">
		<Card className="card-margin">
			<CardHeader>
				<div className="card-actions float-right">
					<ModelIcon ProductData={this.state.data_0} parentCallback = {this.handleCallback} HeaderData={this.props.HeaderData} ProdData={this.state.ProdData} />
				</div>
				<CardTitle tag="h5" className="mb-1">
				   {this.props.HeaderData.Header} 
				</CardTitle>
			</CardHeader>
			<CardBody>
				<Table_1 HeaderData={this.props.HeaderData} ProdData={this.state.ProdData}   />
			</CardBody>
		</Card>
	</Col>
)}}	

////////////////////////

class Plans extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: this.props.data
		};
	}
	
render() {
	//console.log("Plan", this.state.data)
    return (
	<Container fluid className="p-0">
		<Row>
		
			<Plan HeaderData={HeaderData_0} Value1={this.state.data.RegularPremium} Value2={this.state.data.Indexation}  Value3={this.state.data.MinRegularPayment} 
				  Value4={this.state.data.MaxRegularPayment} Value5={this.state.data.RP_AllocationRate} Value6={this.state.data.RP_BidOfferSpread}  />
			
			<Plan HeaderData={HeaderData_1} Value1={this.state.data.SinglePremium} Value2={this.state.data.TopUp} Value3={this.state.data.MinSinglePayment} Value4={this.state.data.MaxSinglePayment} 
				Value5={this.state.data.SP_AllocationRate} Value6={this.state.data.SP_BidOfferSpread}   />
		</Row>
	</Container>
	)
}};



export default Plans;
