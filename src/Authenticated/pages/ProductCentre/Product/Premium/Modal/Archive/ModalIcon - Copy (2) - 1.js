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
    label: "No Bid Offer Spread",
    value: "No Bid Offer Spread",
  },
  {
    label: "5% Bid Offer Spread",
    value: "5% Bid Offer Spread",
  }

];

class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		ValuePrem_Min: this.props.ProductData.Value1,
		ValuePrem_Max: this.props.ProductData.Value2,
		ValuePrem_MinSP: this.props.ProductData.Value3,
		ValueAllocationRate: this.props.ProductData.Value4,
		ValueBidOffer: this.props.ProductData.Value5
		};
	}
	
  	
	handleChange_PremMin = (e) => {
		let value = e.target.value;
		this.setState({ ValuePrem_Min: value })
		this.props.ProductData.Value1 = value
		this.props.parentCallback( this.props.ProductData );
	}

	handleChange_PremMax = (e) => {
		let value = e.target.value;
		this.setState({ ValuePrem_Max: value })
		this.props.ProductData.Value2 = value
		this.props.parentCallback( this.props.ProductData );
	}
	
	handleChange_PremMinSP = (e) => {
		let value = e.target.value;
		this.setState({ ValuePrem_MinSP: value })
		this.props.ProductData.Value3 = value
		this.props.parentCallback( this.props.ProductData );
	}
	
	handleChange_AllocationRate = (e) => {
		let value = e.target.value;
		this.setState({ ValueAllocationRate: value })
		this.props.ProductData.Value4 = value
		this.props.parentCallback( this.props.ProductData );
	}
	
	handleChange_BidOffer = (e) => {
		let value = e.target.value;
		this.setState({ ValueBidOffer: value })
		this.props.ProductData.Value5 = value
		this.props.parentCallback( this.props.ProductData );
	}
	
    render() {   
		return (
			<div>
			<Card>
			<CardBody>

			<Form className="mb-4 "> 
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Min Regular Payment
				  </Label>

				  <Col sm={5} >
					 <Input name="MinPremium" value={this.state.ValuePrem_Min} onChange={this.handleChange_PremMin} id="MinPremium" />	
				  </Col>
				   
				  <Info_Bullet 
					header = "The minimum allowable premium to be paid."  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Max Regular Payment
				  </Label>

				  <Col sm={5} >
					<Input name="MaxPremium" value={this.state.ValuePrem_Max} onChange={this.handleChange_PremMax} id="MaxPremium" />	
				  </Col>
				   
				  <Info_Bullet 
					header = "The maximum allowable premium to be paid."  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Min Single Payment
				  </Label>

				  <Col sm={5} >
					<Input name="MinSinglePremium" value={this.state.ValuePrem_MinSP} onChange={this.handleChange_PremMinSP} id="MinSinglePremium" />	
				  </Col>
				   
				  <Info_Bullet 
					header = "The minimum top up allowed."  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Allocation Rate
				  </Label>

				  <Col sm={5} >
					<Input name="AllocationRate" value={this.state.ValueAllocationRate} onChange={this.handleChange_AllocationRate} id="AllocationRate" />	
				  </Col>
				   
				  <Info_Bullet 
					header = "The Allocation rate to be applied to all regular premiums."  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Bid Offer Spread
				  </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" name="state" id="state" value={this.state.ValueBidOffer} onChange={this.handleChange_BidOffer}  >
						{options.map((option) => (
						<option value={option.value}>{option.label}</option>
						))}
					</Input>	
				  </Col>
				   
				  <Info_Bullet 
					header = "The bid offer spread to be applied to purchasing units from premiums."  
				  />	 
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
		
		//alert( 'HCB' + ProductData_Updated.Value1 + ' ' + ProductData_Updated.Value2 + ' ' + ProductData_Updated.Value3 + ' ' + ProductData_Updated.Value4 + ' ' + ProductData_Updated.Value5 )
    }
	
	handleSubmit = () =>{
		this.setState({modal: !this.state.modal});
		this.props.parentCallback( ProductData_Updated );
    }

    render(){

		const {data} = this.state;
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
