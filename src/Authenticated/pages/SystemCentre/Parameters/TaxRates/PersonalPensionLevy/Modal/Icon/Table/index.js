import React  from "react";
import { Card, CardBody,CardHeader,CardTitle, Col,Container,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown,
    Form, FormGroup, Label
  } from "reactstrap";

import {
  AvForm,

  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
import { MoreHorizontal } from "react-feather";

import { Form as FinalForm } from 'react-final-form'

const BLabel="Personal Pension Levy"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


const FormTaxRate = () => (
 <Form id="FormTaxRate">
	<FormGroup row>
	  <Label  className="text-sm-Left">
		Personal Pension Levy Rate
	  </Label>
	  <Col >
		  <AvGroup>
			<AvInput name="PersonalPensionLevyTaxRate" placeholder="£" id="PersonalPensionLevyTaxRateID"  required />
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

			  <FormTaxRate/>
			  
			</form>
		  )}
		</FinalForm>

);


//		  <AvGroup>
  //          <AvInput name="PersonalPensionLevyTaxRate" placeholder="£" id="PersonalPensionLevyTaxRateID"  required />
	//		<AvFeedback>Enter an amount.</AvFeedback>
			
    //      </AvGroup>


	 // <InfoBullet 
	//	InfoDesc = {"Personal Pension Levy rate which is used in calculation during the period specified in the date parameters tab (next tab)"}
	//	header = "AAPersonal Pension Levy rate which is used in calculation during the period specified in the date parameters tab (next tab)"  
	//  />	 

class Container2ndTable extends React.Component{
    constructor(props){
        super(props);
		this.state = {
				TableNumberState: this.props.TableNumberProp
			}
    }
	//"Testing - Container2ndTable " + {this.props.TableNumberProp}	
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
						  {BLabel} 
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




export default Container2ndTable;
