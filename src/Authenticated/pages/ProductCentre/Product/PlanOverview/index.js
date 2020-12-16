import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";

import Overview from "./Details";



const PlanDetails = (props) => (
  <Container fluid className="p-0">

		

			<Row>
			

					<Overview data={props.data} />
			
			</Row>


	

  </Container>
);




export default PlanDetails;
