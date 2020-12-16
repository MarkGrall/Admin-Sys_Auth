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

import Info_Bullet from "../../../../../../../../components/pages/InfoBullet/index - Short";


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

class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		Row: this.props.Row
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
	}


    render() {
	//  console.log("Table - props ", this.props )	
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
				
				
			</Form>
			</CardBody>
			</Card> 
			</div>
		
		);
	};
};



export default DataForm;
