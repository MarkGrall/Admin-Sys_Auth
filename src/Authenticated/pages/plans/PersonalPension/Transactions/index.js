import React from "react";
import { Card,CardBody, Container, Row } from "reactstrap";
import TranDetails from "./Details";

const PlanDetails = () => (
  <Container fluid className="p-0">
	<Card>
		<CardBody>
			<h1 className="h3 mb-3 ml-2">Transaction Details</h1>

			<Row>
			

					<TranDetails />
			
			</Row>
		</CardBody>
	</Card>
	

  </Container>
);




export default PlanDetails;
