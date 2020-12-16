import React from "react";
import { Card,CardBody, Container, Row, Col, CardHeader, CardTitle, Table, Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import ModelIcon from "./Details - ModalIcon";


const ProductSummaryData = [
 { Header: "Product", Name1: "Product Name", Value1: "Complete Pension Plan", Name2: "Product Code", Value2: "FPB1", Name3: "Product Group", Value3: "FPB", Name4: "Product Category", Value4:"Pension Plan", Name5:"Open to New Business", Value5:"Yes"
  }
]
  
class ProductDetails extends React.Component {
  render() {
    return <Container fluid className="p-0">
    <Row>
	{		
		ProductSummaryData.map((planSummary, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <div className="card-actions float-right">
				<ModelIcon / >
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


const ProductDetailsCont = () => (
  <Container fluid className="p-0">
	<ProductDetails />
  </Container>
);




export default ProductDetailsCont;
