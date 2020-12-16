import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";


import TableEventOrder from "./Table/index";


const TableSpecCont = () => (
  <Container fluid className="p-0">
	<TableEventOrder  />
  </Container>
);




export default TableSpecCont;