import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import PersonalPensionPlan from "./Details";



const PlanDetails = () => (
  <Container fluid className="p-0">
	<Card>
		<CardBody>
			<h1 className="h3 mb-3 ml-2">Overview and Policy Performance</h1>

			<Row>
			

					<PersonalPensionPlan />
			
			</Row>
		</CardBody>
	</Card>
	

  </Container>
);




export default PlanDetails;
