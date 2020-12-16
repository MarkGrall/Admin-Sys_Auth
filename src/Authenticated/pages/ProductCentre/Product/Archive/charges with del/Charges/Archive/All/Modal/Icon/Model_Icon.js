import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import TabsWithTextLabel_2 from "./TabsWithTextLabel_2"

let ProdData = { Value1: "", Value2: "", Value3: ""}

let ProductData_Updated

const HeaderData = { Header: "Regular Premium Contributions", Name1: "Amount or Percentage", Name2: "Charge", Name3: "Charge Frequency"}

class ModalIcon extends React.Component{
    constructor(props){
        super(props);
		this.state = { 
			ProdData: ProdData,
			modal: false
		};
		this.toggle = this.toggle.bind(this);
    }
	
	componentDidMount() {
		//console.log("Modal Icon - ProdData1 ", ProdData )
		//Adds the Table parameters onto the ProdData state
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value1 = this.props.Row.AmountOrPercentage;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value2 = this.props.Row.ChargeAmountOrPercentage;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value3 = this.props.Row.Frequency;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})
	}
	
	toggle() {
    this.setState({
      modal: !this.state.modal
    });
	}
	

	
	handleSubmit = () =>{
		
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value1 = this.props.Row.AmountOrPercentage;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})
		
		this.setState({modal: !this.state.modal});
		
		this.props.Row.AmountOrPercentage = this.state.ProdData.Value1
		this.props.Row.ChargeAmountOrPercentage = this.state.ProdData.Value2 
		this.props.Row.Frequency = this.state.ProdData.Value3
		
		console.log("Modal Icon -Submit  state  ", this.props )
		//console.log("Modal Icon -Submit state ", this.state )
		//console.log("Modal Icon -Submit ProductData_Updated ", this.state.Row )
		
		
		this.props.parentCallback( this.props.Row );
    }

    render(){
		//console.log("Modal Icon - Prop ", this.props )
		//console.log("Modal Icon - state ", this.state )
		const {data} = this.state;
        return(	
			<div>
			  <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={this.toggle}> {this.props.buttonLabel}  </FontAwesomeIcon>
			  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				<ModalHeader toggle={this.toggle}>Edit Premium Details</ModalHeader>
				<ModalBody>
					<CardBody>
					  <TabsWithTextLabel_2 className="tab-primary" parentCallback = {this.handleCallback} HeaderData={HeaderData} ProdData={this.state.ProdData} Row={Row} TabName_1={this.props.buttonLabel} TabName_2="Date Parameters"  />
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
