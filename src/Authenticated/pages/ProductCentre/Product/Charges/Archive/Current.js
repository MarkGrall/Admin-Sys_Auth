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



const PlanSummaryData = [

  { Header: "Charges", Name1: "Policy Fee", Value1: "£5 per month", Name2: "Fund Switch Charge", Value2: "No Charge", Name3: "Early Exit Charge", Value3:"No Charge", Name4:"Fund Charges", Value4:"Fund Dependenet",Name5:"Bid Offer Spread", Value5:"No Charge"
  }
]
  
class Plans extends React.Component {
  render() {
    return <Row>
	{		
		PlanSummaryData.map((Product, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <div className="card-actions float-right">
				<UncontrolledDropdown>
				  <DropdownToggle tag="a">
					<MoreHorizontal />
				  </DropdownToggle>
				  <DropdownMenu right>
					<DropdownItem>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem>Something else here</DropdownItem>
				  </DropdownMenu>
				</UncontrolledDropdown>
			  </div>
			  <CardTitle id="HeaderID" tag="h3" className="mb-1" >
				  
				  {Product.Header} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
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

	

export default Plans;
