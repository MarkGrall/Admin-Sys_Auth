import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown, Form, FormGroup,Input,Label
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

import {  MinusCircle, PlusCircle } from "react-feather";

import Info_Bullet from "../../../../../../../../../components/pages/InfoBullet/index - Short";
//import Info_Bullet from "~/Authenticated/components/pages/InfoBullet/index - Short";


const options_Charge = [
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

const options_ArrearsAdvance = [
  {
    label: "Arrears",
    value: "Arrears",
  },
  {
    label: "Advance",
    value: "Advance",
  }
];

const options_ChargeTimingType = [
  {
    label: "Policy Anniversary",
    value: "Policy Anniversary"
  },
  {
    label: "Specified Date",
    value: "Specified Date"
  }
];

const options_Day = [
  {
    label: "1st",
    value: "1st"
  },
  {
    label: "2nd",
    value: "2nd"
  },
  {
    label: "2nd",
    value: "2nd"
  },
    {
    label: "3rd",
    value: "3rd"
  },
    {
    label: "4th",
    value: "4th"
  },
    {
    label: "5th",
    value: "5th"
  }
  
];

const options_Month = [
  {
    label: "January",
    value: "January"
  },
  {
    label: "February",
    value: "February"
  },
  {
    label: "March",
    value: "March"
  },
    {
    label: "April",
    value: "April"
  },
    {
    label: "May",
    value: "May"
  },
    {
    label: "June",
    value: "June"
  }
  
];

class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		Row: this.props.Row,
		Up: ""
		};
	}
	
	componentDidMount() {
		this.setState({Row: this.props.Row})
		
	}
  	
	handleChange_Value1 = (e) => {
		this.props.Row.AmountOrPercentage =  e.target.value;
		this.props.parentCallback( this.props.Row );
	}	
	handleChange_Value2 = (e) => {
		this.props.Row.ChargeAmountOrPercentage =  e.target.value;
		this.props.parentCallback( this.props.Row );
	}	
	handleChange_Value3 = (e) => {
		this.props.Row.Frequency =  e.target.value;
		this.props.parentCallback( this.props.Row );
		this.handleChargeDate()
	}

	handleChange_Value4 = (e) => {
		this.props.Row.ArrearsAdvance =  e.target.value;
		this.props.parentCallback( this.props.Row );
	}
	
	handleChange_Value5 = (e) => {
		this.props.Row.ChargeTimingType =  e.target.value;
		this.props.parentCallback( this.props.Row );
		this.handleChargeDate()
	}

	handleChange_Value6 = (e) => {
		this.props.Row.ChargeTimingType_Spec_Day =  e.target.value;
		this.props.parentCallback( this.props.Row );
		this.handleChargeDate()
	}
	
	handleChange_Value7 = (e) => {
		this.props.Row.ChargeTimingType_Spec_Month =  e.target.value;
		this.props.parentCallback( this.props.Row );
		this.handleChargeDate()
	}
		
	handleChargeDate = () => {
		
		console.log("ChargeDate Before Props", this.state)
		console.log("ChargeDate Before State", this.props)
		
		if ( this.props.Row.ChargeTimingType ==="Specified Date") {

			if (this.props.Row.ChargeTimingType_Spec_Day === "") { this.props.Row.ChargeTimingType_Spec_Day = "1st" }
			if (this.props.Row.ChargeTimingType_Spec_Month === "") { this.props.Row.ChargeTimingType_Spec_Month = "January" }
			
			if ( this.props.Row.Frequency ==="Monthly") {
				this.props.Row.ChargeDate =  this.props.Row.ChargeTimingType_Spec_Day + " of Month";
			} else {
				this.props.Row.ChargeDate =  this.props.Row.ChargeTimingType_Spec_Day + " of " +  this.props.Row.ChargeTimingType_Spec_Month
			}
		} else {
			this.props.Row.ChargeDate = this.props.Row.ChargeTimingType
		}
		this.setState({Up: "1"}); //Dummy state to force the refresh of the state and render the page
		console.log("ChargeDate After Props", this.state)
		console.log("ChargeDate After State", this.props)
		this.props.parentCallback( this.state.Row );
	}
		
    render() {
	//  console.log("Table - props ", this.props )
		
		const Conditional_ChargeTiming = props => {
			const {
				ChargeTimingType, LabelName
			} = props;
			//console.log("render", props)
			if ( props.ChargeTimingType ==="Specified Date") {
				if ( this.state.Row.Frequency ==="Monthly") {
					return (
						<FormGroup row>
							<Label sm={4} className="text-sm-Left ml-2"> Specified Day of Month </Label>

							<Col sm={5} >
								<Input className=" float-left" type="select" value={this.state.Row.ChargeTimingType_Spec_Day} onChange={this.handleChange_Value6}  >
									{options_Day.map((option) => ( 
									<option value={option.value}>{option.label}</option>
									))}
								</Input>		
							  </Col>
						   
							<Info_Bullet header = "The minimum allowable premium to be paid." />	 
						</FormGroup>
					);
				}  else {
					//Quarterly or Annual
					return (
						<FormGroup row>
		
							<Label sm={4} className="text-sm-Left ml-2"> Specified Day and Month </Label>
							<Col sm={3} >
							
								<Input className=" float-left" type="select" value={this.state.Row.ChargeTimingType_Spec_Day} onChange={this.handleChange_Value6}  >
									{options_Day.map((option) => ( 
									<option value={option.value}>{option.label}</option>
									))}
								</Input>
							</Col>
							<Col sm={4} >
								<Input className=" float-left" type="select" value={this.state.Row.ChargeTimingType_Spec_Month} onChange={this.handleChange_Value7}  >
									{options_Month.map((option) => ( 
									<option value={option.value}>{option.label}</option>
									))}
								</Input>
							</Col>
						</FormGroup>
					)
				}
			}
			return <div/>
		}
	
		return (
			<div>
			<Card>
			<CardBody>

			<Form className="mb-4 "> 
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name1} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" name="144444" id="1" value={this.state.Row.AmountOrPercentage} onChange={this.handleChange_Value1}  >
						{options_Charge.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name2} </Label>

					<Col sm={5} >
						<Input name="2" value={this.state.Row.ChargeAmountOrPercentage} onChange={this.handleChange_Value2} id="2" />		
					</Col>
				  
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name3} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" value={this.state.Row.Frequency} onChange={this.handleChange_Value3}  >
						{options_Frequency.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name4} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" value={this.state.Row.ArrearsAdvance} onChange={this.handleChange_Value4}  >
						{options_ArrearsAdvance.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name5} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" value={this.state.Row.ChargeTimingType} onChange={this.handleChange_Value5}    >
						{options_ChargeTimingType.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				<Conditional_ChargeTiming ChargeTimingType={this.state.Row.ChargeTimingType} LabelName={this.props.HeaderData.Name6} />
			</Form>
			</CardBody>
			</Card> 
			</div>
		
		);
	};
};



export default DataForm;
