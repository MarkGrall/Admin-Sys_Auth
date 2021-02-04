import React from "react";
import { Card,CardBody, Form, FormGroup,Label, Input, Col } from "reactstrap";
import 'rsuite/lib/styles/index.less'; 

import { DateRangePicker } from 'rsuite';

const ResetPassword = () => (
<Card>
<CardBody>
 <h3 className="h3 mb-3 ">Change Password</h3>
 <Form id="ConfirmPassword">
	<FormGroup row>
	  <Label sm={2} className="text-sm-Left">
		Old password adsf
	  </Label>
	  <Col sm={3}>
		<Input name="OldPassword" placeholder="Password" id="OldPassword"  required />
	  </Col>
		<DateRangePicker/>

	</FormGroup>
	
	<div>
    <DateRangePicker
      appearance="default"
      placeholder="Defult"
      style={{ width: 280 }}
    />
    <hr />
    <DateRangePicker
      appearance="subtle"
      placeholder="Subtle"
      style={{ width: 280 }}
    />
  </div>
	
	
 </Form>
 </CardBody>
</Card>
);


export default ResetPassword;
