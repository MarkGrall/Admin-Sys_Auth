import React from "react";
import { Link } from "react-router-dom";
import { Col, Card,Container,  Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

const ClientCont = (props) => (
 <Container fluid className="p-0">
  <Row>
    
	<Col md="6" xl>
      <Card className="m-0 mb-2  p-2">
		<Row>		
			<Col className="col-sm-2">
				<div className="  ml-2 p-0">
					<Link to="/ProductCentre/ProductSearch" className="m-0 p-0">
						<FontAwesomeIcon icon={faSearch} className="  fa-3x text-primary mr-2 mt-0"  />
						<h2 className="d-inline-block  textcentre">Search</h2>	
					</Link>	
				</div>
			</Col>
		
			<Col className="col-sm-2">
				<div className="pl-0">
					<div className="textcentre .float-right">Product</div>
					<h2 className="m-0 textcentre">{props.data.ProductCode}</h2>
				</div>
			</Col>
			
			<Col className="col-sm-2">
				<div className="pl-0">
					<div className="textcentre .float-right">Product</div>
					<h2 className="m-0 textcentre">{props.data.ProductName}</h2>
				</div>
			</Col>
		
			<Col className="col-sm-2">
				<div className="pl-0">
					<div className="textcentre .float-right">Product Group</div>
					<h2 className="m-0 textcentre">{props.data.ProductGroup}</h2>
				</div>
			</Col>
		
			<Col className="col-sm-2">
				<div className="p-0">				
					<div className="textcentre .float-right">Product Category</div>
					<h2 className="m-0 textcentre">Pension Plan</h2>			
				</div>
			</Col>

        </Row>
		
      </Card>
    </Col>
	    
  </Row>
  </Container>
);

export default ClientCont;
