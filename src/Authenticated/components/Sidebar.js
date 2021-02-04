import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { Badge, Collapse } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle,faInfinity } from "@fortawesome/free-solid-svg-icons";

import routes from "../routes/index";
import avatarMG from "../assets/img/avatars/avatarMG.jpg";
import avatarAL from "../assets/img/avatars/avatarAL_4.jpg";
import avatar1 from "../assets/img/avatars/avatar.jpg";

import { withAuth } from '@okta/okta-react';

const SidebarCategory = withRouter(
  ({
    name,
    badgeColor,
    badgeText,
    icon: Icon,
    isOpen,
    children,
    onClick,
    location,
    to
  }) => {
    const getSidebarItemClass = path => {
      return location.pathname.indexOf(path) !== -1 ||
        (location.pathname === "/" && path === "/dashboard")
        ? "active"
        : "";
    };

    return (
      <li className={"sidebar-item " + getSidebarItemClass(to)}>
        <span
          data-toggle="collapse"
          className={"sidebar-link " + (!isOpen ? "collapsed" : "")}
          onClick={onClick}
          aria-expanded={isOpen ? "true" : "false"}
        >
          <Icon size={18} className="align-middle mr-3" />
          <span className="align-middle">{name}</span>
          {badgeColor && badgeText ? (
            <Badge color={badgeColor} size={18} className="sidebar-badge">
              {badgeText}
            </Badge>
          ) : null}
        </span>
        <Collapse isOpen={isOpen}>
          <ul id="item" className={"sidebar-dropdown list-unstyled"}>
            {children}
          </ul>
        </Collapse>
      </li>
    );
  }
);

const SidebarItem = withRouter(
  ({ name, badgeColor, badgeText, icon: Icon, location, to }) => {
    const getSidebarItemClass = path => {
      return location.pathname === path ? "active" : "";
    };

    return (
      <li className={"sidebar-item " + getSidebarItemClass(to)}>
        <NavLink to={to} className="sidebar-link" activeClassName="active">
          {Icon ? <Icon size={18} className="align-middle mr-3" /> : null}
          {name}
          {badgeColor && badgeText ? (
            <Badge color={badgeColor} size={18} className="sidebar-badge">
              {badgeText}
            </Badge>
          ) : null}
        </NavLink>
      </li>
    );
  }
);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle = index => {
    this.setState(state => ({
      [index]: !state[index]
    }));
  };

  componentWillMount() {
    /* Open collapse element that matches current url */
    const pathName = this.props.location.pathname;

    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === "/" ? true : false;

      this.setState(() => ({
        [index]: isActive || isOpen || isHome
      }));
    });
  }

  render() {
    const { sidebar, layout } = this.props;

    return (
      <nav
        className={
          "sidebar" +
          (!sidebar.isOpen ? " toggled" : "") +
          (sidebar.isSticky ? " sidebar-sticky" : "")
        }
      >
        <div className="sidebar-content">
          <PerfectScrollbar>
            <a className="sidebar-brand" href="/">
              
					<FontAwesomeIcon
                        icon={faInfinity}
						size={"1x"} 
                        className="align-middle text-primary mr-2"
                      />{" "}
              <span className="align-middle">Actuarial Tech</span>
            </a>

            <ul className="sidebar-nav">
              {routes.map((category, index) => {
                return (
                  <React.Fragment key={index}>
                    {category.header ? (
                      <li className="sidebar-header">{category.header}</li>
                    ) : null}

                    {category.children ? (
                      <SidebarCategory
                        name={category.name}
                        badgeColor={category.badgeColor}
                        badgeText={category.badgeText}
                        icon={category.icon}
                        to={category.path}
                        isOpen={this.state[index]}
                        onClick={() => this.toggle(index)}
                      >
                        {category.children.map((route, index) => (
                          <SidebarItem
                            key={index}
                            name={route.name}
                            to={route.path}
                            badgeColor={route.badgeColor}
                            badgeText={route.badgeText}
                          />
                        ))}
                      </SidebarCategory>
                    ) : (
                      <SidebarItem
                        name={category.name}
                        to={category.path}
                        icon={category.icon}
                        badgeColor={category.badgeColor}
                        badgeText={category.badgeText}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </ul>

            {!layout.isBoxed && !sidebar.isSticky ? (
              <div className="sidebar-bottom d-none d-lg-block">
                <div className="media">
                  <UserPicture />
                  <div className="media-body">
                    <UserInfo />
					
                    <div>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-success"
                      />{" "}
                      Online
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </PerfectScrollbar>
        </div>
      </nav>
    );
  }
}

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
	   <h5 className="mb-1">{this.state.user.name}</h5>
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
		switch(props.email) {
			case 'mark.grall@gmail.com':
			  return <img src={avatarMG} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
			case 'aideenleacy@gmail.com':
			  return <img src={avatarAL} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
			
			default:
			  return <img src={avatar1} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
		}
	}
	
	if (!this.state.user) return null;
    return (
	    <FnImage email={this.state.user.email} />
    )
	
  }
});


export default withRouter(
  connect(store => ({
    sidebar: store.sidebar,
    layout: store.layout
  }))(Sidebar)
);
