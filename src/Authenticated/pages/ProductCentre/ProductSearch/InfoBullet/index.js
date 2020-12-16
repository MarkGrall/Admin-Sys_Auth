import React  from "react";
import { Row, Col, ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";
import {  PlusCircle, HelpCircle } from "react-feather";

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


export default Info_Bullet;
