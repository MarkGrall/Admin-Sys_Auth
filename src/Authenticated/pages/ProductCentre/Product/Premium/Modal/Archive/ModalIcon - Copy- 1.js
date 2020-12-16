import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table, Row, Col, Form, FormGroup,Input,
Button, Modal, ModalBody, ModalFooter, ModalHeader, CustomInput, Label,
  ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown
} from "reactstrap";

import { Form as FinalForm, Field } from 'react-final-form'

import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";


import Info_Bullet from "../../../../../components/pages/InfoBullet/index";

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Info_Bullet_Data = [
  {
    type: "Bullet",
    description: "This will bring in the cloned products parameters as a starting point. Note the Cloned product will remain unaffected.",
  }
];




//////////////////////////////////////////////////


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



//////////////////////////////////////////////////

class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		ValuePrem_Min: this.props.ProductData.Value1,
		ValuePrem_Max: this.props.ProductData.Value2,
		ValuePrem_MinSP: this.props.ProductData.Value3,
		ValueAllocationRate: this.props.ProductData.Value4,
		ValueBidOffer: this.props.ProductData.Value4		
		};
	}
	  	
	handleChange_PremMin = (e) => {
		let value = e.target.value;
		this.setState({ ValuePrem_Min: value })
		this.props.ProductData.Value1 = value
	}

	handleChange_PremMax = (e) => {
		let value = e.target.value;
		this.setState({ ValuePrem_Max: value })
	}
	
	handleChange_PremMinSP = (e) => {
		let value = e.target.value;
		this.setState({ ValuePrem_MinSP: value })
	}
	
	handleChange_AllocationRate = (e) => {
		let value = e.target.value;
		this.setState({ ValueAllocationRate: value })
	}
	
	handleChange_BidOffer = (e) => {
		let value = e.target.value;
		this.setState({ ValueBidOffer: value })
	}
	
	Submit = () => {
		this.props.parentCallback( this.props.ProductData );

		//alert (e.target.value + label)
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
					InfoDesc = {Info_Bullet_Data}
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
					InfoDesc = {Info_Bullet_Data}
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
					InfoDesc = {Info_Bullet_Data}
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
					InfoDesc = {Info_Bullet_Data}
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
					InfoDesc = {Info_Bullet_Data}
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


//////////////////////////////////////

const ModalIcon = (props) => {
  const {
    buttonLabel,
    className,
	ProductData
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const handleCallback = (childData) =>{
        this.setState({data: childData})
	//alert( this.state.data.value )
    }
  
  return (
    <div>
	
      <FontAwesomeIcon icon={faPencilAlt} className="  fa-4x text-primary mr-2 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>
	 
	  <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Premium Details</ModalHeader>
        <ModalBody>

			<CardBody>
			  <DataForm ProductData={ProductData} parentCallback = {this.handleCallback}  />
			  
			</CardBody>

        </ModalBody>
        <ModalFooter>
		  
		  <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default ModalIcon;
