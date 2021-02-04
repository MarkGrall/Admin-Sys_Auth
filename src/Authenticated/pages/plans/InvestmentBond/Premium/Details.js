import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

const PlanSummaryData = [
 { PlanType: "Payment Details", Name1: "Plan Status", Value1: "In Force", Name2: "Payments this year", Value2: "£6,000", Name3: "Total Paid to Date", Value3:"£80,000", Name4:"Last Payment Date", Value4:"01/08/2020", Name5:"Next Payment due date", Value5:"01/09/2020", 
    Name8:"Indexation", Value8:"Yes", Name9:"Indexation Rate", Value9:"4%", Name10:"Indexation Date", Value10:"01/10/2020", Name11:"Payment after Indexation", Value11:"£1,040"
 }
]
  
class Plans extends React.Component {
  render() {
    return <Container fluid className="p-0">
    <Row>
	{		
		PlanSummaryData.map((planSummary, index) => {
		return( 
		
		<Col md="6"  >
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
			  <CardTitle tag="h5" className="mb-1">
				  {planSummary.PlanType} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> {planSummary.Name1} </th>
					<td>{planSummary.Value1}</td>
				  </tr>
				  <tr>
					<th>{planSummary.Name2} </th>
					<td>{planSummary.Value2} </td>
				  </tr>
				  <tr>
					<th>{planSummary.Name3} </th>
					<td>{planSummary.Value3} </td>
				  </tr>
				  <tr>
					<th>{planSummary.Name4} </th>
					<td>{planSummary.Value4} </td>
				  </tr>
				  <tr>
					<th>{planSummary.Name5} </th>
					<td>{planSummary.Value5} </td>
				  </tr>

				  <tr>
					<th>{planSummary.Name8} </th>
					<td>{planSummary.Value8} </td>
				  </tr>
				  <tr>
					<th>{planSummary.Name9} </th>
					<td>{planSummary.Value9} </td>
				  </tr>
				  <tr>
					<th>{planSummary.Name10} </th>
					<td>{planSummary.Value10} </td>
				  </tr>
				  <tr>
					<th>{planSummary.Name11} </th>
					<td>{planSummary.Value11} </td>
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
	</Container>
}}	


	

export default Plans;
