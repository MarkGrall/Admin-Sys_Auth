import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";


import FixedPolicyCharge from "./Fixed Policy Charge/index";




const ProductDetailsCont = () => (
  <Container fluid className="p-0">
	<FixedPolicyCharge />
  </Container>
);




export default ProductDetailsCont;