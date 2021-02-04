import React from "react";
import { Card,CardBody, Container, Col, CardHeader, CardTitle, Table } from "reactstrap";

import ModelIcon from "./Details - ModalIcon";


const ProductSummaryData = [
 { Header: "Product", Name1: "Product Name", Value1: "Complete Pension Plan", Name2: "Product Code", Value2: "FPB1", Name3: "Product Group", Value3: "FPB", Name4: "Product Category", Value4:"Pension Plan", Name5:"Open to New Business", Value5:"Yes"
  }
];

let ProductSummaryData_0 = ProductSummaryData[0]

  
class ProductDetails extends React.Component {
  render() {
    return <Container fluid className="p-0">
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <div className="card-actions float-right">
				<ModelIcon / >
			  </div>
			  <CardTitle tag="h5" className="mb-1">
				  {ProductSummaryData_0.Header} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  
				  <tr>
					<th> {ProductSummaryData_0.Name1} </th>
					<td>{this.props.data.ProductName }</td>
				  </tr>
				  <tr>
					<th>{ProductSummaryData_0.Name2} </th>
					<td>{this.props.data.ProductCode} </td>
				  </tr>
				  <tr>
					<th>{ProductSummaryData_0.Name3} </th>
					<td>{this.props.data.ProductGroup} </td>
				  </tr>
				  <tr>
					<th>{ProductSummaryData_0.Name4} </th>
					<td>{this.props.data.ProductCategory} </td>
				  </tr>
				  <tr>
					<th>{ProductSummaryData_0.Name5} </th>
					<td>{this.props.data.OpenToNB} </td>
				  </tr>
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
	</Container>
}}	


const ProductDetailsCont = (props) => (
  <Container fluid className="p-0">
	<ProductDetails data={props.data} />
  </Container>
);




export default ProductDetailsCont;
