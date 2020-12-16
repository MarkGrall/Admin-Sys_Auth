import React, { useState } from "react";
import { Card, CardBody, Table, Row, Col, Form, FormGroup,Input,
Button, Modal, ModalBody, ModalFooter, ModalHeader, Label } from "reactstrap";

import { Form as FinalForm, Field } from 'react-final-form'

import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import Info_Bullet from "../../../../../components/pages/InfoBullet/index - Short";
import update from 'react-addons-update';

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

class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		ProdData: this.props.ProdData

		};
	}
	
	componentDidMount() {
		this.setState({ProdData: this.props.ProdData})
	//	console.log("1", this.state )
	//	console.log("2", this.props )
	}
  	

	handleChange_Value1 = (e ) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value1 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value1 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}

	handleChange_Value2 = (e) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value2 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value2 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}

	handleChange_Value3 = (e) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value3 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value3 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}

	handleChange_Value4 = (e) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value4 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value4 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}

	handleChange_Value5 = (e) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value5 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value5 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}

	handleChange_Value6 = (e) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value6 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value6 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}


    render() {   
		return (
			<div>
			<Card>
			<CardBody>

			<Form className="mb-4 "> 
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name1} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" name="144444" id="1" value={this.state.ProdData.Value1} onChange={this.handleChange_Value1}  >
						{options.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name2} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" value={this.state.ProdData.Value2} onChange={this.handleChange_Value2}  >
						{options.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name3} </Label>

				  <Col sm={5} >
					<Input name="3" value={this.state.ProdData.Value3} onChange={this.handleChange_Value3} id="3" />		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name4} </Label>

				  <Col sm={5} >
					<Input name="4" value={this.state.ProdData.Value4} onChange={this.handleChange_Value4} id="4" />		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name5} </Label>

				  <Col sm={5} >
					<Input name="5" value={this.state.ProdData.Value5} onChange={this.handleChange_Value5} id="5" />		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name6} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" value={this.state.ProdData.Value6} onChange={this.handleChange_Value6}  >
						{options.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>	
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
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
			data: null,
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
    }
	
	handleSubmit = () =>{
		this.setState({modal: !this.state.modal});
		this.props.parentCallback( ProductData_Updated );
    }

    render(){
	//	console.log("1", this.state )
		const {data} = this.state;
        return(
			<div>
			  <FontAwesomeIcon icon={faPencilAlt} className="  fa-4x text-primary mr-2 mt-0" color="primary" onClick={this.toggle}> {this.props.buttonLabel}  </FontAwesomeIcon>
			  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				<ModalHeader toggle={this.toggle}>Edit Premium Details</ModalHeader>
				<ModalBody>
					<CardBody>
					  <DataForm parentCallback = {this.handleCallback} HeaderData={this.props.HeaderData} ProdData={this.props.ProdData}  />
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
