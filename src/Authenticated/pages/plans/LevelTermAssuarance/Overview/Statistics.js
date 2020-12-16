import React from "react";
import { Col, Card, CardBody,CardHeader,CardTitle,Container, Media, Row } from "reactstrap";

import { BarChart2, Activity, DollarSign, ShoppingBag } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";



const Statistics = () => (
 <Container fluid className="p-0">
  <Row>
    
	<Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="pr-4">
           <Media>
            <div className="d-inline-block  mr-3">
              <FontAwesomeIcon icon={faMoneyBillAlt} className="fa-4x text-success mr-2"  />
            </div>
            <Media body>
              <div className="m-0">Sum Assured</div>
			  <h0 className="m-0">£100,000</h0>
              
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
              <FontAwesomeIcon icon={faCalendarAlt} className="fa-4x text-primary mr-2"  />
            </div>
            <Media body>
              <div className="m-0">Cover until date</div>
			  <h0 className="m-0">01/01/2030</h0>
              
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    
  </Row>
  </Container>
);

export default Statistics;
