import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";

import { Card, CardBody, CardHeader,Container, CardTitle,Row } from "reactstrap";

import PremiumChart from "./PremiumChart"
import PremiumInstruction from "./PremiumInstruction"
import Details from "./Details";

const Premium = () => (
  <Container fluid className="p-0">
			<Row className="mb-3 ml-0" >
				<Details/>
			</Row>
			
			<PremiumInstruction/>
			<PremiumChart/>


  </Container>
);



export default Premium;
