import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import TabsWithTextLabel_2 from "./TabsWithTextLabel_2"

let ProdData = { Value1: "", Value2: "", Value3: ""}
const HeaderData = { Header: "Regular Premium Contributions", Name1: "Amount or Percentage", Name2: "Charge", Name3: "Charge Frequency"}

class ModalIcon extends React.Component{
    constructor(props){
        super(props);
		this.state = { 
			Row: this.props.Row,
			ProdData: ProdData,
			modal: false
		};
		this.toggle = this.toggle.bind(this);

	//console.log("Modal Icon - Constructor ", this.state.Row.EffectiveDateFrom )
    }
	
	componentDidMount() {
		//console.log("Modal Icon - ProdData1 ", ProdData )
		//Adds the Table parameters onto the ProdData state
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value1 = this.state.Row.AmountOrPercentage;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value2 = this.state.Row.ChargeAmountOrPercentage;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value3 = this.state.Row.Frequency;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})
		
		//console.log("Modal Icon DidMount - ", this.state.Row.EffectiveDateFrom )
	}
	
	toggle() {
    this.setState({
      modal: !this.state.modal
    });
	}

	handleSubmit = () =>{
		this.setState({modal: !this.state.modal});
		
		this.state.Row.AmountOrPercentage = this.state.ProdData.Value1
		this.state.Row.ChargeAmountOrPercentage = this.state.ProdData.Value2 
		this.state.Row.Frequency = this.state.ProdData.Value3
		
		//console.log("Modal Icon -Submit ", this.state.Row.EffectiveDateFrom )
				
		this.props.parentCallback( this.state.Row );
    }
	
	handleCallback = (childData) =>{
		this.setState({Row:childData });
		//console.log("Modal Icon -CB ", this.state.Row.EffectiveDateFrom )
    }

    render(){
		//console.log("Modal Icon - Prop ", this.props )
		//console.log("Modal Icon - Render ", this.state.Row.EffectiveDateFrom )
        return(	
			<div>
			  <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={this.toggle}> {this.props.buttonLabel}  </FontAwesomeIcon>
			  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				<ModalHeader toggle={this.toggle}>Edit {this.props.buttonLabel}</ModalHeader>
				<ModalBody>
					<CardBody>
						<TabsWithTextLabel_2 className="tab-primary" parentCallback = {this.handleCallback} HeaderData={HeaderData} ProdData={this.state.ProdData} Row={this.state.Row} 
										   TabName_1={this.props.buttonLabel} TabName_2="Date Parameters"  />
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
