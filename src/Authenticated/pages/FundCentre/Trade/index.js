import React from "react";
import { Card,CardBody,CardHeader, CardTitle, Container, Row, Col,Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import classnames from "classnames";

import Overview from "./Overview";
import LineChart from "./Line";
import Chart from "./Chart/Chart";

const Trade = () => (
	<Container fluid className="p-0">
		<Overview/>
		<Chart/>  
	</Container>
);

export default Trade;