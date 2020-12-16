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

const ProductData = [
 { Header: "Plan Overview", Name1: "Plan Count", Value1: "100", Name2: "In Force", Value2: "60", Name3: "Out Of Force", Value3:"40", Name4:"First Plan RCD", Value4:"01/01/2015", Name5:"Most Recent RCD", Value5:"01/05/2020"
  }  
]

let ProductData_0 = ProductData[0]
   
  
class Plans extends React.Component {
  render() {
    return <Row>
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
				  {ProductData_0.Header} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  
				  <tr>
					<th> {ProductData_0.Name1} </th>
					<td>{this.props.data.PlanCount}</td>
				  </tr>
				  <tr>
					<th>{ProductData_0.Name2} </th>
					<td>{this.props.data.InForcePlanCount} </td>
				  </tr>
				  <tr>
					<th>{ProductData_0.Name3} </th>
					<td>{this.props.data.OutOfForcePlanCount} </td>
				  </tr>
				  <tr>
					<th>{ProductData_0.Name4} </th>
					<td>{this.props.data.FirstRCD} </td>
				  </tr>
				  <tr>
					<th>{ProductData_0.Name5} </th>
					<td>{this.props.data.RecentRCD} </td>
				  </tr>
	
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
		  
	</Row>
}}	


const Overview = (props) => (
  <Container fluid className="p-0">

		<Plans data={props.data} />
		

	

  </Container>
);	

	

export default Overview;
