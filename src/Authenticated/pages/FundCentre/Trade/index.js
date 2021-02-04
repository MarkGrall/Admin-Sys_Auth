import React from "react";
import { Container } from "reactstrap";

import Overview from "./Overview";
import Chart from "./Chart/Chart";

const Trade = () => (
	<Container fluid className="p-0">
		<Overview/>
		<Chart/>  
	</Container>
);

export default Trade;