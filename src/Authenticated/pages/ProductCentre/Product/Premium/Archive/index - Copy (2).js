import React from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";

import ModelIcon from "./Modal/ModalIcon";

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
			//data: ProductData
			data: this.props.data
		};
	}
  
	componentDidMount() {
		this.setState({data: this.props.data}) 
		//alert('here4444')
	}
  
  render() {
	  const {data} = this.state;
    return <Row>

	{		
		this.state.data.map((Product, index) => {
		return( 
			  
			  <Table size="sm" className="m-0">
				<tbody>
				  
				  <tr>
					<th> {Product.Name1} </th>
					<td>{Product.Value1}</td>
				  </tr>
				  <tr>
					<th>{Product.Name2} </th>
					<td>{Product.Value2} </td>
				  </tr>
				  <tr>
					<th>{Product.Name3} </th>
					<td>{Product.Value3} </td>
				  </tr>
				  <tr>
					<th>{Product.Name4} </th>
					<td>{Product.Value4} </td>
				  </tr>
				  <tr>
					<th>{Product.Name5} </th>
					<td>{Product.Value5} </td>
				  </tr>
	
				</tbody>
			  </Table>
			 
		  )
		})
	}
	</Row>
}}	

class Plans extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: ProductData,
			data_0: ProductData_1
		};
	}
	
//	componentDidMount() {
	//	this.setState({data: ProductData[0]})	
//	}
	
	handleCallback = (childData) =>{
		this.setState({data: childData})
		//this.state.data=childData
		//alert( 'Here2' + this.state.data.Value1 + ' ' + this.state.data.Value2 + ' ' + this.state.data.Value3 + ' ' + this.state.data.Value4 + ' ' + this.state.data.Value5 )
	}
  
  render() {
    return <Row>
				<Col  md="6">
					<Card className="card-margin">
						<CardHeader>
							<div className="card-actions float-right">
								<ModelIcon ProductData={this.state.data_0} parentCallback = {this.handleCallback} />
							</div>
							<CardTitle tag="h5" className="mb-1">
							   {ProductData_1.Header} 
							</CardTitle>
						</CardHeader>
						<CardBody>
							<Table_1 data={this.state.data} />
						</CardBody>
					</Card>
				</Col>
			</Row>
}}	


export default Plans;
