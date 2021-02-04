import React from "react";
import { Card,CardBody, Container, Row } from "reactstrap";

import Statistics from "./Statistics";
import LineChart from "./LineChart";

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
