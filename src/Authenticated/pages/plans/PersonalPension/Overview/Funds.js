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

const FundsData = [
 { Fund: "Emerging Market Equity Income Fund",Name1: "Value", Value1: "£40,000" , Name2: "Units", Value2:"20,000", Name3:"Price", Value3:"£2.00", Name4: "Policy Value Percent", Value4: "40%", Name5: "Future Premiums Percent", Value5: "25%" },
 { Fund: "High Yield Income Fund", Name1: "Value", Value1: "£30,000" , Name2: "Units", Value2:"10,000", Name3:"Price", Value3:"£3.00", Name4: "Policy Value Percent", Value4: "30%", Name5: "Future Premiums Percent", Value5: "25%"},
{ Fund: "Managed Fund 1", Name1: "Value", Value1: "£30,000" , Name2: "Units", Value2:"5,000", Name3:"Price", Value3:"£6.00", Name4: "Policy Value Percent", Value4: "30%", Name5: "Future Premiums Percent", Value5: "50%"}

] 
  
class Funds extends React.Component {
  render() {
    return <Container fluid className="p-0">
    <h1 className="h3 mb-3 ml-2">Current Policy Invested Funds</h1>
	<Row>
	{		
		FundsData.map((Fund, index) => {
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
				  {Fund.Fund} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> {Fund.Name1} </th>
					<td>{Fund.Value1}</td>
				  </tr>
				  <tr>
					<th>{Fund.Name2} </th>
					<td>{Fund.Value2} </td>
				  </tr>
				  <tr>
					<th>{Fund.Name3} </th>
					<td>{Fund.Value3} </td>
				  </tr>
				  <tr>
					<th>{Fund.Name4} </th>
					<td>{Fund.Value4} </td>
				  </tr>
				  <tr>
					<th>{Fund.Name5} </th>
					<td>{Fund.Value5} </td>
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


	

export default Funds;
