import React from "react";
import { Card,CardBody, Container, Row } from "reactstrap";

import ProductDetails from "./Details";

const PlanDetails = () => (
  <Container fluid className="p-0">
	<Card>
		<CardBody>
			<h1 className="h3 mb-3 ml-2">Product Details</h1>

			<Row>
			

					<ProductDetails />
			
			</Row>
		</CardBody>
	</Card>
	

  </Container>
);




export default PlanDetails;
