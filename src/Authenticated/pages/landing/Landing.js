import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { enableClassicTheme } from "../../redux/actions/themeActions";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";



const Intro = () => (
  <section className="landing-intro pt-6 pt-xl-7">
    <Container>
      <Row>
        <Col md="12" lg="9" xl="11" className="mx-auto">
              <FontAwesomeIcon
				icon={faInfinity}
				size={60} 
				className="landing-intro-brand"
			  />{" "}
			  <span className="align-middle">Actuarial Tech</span>

              <h1 className="text-white my-4">
                Administration system
              </h1>

				
              <div className="my-4">
                <Link to="/dashboard/default">
                  <Button color="light" size="lg" className="mr-2">
                    Enter
                  </Button>
                </Link>
              </div>

           

        </Col>
      </Row>
    </Container>
  </section>
);


class Landing extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(enableClassicTheme());
  }

  render() {
    return (
      <React.Fragment>
        <Intro />

      </React.Fragment>
    );
  }
}

export default connect()(Landing);
