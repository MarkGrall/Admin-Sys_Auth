import React from "react";
import { Button,Card,CardBody,CardHeader,CardTitle, Container,Form, FormGroup,Label, Input, Row, Col, Nav, NavItem, NavLink,TabContent,TabPane,Table } from "reactstrap";
import {
  HelpCircle,
  PlusCircle
} from "react-feather";
import {
  Collapse,
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,

} from "reactstrap";


import ReactDOM from 'react-dom';

import 'rsuite/lib/styles/index.less'; 

import { DateRangePicker } from 'rsuite';

const ResetPassword = () => (
<Card>
<CardBody>
 <h3 className="h3 mb-3 ">Change Password</h3>
 <Form id="ConfirmPassword">
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		Old password adsf
	  </Label>
	  <Col sm={3}>
		<Input name="OldPassword" placeholder="Password" id="OldPassword"  required />
	  </Col>
		<DateRangePicker/>

	</FormGroup>
	
	<div>
    <DateRangePicker
      appearance="default"
      placeholder="Defult"
      style={{ width: 280 }}
    />
    <hr />
    <DateRangePicker
      appearance="subtle"
      placeholder="Subtle"
      style={{ width: 280 }}
    />
  </div>
	
	
 </Form>
 </CardBody>
</Card>
);



const Settings = () => (
<Container fluid className="p-0">	
		<ResetPassword/>

</Container>
        
);



export default ResetPassword;
