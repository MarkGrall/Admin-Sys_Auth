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

const TranData = [
 
 { Header: "Parameters", Name1: "Age", Value1: "45", Name2: "Gender", Value2: "Male", Name3: "Smoker Status", Value3:"Smoker", Name4:"Sum Assured", Value4:"£80,0000"
  }
  ,
 { Header: "Calculated Values", Name1: "Mortality Rate", Value1: "0.002", Name2: "Policy Value", Value2: "£100,000", Name3: "Sum at risk", Value3:"£20,000", Name4: "Loading Rate", Value4:"0"
  }
]

const TranData_Formula = [
 
	{ Header: "Formula", Name1: "Mortality Charge", Value1: "Mortality Rate * Sum at Risk * ( 1 - Loading Rate )", 
	Name2: "Sum at Risk", Value2: "Policy Value - Sum Assured", Name3: "Policy Value", Value3:"For each Fund Units * Unit Price",Name4: "Result", Value4:"£50 = 0.002 * £20,000 * (1-0)"

  }
]
  
class Plans extends React.Component {
  render() {
    return <Container fluid className="p-0">
    <Row>
	{		
		TranData.map((TranData, index) => {
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
				  {TranData.Header} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  
				  <tr>
					<th> {TranData.Name1} </th>
					<td>{TranData.Value1}</td>
				  </tr>
				  <tr>
					<th>{TranData.Name2} </th>
					<td>{TranData.Value2} </td>
				  </tr>
				  <tr>
					<th>{TranData.Name3} </th>
					<td>{TranData.Value3} </td>
				  </tr>
				  <tr>
					<th>{TranData.Name4} </th>
					<td>{TranData.Value4} </td>
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
	
	<Row>
	
		{		
		TranData_Formula.map((TranData_Formula, index) => {
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
				  {TranData_Formula.Header} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  
				  <tr>
					<th> {TranData_Formula.Name1} </th>
					<td>{TranData_Formula.Value1}</td>
				  </tr>
				  <tr>
					<th>{TranData_Formula.Name2} </th>
					<td>{TranData_Formula.Value2} </td>
				  </tr>
				  <tr>
					<th>{TranData_Formula.Name3} </th>
					<td>{TranData_Formula.Value3} </td>
				  </tr>

				  <tr>
					<th>{TranData_Formula.Name4} </th>
					<td>{TranData_Formula.Value4} </td>
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
