import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";


import PersonalPensionPlan from "./Details";
import Statistics from "./Statistics";
import LineChart from "./LineChart";
import Funds from "./Funds";



const PersonalPension = () => (
  <Container fluid className="p-0">
    <Statistics />
	<Card>
		<CardBody>
			<h1 className="h3 mb-3 ml-2">Overview and Policy Performance</h1>

			<Row>
				<LineChart />
			</Row>
		</CardBody>
	</Card>
	

  </Container>
);




export default PersonalPension;
