import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";


import TableSpec from "./Table Spec/index";
import TableEventOrder from "../Table/index";


const TableSpecCont = () => (
  <Container fluid className="p-0">
	<TableSpec />
	<TableEventOrder />
  </Container>
);




export default TableSpecCont;