import React from "react";
import { connect } from "react-redux";
import { Row, Container, Col, Card,CardBody} from "reactstrap";

import { enableClassicTheme } from "../../redux/actions/themeActions";
import { enableCorporateTheme } from "../../redux/actions/themeActions";
import { enableModernTheme } from "../../redux/actions/themeActions";

import screenshotThemeClassic from "../../assets/img/screenshots/theme-classic.png";
import screenshotThemeModern from "../../assets/img/screenshots/theme-modern.png";
import screenshotThemeCorporate from "../../assets/img/screenshots/theme-corporate.png";

class Settings extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { layout,  dispatch } = this.props;

    return (
		<Card>
		<CardBody>
		<h3 className="h3 mb-3 ">Change Theme</h3>
			<Row>
				<Col md="6" lg="4" className="py-3">
				  <div
					  className="settings-theme"
					  onClick={() =>
						dispatch(enableClassicTheme())
					  }
				  >
					  <span className="d-inline-block mt-1 text-muted">
						Classic
					  </span>
					  <img
						src={screenshotThemeClassic}
						className="img-fluid"
						alt="Classic"
					  />
				  </div>
				
				</Col>
				
				<Col md="6" lg="4" className="py-3">  
				  <div
					  className="settings-theme"
					  onClick={() =>
						dispatch(enableModernTheme())
					  }
				  >
					  <span className="d-inline-block mt-1 text-muted">
						Modern
					  </span>
					  <img
						src={screenshotThemeModern}
						className="img-fluid"
						alt="Modern"
					  />
					  
				  </div>
				</Col>

				<Col md="6" lg="4" className="py-3">  
				  <div
					  className="settings-theme"
					  onClick={() =>
						dispatch(enableCorporateTheme())
					  }
				  >
					  <span className="d-inline-block mt-1 text-muted">
						Corporate
					  </span>
					  <img
						src={screenshotThemeCorporate}
						className="img-fluid"
						alt="Corporate"
					  />
					  
				  </div>
				</Col>
				
			  </Row>

		 </CardBody>
		</Card>
    );
  }
}

export default connect(store => ({
  layout: store.layout
}))(Settings);


