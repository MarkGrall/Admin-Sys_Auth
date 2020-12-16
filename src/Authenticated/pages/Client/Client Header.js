import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody,CardHeader,CardTitle,Container, Media, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";



const ClientCont = () => (
 <Container fluid className="p-0">
  <Row>
    
	<Col md="6" xl>
      <Card className="m-0 mb-2  p-2">

		<Row>		
			<Col className="col-sm-2">
				<div className="  ml-2 p-0">
					<Link to="/Client/Search" className="m-0 p-0">
						<FontAwesomeIcon icon={faSearch} className="  fa-3x text-primary mr-2 mt-0"  />
						<h2 className="d-inline-block  textcentre">Search</h2>	
					</Link>
				</div>
			</Col>

			<Col className="col-sm-2">
				<div className="p-0">
					<div className="textcentre .float-right">Client</div>
					<h2 className="m-0 textcentre">C-12345</h2>			
				</div>
			</Col>
		</Row>                     

      </Card>
    </Col>
	    
  </Row>
  </Container>
);

export default ClientCont;
