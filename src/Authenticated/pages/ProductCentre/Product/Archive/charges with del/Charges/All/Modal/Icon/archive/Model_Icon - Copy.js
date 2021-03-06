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
			modal: false
		};
		this.toggle = this.toggle.bind(this);
    }
	
	toggle() {
    this.setState({
      modal: !this.state.modal
    });
	}

	handleSubmit = () =>{
		this.setState({modal: !this.state.modal});
		this.props.parentCallback( this.state.Row );
    }
	
	handleCallback = (childData) =>{
		this.setState({Row:childData });
		//console.log("Modal Icon -CB ", this.state.Row.EffectiveDateFrom )
    }
	
	// 	DeleteRow = (props) =>{
	//	if( props.Row.Used = "No" ) {
			
		

    render(){
		//console.log("Modal Icon - Render ", this.state.Row.EffectiveDateFrom )
		const DeleteRow = props => {
			return (
			  <div>
				if( props.Row.Used = "No" ) {
				<Button color="danger" onClick={this.toggle}>Delete</Button>
				}
			  </div>
			);
		 };
		return(	
			<div>
			  <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={this.toggle}> {this.props.buttonLabel}  </FontAwesomeIcon>
			  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				<ModalHeader toggle={this.toggle}>Edit {this.props.buttonLabel}</ModalHeader>
				<ModalBody>
					<CardBody>
						<TabsWithTextLabel_2 
							className="tab-primary" parentCallback = {this.handleCallback} HeaderData={HeaderData} Row={this.state.Row} 
										   TabName_1={this.props.buttonLabel} TabName_2="Date Parameters"  
					   />
					</CardBody>
				</ModalBody>
				<ModalFooter> 
					<DeleteRow />
					
					<Button color="primary" onClick={this.handleSubmit}>Save</Button>{' '}
					<Button color="secondary" onClick={this.toggle}>Cancel</Button>
				</ModalFooter >
			  </Modal>
			</div>
        )
    }
}	

export default ModalIcon;
