import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  Progress,
  Row,
  Table,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";
import ModelIcon from "./Modal/ModalIcon";


const ProductData = [ 
   { Header: "Premiums", Name1: "Min Regular Payment", Value1: "£100", Name2: "Max Regular Payment", Value2: "£1,000", Name3: "Min Single Top-up", Value3:"£1,000", Name4:"Allocation Rate", Value4:"100%", Name5:"Bid Offer Spread", Value5:"No Charge"
  }
  
]


class Table_1 extends React.Component {
  render() {
    return <Row>
	{		
		ProductData.map((Product, index) => {
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
  render() {
    return <Row>
	{		
		ProductData.map((Product, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <div className="card-actions float-right">
				<ModelIcon ProductData={ProductData} />
			  </div>
			  <CardTitle tag="h5" className="mb-1">
				  {Product.Header} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table_1 />
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
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
		  )
		})
	
	}
	</Row>
}}	


const Overview = () => (
  <Container fluid className="p-0">

		<Plans />
		

	

  </Container>
);	

	

export default Overview;
