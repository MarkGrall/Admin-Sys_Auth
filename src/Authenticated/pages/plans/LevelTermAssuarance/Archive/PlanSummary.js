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
 { PlanType: "Personal Pension", Name1: "PlanID", Value1: "12345678", Name2: "Plan Name", Value2: "Complete Personal Pension", Name3: "Value", Value3:"£100,000", Name4:"Payment Status", Value4:"Monthly In-Force", Name5:"Paid To Date", Value5:"11/01/2020" },
 { PlanType: "Level Term Assuarance", Name1: "PlanID", Value1: "23456231", Name2: "Plan Name", Value2: "Protection Advance", Name3: "Sum Assuared", Value3:"£450,000", Name4:"Payment Status", Value4:"Monthly In-Force", Name5:"Paid To Date", Value5:"08/01/2020" },
 { PlanType: "Investment Bond", Name1: "PlanID", Value1: "87645673", Name2: "Plan Name", Value2: "Investment Bond", Name3: "Value", Value3:"£80,000", Name4:"Payment Status", Value4:"Paid Up", Name5:"Paid To Date", Value5:"05/01/2020" }
]
  

const SinglePlan = ( {planSummary,i} ) => (
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
      <CardTitle tag="h5" className="mb-0">
        Personal Pension
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Table size="sm" className="my-2">
        <tbody>
          <tr>
            <th> {planSummary.Name1} </th>
            <td>{planSummary.Value1}</td>
          </tr>
          <tr>
            <th>Plan Name:</th>
            <td>Complete Personal Pension</td>
          </tr>
          <tr>
            <th>Current Value:</th>
            <td>£100,000</td>
          </tr>
          <tr>
            <th>Payment Status:</th>
            <td>Monthly In-Force</td>
          </tr>
          <tr>
            <th>Paid To Date:</th>
            <td>11/01/2020</td>
          </tr>
        </tbody>
      </Table>
      <hr />
	  
	  <div className="buttonHolder">
		  <Button color="primary" >
				View Plan
		  </Button>
	  </div>	
    </CardBody>
  </Card>
);


class Plans extends React.Component {
  render() {
    return <Container fluid className="p-0">
	<h1 className="h3 mb-3">Overview</h1>
    <Row>
	{		
		PlanSummaryData.map((planSummary, index) => {
		return( 
		<Col cuscol2={5}>
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
			  <CardTitle tag="h5" className="mb-0">
				  {planSummary.PlanType} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="my-2">
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
				</tbody>
			  </Table>
			  <hr />
			  
			  <div className="buttonHolder">
				  <Button color="primary" >
						View Plan
				  </Button>
			  </div>	
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
