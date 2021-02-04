import React from "react";
import {  CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";


import TabsWithTextLabel2 from "./TabsWithTextLabel_2"

const HeaderData = { Header: "Regular Premium Contributions", Name1: "Amount or Percentage", Name2: "Charge", Name3: "Charge Frequency", Name4: "Arrears or Advance", Name5: "Charge Timing Type" , Name6: "Specified Date" }


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
		//console.log("Modal - Submit ", this.state )
		this.setState({modal: !this.state.modal});
		this.props.parentCallback( this.state.Row );
    }
	
	handleDelete = () =>{
		this.setState({modal: !this.state.modal});
		this.props.parentCallback_Delete( this.state.Row );
    }
	
	handleCallback = (childData) =>{
		//console.log("Modal -CB ", childData )
		this.setState({Row:childData });
		//this.props.parentCallback_Delete( this.state.Row ); //only send back on submit
    }
	
    render(){
		//console.log("Modal Icon - Render ", this.state.Row.EffectiveDateFrom_String )
		const ConditionalDelete = props => {
			if (props.Used ==="No") {
				return (
					<Button color="danger" onClick={this.handleDelete} >Delete</Button>
				);
			}
			return <div/>
		}
		
		return(	
			<div>
			  <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={this.toggle}> {this.props.buttonLabel}  </FontAwesomeIcon>
			  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				<ModalHeader toggle={this.toggle}>Edit {this.props.buttonLabel}</ModalHeader>
				<ModalBody>
					<CardBody>
						<TabsWithTextLabel2 
							className="tab-primary" parentCallback = {this.handleCallback} HeaderData={HeaderData} Row={this.state.Row} 
										   TabName_1={this.props.buttonLabel} TabName_2="Date Parameters"  
					   />
					</CardBody>
				</ModalBody>
				<ModalFooter> 
					<ConditionalDelete Used={this.state.Row.Used} />

					<Button color="primary" onClick={this.handleSubmit}>Save</Button>{' '}
					<Button color="secondary" onClick={this.toggle}>Cancel</Button>
				</ModalFooter >
			  </Modal>
			</div>
        )
    }
}	

export default ModalIcon;
