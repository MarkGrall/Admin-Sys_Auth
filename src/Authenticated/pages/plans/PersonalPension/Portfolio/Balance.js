import React from "react";
import { Col, Card, CardBody,CardHeader,CardTitle,Container, Media, Row } from "reactstrap";


const ClientCont = () => (
 <Container fluid className="p-0">
  <Row>
    
	<Col md="6" xl>
      <Card className="m-0 mb-2  p-2">

		  <Media className=" m-0 p-0">
            <div className="pr-4">
				<div className="textcentre .float-right">Balance</div>
				<h1 className="m-0 textcentre">£100,000</h1>	
			</div>
			<Media body >  
			  <div className="pl-4">
				<div className="textcentre .float-right">Portfolio</div>
				<h1 className="m-0 textcentre">£80,000</h1>
              </div>
            </Media>
			<Media body >  
			  <div className="pl-4">
				<div className="textcentre .float-right">Cash</div>
				<h1 className="m-0 textcentre">£20,000</h1>
              </div>
            </Media>
			<Media body >  
			  <div className="pl-4">
				<div className="textcentre .float-right">Available to Trade</div>
				<h1 className="m-0 textcentre">£20,000</h1>
              </div>
            </Media>
			<Media body >  
			  <div className="pl-4">
				<div className="textcentre .float-right">Day +/-</div>
				<h1 className="m-0 textcentre">£400</h1>
              </div>
            </Media>
			<Media body >  
			  <div className="pl-4">
				<div className="textcentre .float-right">Total +/-</div>
				<h1 className="m-0 textcentre">£20,000</h1>
              </div>
            </Media>
          </Media>
                     

      </Card>
    </Col>
	    
  </Row>
  </Container>
);

export default ClientCont;
