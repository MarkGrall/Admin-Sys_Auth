import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown,
    Form, FormGroup, Label,
	 ListGroupItem,
  ListGroup
 
  } from "reactstrap";

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox
} from "availity-reactstrap-validation";
import { MoreHorizontal } from "react-feather";
import { PlusCircle, HelpCircle} from "react-feather";
import { Form as FinalForm, Field } from 'react-final-form'

const B_Label="Personal Pension Levy"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


const Form_TaxRate = () => (
 <Form id="Form_TaxRate">
	<FormGroup row>
	  <Label  className="text-sm-Left">
		Personal Pension Levy Rate
	  </Label>
	  <Col >
		  <AvGroup>
			<AvInput name="PersonalPensionLevy_TaxRate" placeholder="£" id="PersonalPensionLevy_TaxRate_ID"  required />
			<AvFeedback>Enter an amount.</AvFeedback>		
          </AvGroup>
	  </Col>
	</FormGroup>
 </Form>
);

const Form1 = () => (


		<FinalForm onSubmit={onSubmit} >
		  {({ handleSubmit, form,  CustomInput, values }) => (
			<form onSubmit={handleSubmit}>

			  <Form_TaxRate/>
			  
			</form>
		  )}
		</FinalForm>

);


//		  <AvGroup>
  //          <AvInput name="PersonalPensionLevy_TaxRate" placeholder="£" id="PersonalPensionLevy_TaxRate_ID"  required />
	//		<AvFeedback>Enter an amount.</AvFeedback>
			
    //      </AvGroup>


	 // <Info_Bullet 
	//	InfoDesc = {"Personal Pension Levy rate which is used in calculation during the period specified in the date parameters tab (next tab)"}
	//	header = "AAPersonal Pension Levy rate which is used in calculation during the period specified in the date parameters tab (next tab)"  
	//  />	 

class Container_2ndTable extends React.Component{
    constructor(props){
        super(props);
		this.state = {
				TableNumber_State: this.props.TableNumber_Prop
			}
    }
	//"Testing - Container_2ndTable " + {this.props.TableNumber_Prop}	
    render(){
        return(
			<Container fluid className="p-0">
				<Card className="card-margin">
					<CardHeader>
					  <div className="card-actions float-right">
						<UncontrolledDropdown>
						  <DropdownToggle tag="a">
							<MoreHorizontal />
						  </DropdownToggle>
						  <DropdownMenu right>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem>Something else here</DropdownItem>
						  </DropdownMenu>
						</UncontrolledDropdown>
					  </div>
					   <CardTitle id="HeaderID" tag="h3" className="mb-1" >
						  {B_Label} 
					  </CardTitle>
					</CardHeader>
					<CardBody>
					
						<AvForm >	         
							<Form1/>
						</AvForm>
				
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	

// 




export default Container_2ndTable;
