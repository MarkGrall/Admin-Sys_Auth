import React from "react";
import { Col, Card, CardBody,CardHeader,CardTitle,Container, Media, Row } from "reactstrap";




const Statistics = () => (
 <Container fluid className="p-0">
  <Row>
    
	<Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="pr-4">
          <Media >
            <Media body >
                   
		
			 <h5 className="m-0 textcentre">NDQ | NVDA | US67066G1040 | USD |</h5>
			 
			 <h1 className="m-0 textcentre">NVIDIA CORPORATION - C</h1>
			 <h1 className="m-0 textcentre">$ 370.21</h1>
			 <h3 className="m-0 textcentre">Position $ 5,553.15 (Qty. 15)</h3>
			 
              
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
	
  
  </Row>
  </Container>
);

export default Statistics;
