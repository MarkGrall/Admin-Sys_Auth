import React from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table, Container } from "reactstrap";

import ModelIcon from "./Modal/ModalIcon";


const ProductData = [
  
   { Header: "Regular Premium Contributions", Name1: "Regular Premium", Name2: "Indexation", Name3: "Min Regular Payment", Name4: "Max Regular Payment", Name5:"Allocation Rate", Name6:"Bid Offer Spread"},
  
   { Header: "Single Premium Contributions", Name1: "Single Premium", Name2: "Top up Allowed", Name3: "Min Single Payment", Name4: "Max Single Payment", Name5:"Allocation Rate", Name6:"Bid Offer Spread"  }
  
]

let ProductData_0 = ProductData[0]
let ProductData_1 = ProductData[1]     


class Table_1 extends React.Component {
  	constructor(props) {
		super(props);
		this.state = { 
			HeaderData: this.props.HeaderData,
			Value1: this.props.Value1, Value2: this.props.Value2, Value3: this.props.Value3,
			Value4: this.props.Value4, Value5: this.props.Value5, Value6: this.props.Value6
		};
	}
  
	componentDidMount() {
		this.setState({HeaderData: this.props.HeaderData})
		this.setState({Value1: this.props.Value1})
		this.setState({Value2: this.props.Value2})
		this.setState({Value3: this.props.Value3})
		this.setState({Value4: this.props.Value4})
		this.setState({Value5: this.props.Value5})
		this.setState({Value6: this.props.Value6})

		//alert('here4444')
	}
  
  render() {	  
    return (
		<Row>
			  <Table size="sm" className="m-0">
				<tbody>
				  
				  <tr>
					<th> {this.state.HeaderData.Name1} </th>
					<td>{this.state.Value1}</td>
				  </tr>
				  <tr>
					<th>{this.state.HeaderData.Name2} </th>
					<td>{this.state.Value2} </td>
				  </tr>
				  <tr>
					<th>{this.state.HeaderData.Name3} </th>
					<td>{this.state.Value3} </td>
				  </tr>
				  <tr>
					<th>{this.state.HeaderData.Name4} </th>
					<td>{this.state.Value4} </td>
				  </tr>
				  
				  <tr>
					<th>{this.state.HeaderData.Name5} </th>
					<td>{this.state.Value5} </td>
				  </tr>

				  <tr>
					<th>{this.state.HeaderData.Name6} </th>
					<td>{this.state.Value6} </td>
				  </tr>				  
				</tbody>
			  </Table>
		</Row>
	)
}}	

//ProductData={this.state.data_0}
class Plan extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			HeaderData: this.props.HeaderData,
			Value1: this.props.Value1, Value2: this.props.Value2, Value3: this.props.Value3, Value4: this.props.Value4, Value5: this.props.Value5, Value6: this.props.Value6
		};
	}
		
render() {
	//console.log("Plan2", this.state)
    return (
				<Col  md="6">
					<Card className="card-margin">
						<CardHeader>
							<div className="card-actions float-right">
								<ModelIcon  parentCallback = {this.handleCallback} 
									HeaderData={this.state.HeaderData} Value1={this.state.Value1} Value2={this.state.Value2} Value3={this.state.Value3} Value4={this.state.Value4} 
									Value5={this.state.Value5} Value6={this.state.Value6}
								/>
							</div>
							<CardTitle tag="h5" className="mb-1">
							   {this.state.HeaderData.Header} 
							</CardTitle>
						</CardHeader>
						<CardBody>
							<Table_1 HeaderData={this.state.HeaderData} Value1={this.state.Value1} Value2={this.state.Value2} Value3={this.state.Value3} Value4={this.state.Value4} 
									 Value5={this.state.Value5} Value6={this.state.Value6} />
						</CardBody>
					</Card>
				</Col>
)}}	

//<ModelIcon ProductData={this.state.Header_0} parentCallback = {this.handleCallback} />

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
		<Plan HeaderData={ProductData_0} Value1={this.state.data.RegularPremium} Value2={this.state.data.Indexation} Value3={this.state.data.MinRegularPayment} Value4={this.state.data.MaxRegularPayment}  
				Value5={this.state.data.RP_AllocationRate}  Value6={this.state.data.RP_BidOfferSpread}  />
		 
		 <Plan HeaderData={ProductData_1} Value1={this.state.data.SinglePremium} Value2={this.state.data.TopUp} Value3={this.state.data.MinSinglePayment} Value4={this.state.data.MaxSinglePayment} 
				Value5={this.state.data.SP_AllocationRate} Value6={this.state.data.SP_BidOfferSpread}   />
		</Row>
	</Container>
	)
}};
		
export default Plans;
