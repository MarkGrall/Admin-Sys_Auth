import React  from "react";
import { Row, Col, ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";
import {  PlusCircle, HelpCircle } from "react-feather";

const Info_Bullet = ( {InfoDesc, header}) => (
<Col sm={1}>
	<NavbarDropdown
		header={header}
		icon={HelpCircle}
	>
  </NavbarDropdown>
</Col>

);
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

export default Info_Bullet;
