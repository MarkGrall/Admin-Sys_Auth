import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../redux/actions/sidebarActions";
import { Link } from "react-router-dom";
import { NavLink, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,
  Form,
  Input
} from "reactstrap";

import {
  AlertCircle,
  Bell,
  BellOff,
  Home,
  MessageCircle,
  PieChart,
  Settings,
  User,
  UserPlus
} from "react-feather";

import usFlag from "../assets/img/flags/us.png";
import esFlag from "../assets/img/flags/es.png";
import deFlag from "../assets/img/flags/de.png";
import nlFlag from "../assets/img/flags/nl.png";

import avatarAL from "../assets/img/avatars/avatarAL_4.jpg";
import avatarMG from "../assets/img/avatars/avatarMG.jpg";
import avatar1 from "../assets/img/avatars/avatar.jpg";
import avatar3 from "../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../assets/img/avatars/avatar-5.jpg";

import { withAuth } from '@okta/okta-react';

const notifications = [
  {
    type: "important",
    title: "Update completed",
    description: "Restart server 12 to complete the update.",
    time: "2h ago"
  },
  {
    type: "default",
    title: "Lorem ipsum",
    description: "Aliquam ex eros, imperdiet vulputate hendrerit et.",
    time: "6h ago"
  },
  {
    type: "login",
    title: "Login from 192.186.1.1",
    description: "",
    time: "6h ago"
  },
  {
    type: "request",
    title: "New connection",
    description: "Anna accepted your request.",
    time: "12h ago"
  }
];

const messages = [
  {
    name: "Ashley Briggs",
    avatar: avatar5,
    description: "Nam pretium turpis et arcu. Duis arcu tortor.",
    time: "15m ago"
  },
  {
    name: "Mark Grall",
    avatar: avatarMG,
    description: "Curabitur ligula sapien euismod vitae.",
    time: "2h ago"
  },
  {
    name: "Stacie Hall",
    avatar: avatar4,
    description: "Pellentesque auctor neque nec urna.",
    time: "4h ago"
  },
  {
    name: "Bertha Martin",
    avatar: avatar3,
    description: "Aenean tellus metus, bibendum sed, posuere ac, mattis non.",
    time: "5h ago"
  }
];

const NavbarDropdown = ({
  children,
  count,
  showBadge,
  header,
  footer,
  footerLink,
  icon: Icon
}) => (
  <UncontrolledDropdown nav inNavbar className="mr-2">
    <DropdownToggle nav className="nav-icon dropdown-toggle">
      <div className="position-relative">
        <Icon className="align-middle" size={18} />
        {showBadge ? <span className="indicator">{count}</span> : null}
      </div>
    </DropdownToggle>
    <DropdownMenu right className="dropdown-menu-lg py-0">
      <div className="dropdown-menu-header position-relative">
        {count} {header}
      </div>
      <ListGroup>{children}</ListGroup>
	  
	  <Link to={footerLink}>
		  <DropdownItem className="dropdown-menu-footer">
		   	 <span className="text-muted">{footer}</span>
		  </DropdownItem>
	  </Link>
	  	  
    </DropdownMenu>
  </UncontrolledDropdown>
);

const NavbarDropdownItem = ({ icon, title, description, time, spacing }) => (
  <ListGroupItem>
    <Row noGutters className="align-items-center">
      <Col xs={2}>{icon}</Col>
      <Col xs={10} className={spacing ? "pl-2" : null}>
        <div className="text-dark">{title}</div>
        <div className="text-muted small mt-1">{description}</div>
        <div className="text-muted small mt-1">{time}</div>
      </Col>
    </Row>
  </ListGroupItem>
);



const NavbarComponent = ({ dispatch }) => {
  return (
    <Navbar color="white" light expand>
      <span
        className="sidebar-toggle d-flex mr-2"
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        <i className="hamburger align-self-center" />
      </span>

      <Form inline>
        <Input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="form-control-no-border mr-sm-2"
        />
      </Form>

      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavbarDropdown
            header="New Messages"		 
			footer="Show all messages" 
			footerLink="../User/Chat"
            icon={MessageCircle}
            count={messages.length}
            showBadge
          >
            {messages.map((item, key) => {
              return (
                <NavbarDropdownItem
                  key={key}
                  icon={
                    <img
                      className="avatar img-fluid rounded-circle"
                      src={item.avatar}
                      alt={item.name}
                    />
                  }
                  title={item.name}
                  description={item.description}
                  time={item.time}
                  spacing
                />
              );
            })}
          </NavbarDropdown>

          <NavbarDropdown
            header="New Notifications"
            footer="Show all notifications"
			footerLink="../User/LoginSecurity"
			
            icon={BellOff}
            count={notifications.length}
          >
            {notifications.map((item, key) => {
              let icon = <Bell size={18} className="text-warning" />;

              if (item.type === "important") {
                icon = <AlertCircle size={18} className="text-danger" />;
              }

              if (item.type === "login") {
                icon = <Home size={18} className="text-primary" />;
              }

              if (item.type === "request") {
                icon = <UserPlus size={18} className="text-success" />;
              }

              return (
                <NavbarDropdownItem
                  key={key}
                  icon={icon}
                  title={item.title}
                  description={item.description}
                  time={item.time}
                />
              );
            })}
          </NavbarDropdown>

          <UncontrolledDropdown nav inNavbar className="mr-2">
            <DropdownToggle nav caret className="nav-flag">
              <img src={usFlag} alt="English" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <img
                  src={usFlag}
                  alt="English"
                  width="20"
                  className="align-middle mr-1"
                />
                <span className="align-middle">English</span>
              </DropdownItem>
              <DropdownItem>
                <img
                  src={esFlag}
                  alt="Spanish"
                  width="20"
                  className="align-middle mr-1"
                />
                <span className="align-middle">Spanish</span>
              </DropdownItem>
              <DropdownItem>
                <img
                  src={deFlag}
                  alt="German"
                  width="20"
                  className="align-middle mr-1"
                />
                <span className="align-middle">German</span>
              </DropdownItem>
              <DropdownItem>
                <img
                  src={nlFlag}
                  alt="Dutch"
                  width="20"
                  className="align-middle mr-1"
                />
                <span className="align-middle">Dutch</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <span className="d-inline-block d-sm-none">
              <DropdownToggle nav caret>
                <Settings size={18} className="align-middle" />
              </DropdownToggle>
            </span>
            <span className="d-none d-sm-inline-block text-dark">
              <DropdownToggle nav caret>
                <UserPicture />
				<UserInfo />

              </DropdownToggle>
            </span>
            <DropdownMenu right>
			  <Link to="../User/Profile">
			      <DropdownItem>
					<User size={18} className="align-middle mr-2" />
					Profile
				  </DropdownItem>
			  </Link>
			  
              <DropdownItem divider />
              
			  <Link to="/User/LoginSecurity">
				   <DropdownItem>Login & Security</DropdownItem>
			  </Link>
			  
			  <Link to="/User/Settings">
				   <DropdownItem>Settings</DropdownItem>
			  </Link>
			  
			  
				<DropdownItem>
					<LogOut />
				 </DropdownItem>
			  
			  
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};


const UserInfo = withAuth(class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser() {
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  }

  componentDidMount() {
	this.getCurrentUser();
  }

  render() {
    if (!this.state.user) return null;
    return (
	   <span className="text-dark"> 
			{this.state.user.name}	
	   </span>
    )
	
  }
});

const UserPicture = withAuth(class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser() {
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  }

  componentDidMount() {
	this.getCurrentUser();
  }

  render() {
    
	const FnImage = (props) => {
	const { email} = props;
		switch(props.email) {
			case 'mark.grall@gmail.com':
			  return <img src={avatarMG} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
			case 'aideenleacy@gmail.com':
			  return <img src={avatarAL} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
			
			default:
			  return <img src={avatar1} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
		}
	return <div/>
	}
	
	if (!this.state.user) return null;
    return (
	    <FnImage email={this.state.user.email} />
    )
	
  }
});


const LogOut = withAuth(class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( <a href="javascript:void(0)" onClick={() => this.props.auth.logout()}>Logout</a>  )
  }});





export default withRouter(
  connect(store => ({
    app: store.app
  }))(NavbarComponent)
);
