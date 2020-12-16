import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,Input,
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

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport, Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

const B_Label="Personal Pension Levy"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


const Form_TaxRate = () => (
<Container fluid className="p-0">
	<Card className="card-margin">
		<Form id="Form_TaxRate">
			<FormGroup row>
				<Col >	
					<Label  className="text-sm-Left">
						Personal Pension Levy Rate
				     </Label>
				</Col>
			  <Col >
					<Input name="PersonalPensionLevy_TaxRate" placeholder="£" id="PersonalPensionLevy_TaxRate_ID"  required />
			  </Col>
			</FormGroup>
		 </Form>
	 </Card>
</Container>
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


class NameForm extends React.Component {
  constructor(props) {
    super(props);
	this.state = {value: ''};
	
	this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = ( event) => {
		this.setState({value: event.target.value});
		//alert('Named1 : ' + event.target.value)
		//alert('Named2 : ' + this.state.value)
		this.props.parentCallback( event.target.value );
  }
  
  render() {
	return (
	  <form >
		<label>
		  Corporate tax rate
		  <input type="text" value={this.state.value} onChange={this.handleChange} />
		</label>
	  </form>
	);
  }
}


class Container_Spec1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

	handleCallback = (childData) =>{
        this.setState({data: childData})
		alert('handle : ' + this.state.data);

    }

    handleSubmit(event) {
    //alert('A' )
	alert('A name was submitted: ' + this.state.data);
    //event.preventDefault();
  }

//"Testing - Container_Spec " + {data}
    render(){
        const {data} = this.state;
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
						  {B_Label} - Specification
					  </CardTitle>
					</CardHeader>
					<CardBody>
						<form onSubmit={this.handleSubmit}>
							<NameForm parentCallback = {this.handleCallback}/>	
							<input type="submit" value="Submit" />
						</form>
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	


export default Form_TaxRate;
