import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table, Row, Col, Form, FormGroup,Input,
Button, Modal, ModalBody, ModalFooter, ModalHeader, CustomInput, Label,
  ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown
} from "reactstrap";


const options_Charge = [
  {
    label: "Select...",
    value: "Select...",
  },
  {
    label: "Amount",
    value: "Amount",
  },
  {
    label: "Percentage",
    value: "Percentage",
  }

];

const options_Frequency = [
{
    label: "Select...",
    value: "Select...",
  }, 
 {
    label: "Monthly",
    value: "Monthly",
  },
  {
    label: "Quarterly",
    value: "Quarterly",
  },
  {
    label: "Annual",
    value: "Annual",
  }

];

const InputRow = {
	id:5,
	AmountOrPercentage: "",
	ChargeAmountOrPercentage: "",
	Frequency: "",
	CurrentCharge: "",
	Used: "No",
  	EffectiveDateFrom: "",
    EffectiveDateTo: "",
	RunDateFrom: "",
	RunDateTo: ""
}
let ValueString = null; 
let ValueDate = null; 

class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		Row: InputRow
		};
	}	
	
	handleChange_Value1 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.AmountOrPercentage = value; 
		this.setState(({Row}) => ({ Row: NewRow}));
		
		this.props.parentCallback( NewRow );
	}
	handleChange_Value2 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.ChargeAmountOrPercentage = value; 
		this.setState(({Row}) => ({ Row: NewRow}));
		
		this.props.parentCallback( NewRow );
	}
	handleChange_Value3 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.Frequency = value; 
		this.setState(({Row}) => ({ Row: NewRow}));
		
		this.props.parentCallback( NewRow );
	}
	handleChange_Value4 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.EffectiveDateFrom = value; 
		this.setState(({Row}) => ({ Row: NewRow}));
		
		this.props.parentCallback( NewRow );
	}
	handleChange_Value5 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.EffectiveDateTo = value; 
		this.setState(({Row}) => ({ Row: NewRow}));
		
		this.props.parentCallback( NewRow );
	}
	handleChange_Value6 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.RunDateFrom = value; 
		this.setState(({Row}) => ({ Row: NewRow}));
		
		this.props.parentCallback( NewRow );
	}
	handleChange_Value7 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.RunDateTo = value; 
		this.setState(({Row}) => ({ Row: NewRow}));

		this.props.parentCallback( NewRow );
	}
	
	render() {
	//  console.log("Table - props ", this.props )
	//console.log("Render -  ", this.state )
	return (
	
	  <Card>
		<CardBody>
		  <Form className="mb-4 "> 
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Amount or Percentage
				  </Label>

					<Col sm={5} >
					<Input className=" float-left" type="select" name="AmountOrPercentage" id="AmountOrPercentage"  value={this.state.Row.AmountOrPercentage} onChange={this.handleChange_Value1}   >
						{options_Charge.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
		
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Charge Amount
				  </Label>

				  <Col sm={5} >
					<Input name="ChargeAmount" placeholder="Charge Amount" id="ChargeAmount"  value={this.state.Row.ChargeAmountOrPercentage} onChange={this.handleChange_Value2}  />
				  </Col>
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Charge Frequency
				  </Label>

				  <Col sm={5} >
					
					<Input className=" float-left" type="select" name="Frequency" id="Frequency" value="Amount" value={this.state.Row.Frequency} onChange={this.handleChange_Value3}  >
						{options_Frequency.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>
					
				  </Col>
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Effective Date From
				  </Label>

				  <Col sm={5} >
					<Input type="date" name="EffectiveDateFrom"  id="EffectiveDateFrom"  value={this.state.Row.EffectiveDateFrom} onChange={this.handleChange_Value4}  />
				  </Col>
				</FormGroup>

				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Effective Date To
				  </Label>

				  <Col sm={5} >
					<Input type="date" name="EffectiveDateTo"  id="EffectiveDateTo"  value={this.state.Row.EffectiveDateTo} onChange={this.handleChange_Value5}  />
				  </Col>
				</FormGroup>
		
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Run Date From
				  </Label>

				  <Col sm={5} >
					<Input type="date" name="RunDateFrom"  id="RunDateFrom"  value={this.state.Row.RunDateFrom} onChange={this.handleChange_Value6}  />
				  </Col>
				</FormGroup>
		  
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Run Date To
				  </Label>

				  <Col sm={5} >
					<Input type="date" name="RunDateTo"  id="RunDateTo"  value={this.state.Row.RunDateTo} onChange={this.handleChange_Value7}  />
				  </Col>
				</FormGroup>
		 </Form>
		</CardBody>
	  </Card> 
	)
}}



class ModalButton extends React.Component{
    constructor(props){
        super(props);
		this.state = { 
			Row: this.props.Row,
		};
		this.toggle = this.toggle.bind(this);

	//console.log("Modal Icon - Constructor ", this.state.Row.EffectiveDateFrom )
    }
	
	toggle() {this.setState({modal: !this.state.modal })}

	handleSubmit = () =>{
		//console.log("handleSubmit ", this.state )
		this.setState({modal: !this.state.modal});	
		this.props.parentCallback( this.state.Row );
    }
	
	handleCallback = (childData) =>{
		this.setState({Row:childData });
		//console.log("Modal1", childData )
    }

    render(){
		//console.log("MB1 ", this.state )
        return(	
		<div>
		  <Button className="btn btn-primary ml-2" color="primary" onClick={this.toggle}>New {this.props.B_Label}</Button>
		  
		  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
			<ModalHeader toggle={this.toggle}>New {this.props.B_Label}</ModalHeader>
			<ModalBody>

				<CardBody>
				  <DataForm parentCallback = {this.handleCallback}/>
				</CardBody>

			</ModalBody>
			<ModalFooter>	
			  <Button color="primary" onClick={this.handleSubmit}>Save</Button>{' '}
			  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
			</ModalFooter>
		  </Modal>
		  
		</div>

		)
	}
}

export default ModalButton;
