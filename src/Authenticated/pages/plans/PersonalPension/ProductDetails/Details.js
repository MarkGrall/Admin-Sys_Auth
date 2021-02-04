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
 { Header: "Contributions", Name1: "Min Regular Payment", Value1: "£100", Name2: "Max Regular Payment", Value2: "£1,000", Name3: "Min Single Top-up", Value3:"£1,000", Name4:"Allocation Rate", Value4:"100%", Name5:"Bid Offer Spread", Value5:"No Charge"
  }
  ,
   { Header: "Charges", Name1: "Policy Fee", Value1: "£5 per month", Name2: "Fund Switch Charge", Value2: "No Charge", Name3: "Early Exit Charge", Value3:"No Charge", Name4:"Fund Charges", Value4:"Fund Dependenet",Name5:"Bid Offer Spread", Value5:"No Charge"
  },
	{ Header: "Benefits", Name1: "Loyalty Bonus", Value1: "1% per annum after 10 years", Name2: "Death Benefit", Value2: "101%", Name4: "Admin Rebate", Value4:"0.1% per annum", Name3:"Full Surrender", Value3:"100%",Name5:"Waiver of Premium", Value5:"Allowed"
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
				  {planSummary.Header} 
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
