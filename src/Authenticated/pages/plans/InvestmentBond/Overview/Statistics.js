import React from "react";
import { Col, Card, CardBody,CardHeader,CardTitle,Container, Media, Row } from "reactstrap";

import { BarChart2, Activity, DollarSign, ShoppingBag } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt, faChartBar
} from "@fortawesome/free-solid-svg-icons";



const Statistics = () => (
 <Container fluid className="p-0">
  <Row>
    
	<Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="pr-4">
          <Media >
            <div className="d-inline-block  mr-3">
              <FontAwesomeIcon icon={faChartBar} className="fa-4x text-primary mr-2"  />
            </div>	
            <Media body >
                   
			  <div className="textcentre .float-right">Gross Value</div>
			  <h1 className="m-0 textcentre">£100,000</h1>
              
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
	
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="pr-4">
          <Media>
            <div className="d-inline-block  mr-3">
              <FontAwesomeIcon icon={faMoneyBillAlt} className="fa-4x text-success mr-2"  />
            </div>
            <Media body>
              <div className="m-0">Payments Made</div>
			  <h1 className="m-0">£82,000</h1>
              
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    
  </Row>
  </Container>
);

export default Statistics;