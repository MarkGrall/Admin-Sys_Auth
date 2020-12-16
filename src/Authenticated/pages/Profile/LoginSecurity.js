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

const NavbarDropdown = ({
  children,
  showBadge,
  header,
  icon: Icon
}) => (
  <UncontrolledDropdown>
		<DropdownToggle nav className="nav-icon dropdown-toggle">
		  <div className="position-relative">
			<Icon className="mb-2" size={16} />
		  </div>
		</DropdownToggle> 
		<DropdownMenu className="dropdown-menu-lg py-0">
		  <div className="dropdown-menu-header position-relative">
		   {header}
		  </div>
		  <ListGroup>{children}</ListGroup>
		</DropdownMenu>
	</UncontrolledDropdown>
);
const NavbarDropdownItem = ({ icon, title, description,  spacing }) => (
  <ListGroupItem>
    <Row noGutters className="align-items-Right">
      <Col xs={2}>{icon}</Col>
      <Col xs={10} className={spacing ? "pl-2" : null}>
        <div className="text-dark">{title}</div>
        <div className="text-muted small mt-1">{description}</div>
      </Col>
    </Row>
  </ListGroupItem>
);

const Info_Bullet = ( {InfoDesc, header}) => (
<Col sm={1}>
	<NavbarDropdown
		header={header}
		icon={HelpCircle}
	>
	{InfoDesc.map((item, key) => {
	  let icon = <PlusCircle className="text-primary" />;

	  return (
		<NavbarDropdownItem
		  icon={icon}
		  title={item.title}
		  description={item.description}
		/>
	  );
	})}
  </NavbarDropdown>
</Col>

);
const Info_CoverLevel = [
  {
    description: "When choosing how much cover you need you may want to consider the amount of your outstanding debts and how much you would like to provide to your loved ones. This may include:"
  },
  {
    type: "Bullet",
    description: "Your outstanding mortgage balance.",
  },
  {
    type: "Bullet",
    description: "Your other financial commitments.",
  },
  {
    type: "Bullet",
    description: "The education costs for your children.",
  },
  {
    type: "Bullet",
    description: "How much you want to leave your loved ones to help maintain their lifestyle.",
  }
];


const ConfirmPassword = () => (
<Card>
<CardBody>
 <h3 className="h3 mb-3 ">Confirm Password</h3>
 <Form id="ConfirmPassword">
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		Confirm your password
	  </Label>
	  <Col sm={3}>
		<Input name="ConfirmPassword" placeholder="Password" id="ConfirmPassword"  required />
	  </Col>
	  <Info_Bullet className=" m-0 "
		InfoDesc = {Info_CoverLevel}
		header = "How much life cover would you like?"  
	  />	  
	<Button  color="primary" className=" m-0 ">
	    Confirm Password 
    </Button>
	</FormGroup>
 </Form>
 </CardBody>
</Card>
);

const ResetPassword = () => (
<Card>
<CardBody>
 <h3 className="h3 mb-3 ">Change Password</h3>
 <Form id="ConfirmPassword">
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		Old password
	  </Label>
	  <Col sm={3}>
		<Input name="OldPassword" placeholder="Password" id="OldPassword"  required />
	  </Col>
	  <Info_Bullet className=" m-0 "
		InfoDesc = {Info_CoverLevel}
		header = "How much life cover would you like?"  
	  />	  
	</FormGroup>
	
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		New password
	  </Label>
	  <Col sm={3}>
		<Input name="NewPassword" placeholder="Password" id="NewPassword"  required />
	  </Col>
	  <Info_Bullet className=" m-0 "
		InfoDesc = {Info_CoverLevel}
		header = "How much life cover would you like?"  
	  />	  
	</FormGroup>
	
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		Confirm new password
	  </Label>
	  <Col sm={3}>
		<Input name="ReConfirmPassword" placeholder="Password" id="ReConfirmPassword"  required />
	  </Col>
	  <Info_Bullet className=" m-0 "
		InfoDesc = {Info_CoverLevel}
		header = "How much life cover would you like?"  
	  />	  

	</FormGroup>
	
	<Button  color="primary" className=" m-0 ">
	    Change Password 
    </Button>
 </Form>
 </CardBody>
</Card>
);


const ChangeEmail = () => (
<Card>
<CardBody>
 <h3 className="h3 mb-3 ">Change Email for log in</h3>
 <Form id="ChangeEmail">
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		New Email
	  </Label>
	  <Col sm={3}>
		<Input name="NewEmail" placeholder="Email" id="NewEmail"  required />
	  </Col>
	  <Info_Bullet className=" m-0 "
		InfoDesc = {Info_CoverLevel}
		header = "Change you email address for log in"  
	  />	  
	</FormGroup>
	
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		Confirm password
	  </Label>
	  <Col sm={3}>
		<Input name="ConfrimPasswordEmail" placeholder="Password" id="ConfrimPasswordEmail"  required />
	  </Col>
	  <Info_Bullet className=" m-0 "
		InfoDesc = {Info_CoverLevel}
		header = "Confirm your password in order to change your log in email"  
	  />	  
	</FormGroup>
	
	<Button  color="primary" className=" m-0 ">
	    Change Email 
    </Button>
 </Form>
 </CardBody>
</Card>
);


const Settings = () => (
<Container fluid className="p-0">	
		<ResetPassword/>
		<ChangeEmail/>
</Container>
        
);



export default Settings;
