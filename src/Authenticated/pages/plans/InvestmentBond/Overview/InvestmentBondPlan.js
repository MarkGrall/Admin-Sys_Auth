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
 { PlanType: "Investment Bond", Name1: "PlanID", Value1: "12345678", Name2: "Plan Name", Value2: "Complete Investment Bond", Name3: "Value", Value3:"£100,000", Name4:"Payment Status", Value4:"Monthly In-Force", Name5:"Paid To Date", Value5:"11/01/2020", Name6:"Payments", Value6:"£1,000.00 / month",
   Name7:"Bank", Value7:"Lloyds TSB", Name8:"Indexation", Value8:"Yes", Name9:"Guaranteed Cover", Value9:"No", Name10:"Maturity Date", Value10:"01/04/2025"
 }
]
  
class Plans extends React.Component {
  render() {
    return <Container fluid className="p-0">
    <Row>
	{		
		PlanSummaryData.map((planSummary, index) => {
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
					<th>{planSummary.Name6} </th>
					<td>{planSummary.Value6} </td>
				  </tr>
				  <tr>
					<th>{planSummary.Name7} </th>
					<td>{planSummary.Value7} </td>
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
