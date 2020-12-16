import React, { useState } from "react";
import { Card, CardBody, Table, Row, Col, Form, FormGroup,Input,
Button, Modal, ModalBody, ModalFooter, ModalHeader, Label } from "reactstrap";

import { Form as FinalForm, Field } from 'react-final-form'

import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import Info_Bullet from "../../../../../components/pages/InfoBullet/index - Short";

let ProductData_Updated

const options = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  }

];


//{this.state.HeaderData.Name3}
class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			HeaderData: this.props.HeaderData,
			Value1: this.props.Value1, Value2: this.props.Value2, Value3: this.props.Value3,
			Value4: this.props.Value4, Value5: this.props.Value5, Value6: this.props.Value6
		};
	}
	
  	
	handleChange_AllocationRate = (e) => {
		let value = e.target.value;
		this.setState({ ValueAllocationRate: value })
		this.props.ProductData.Value4 = value
		this.props.parentCallback( this.props.ProductData );
	}
	
	handleChange_BidOffer = (e) => {
		let value = e.target.value;
		this.setState({ Value1: value })
		console.log("11", this.state )
		console.log("22", e.target.value )
		//this.props.Value1 = value
		this.props.parentCallback( e.target.value );
	}
	
    render() {
	console.log("Product0", this.state.HeaderData )		
	console.log("Product1", this.state )		
		return (
			<div>
			<Card>
			<CardBody>

			<Form className="mb-4 "> 
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.state.HeaderData.Name1} </Label>

				  <Col sm={5} >
				     <Input className=" float-left" type="select" name="state1" id="state1" value={this.state.Value1} onChange={this.handleChange_BidOffer}  >
						{options.map((option) => (
						<option value={option.value}>{option.label}</option>
						))}
					</Input>
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid."  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
						{this.state.HeaderData.Name2}
				  </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" name="state" id="state" value={this.state.Value2}   >
						{options.map((option) => (
						<option value={option.value}>{option.label}</option>
						))}
					</Input>
				  </Col>
				   
				  <Info_Bullet 
					header = "The maximum allowable premium to be paid."  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
						{this.state.HeaderData.Name3}
				  </Label>

				  <Col sm={5} >
					<Input  value={this.state.Value3}  />	
				  </Col>
				   
				  <Info_Bullet 
					header = "The minimum top up allowed."  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.state.HeaderData.Name4} </Label>

				  <Col sm={5} >
					<Input  value={this.state.Value4}  />	
				  </Col>
				   
				  <Info_Bullet header = "The Allocation rate to be applied to all regular premiums."  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.state.HeaderData.Name5} </Label>

				  <Col sm={5} >
					<Input  value={this.state.Value5}  />	
				  </Col>
				   
				  <Info_Bullet header = "The bid offer spread to be applied to purchasing units from premiums." />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.state.HeaderData.Name6} </Label>

				  <Col sm={5} >
					<Input value={this.state.Value6}  />	
				  </Col>
				   
				  <Info_Bullet header = "The bid offer spread to be applied to purchasing units from premiums." />	 
				</FormGroup>
				
			</Form>
			</CardBody>
			</Card> 
			</div>
		
		);
	};
};

class ModalIcon extends React.Component{
    constructor(props){
        super(props);
		this.state = { 
			HeaderData: this.props.HeaderData,
			Value1: this.props.Value1, Value2: this.props.Value2, Value3: this.props.Value3, Value4: this.props.Value4, Value5: this.props.Value5, Value6: this.props.Value6,
			modal: false
		};
		this.toggle = this.toggle.bind(this);
    }
	
	toggle() {
    this.setState({
      modal: !this.state.modal
    });
	}
	
	handleCallback = (childData) =>{
		ProductData_Updated=childData
		
		//alert( 'HCB' + ProductData_Updated.Value1 + ' ' + ProductData_Updated.Value2 + ' ' + ProductData_Updated.Value3 + ' ' + ProductData_Updated.Value4 + ' ' + ProductData_Updated.Value5 )
    }
	
	handleSubmit = () =>{
		this.setState({modal: !this.state.modal});
		this.props.parentCallback( ProductData_Updated );
    }

    render(){
console.log("Product2", this.state )	
        return(
			<div>
			  <FontAwesomeIcon icon={faPencilAlt} className="  fa-4x text-primary mr-2 mt-0" color="primary" onClick={this.toggle}> {this.props.buttonLabel}  </FontAwesomeIcon>
			  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				<ModalHeader toggle={this.toggle}>Edit Premium Details</ModalHeader>
				<ModalBody>
					<CardBody>
					  <DataForm parentCallback = {this.handleCallback}  
							HeaderData={this.state.HeaderData} Value1={this.state.Value1} Value2={this.state.Value2} Value3={this.state.Value3} Value4={this.state.Value4} 
							Value5={this.state.Value5} Value6={this.state.Value6}
					  />
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

export default ModalIcon;
