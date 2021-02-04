import React from "react";
import { Container, Row } from "reactstrap";

import Overview from "./Details";

const PlanDetails = (props) => (
  <Container fluid className="p-0">

		

			<Row>
			

					<Overview data={props.data} />
			
			</Row>


	

  </Container>
);




export default PlanDetails;
