import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import Overview from "./Details";



const PlanDetails = () => (
  <Container fluid className="p-0">
	<Card>
		<CardBody>

			<Row>
			

					<Overview />
			
			</Row>
		</CardBody>
	</Card>
	

  </Container>
);




export default PlanDetails;
