import React , { useState } from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane, FormGroup, Form, Label, Input
 } from "reactstrap";




class DataParameters extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			Row: this.props.Row
		};
		console.log("1", this.state)
	}
	
	componentDidMount() {
		this.setState({Row: this.props.Row})
	}
  	
	handleChange_Value4 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.EffectiveDateFrom_String2 = value; 
		
		var dateParts = value.split("-"); //yyyy-mm-dd
		NewRow.EffectiveDateFrom_Date = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]); // month is 0-based, that's why we need dataParts[1] - 1
		NewRow.EffectiveDateFrom_String1 =  dateParts[2] + "/" +  dateParts[1]  + "/" + dateParts[0]
		
		this.setState(({Row}) => ({ Row: NewRow}));
		this.props.parentCallback( NewRow );
		
	}
	handleChange_Value5 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.EffectiveDateTo_String2 = value; 
		
		var dateParts = value.split("-"); //yyyy-mm-dd
		NewRow.EffectiveDateTo_Date = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]); // month is 0-based, that's why we need dataParts[1] - 1
		NewRow.EffectiveDateTo_String1 =  dateParts[2] + "/" +  dateParts[1]  + "/" + dateParts[0]
				
		this.setState(({Row}) => ({ Row: NewRow}));
		this.props.parentCallback( NewRow );
	}
	handleChange_Value6 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.RunDateFrom_String2 = value;
		
		var dateParts = value.split("-"); //yyyy-mm-dd
		NewRow.RunDateFrom_Date = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]); // month is 0-based, that's why we need dataParts[1] - 1
		NewRow.RunDateFrom_String1 =  dateParts[2] + "/" +  dateParts[1]  + "/" + dateParts[0]
		
		this.setState(({Row}) => ({ Row: NewRow}));
		this.props.parentCallback( NewRow );
	}
	handleChange_Value7 = (e) => {
		let value = e.target.value;
		let NewRow = Object.assign({}, this.state.Row);
		NewRow.RunDateTo_String2 = value; 
		
		var dateParts = value.split("-"); //yyyy-mm-dd
		NewRow.RunDateTo_Date = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]); // month is 0-based, that's why we need dataParts[1] - 1
		NewRow.RunDateTo_String1 =  dateParts[2] + "/" +  dateParts[1]  + "/" + dateParts[0]
		
		this.setState(({Row}) => ({ Row: NewRow}));
		this.props.parentCallback( NewRow );
	}
	

    render() {	
	//console.log("Table Render - ", this.state )
	
	return (
	 <div>
		<Container fluid className="p-0">
			<Card className="card-margin"> 
				<CardBody>
					<Form className="mb-4 "> 			
						<FormGroup row>
						  <Label sm={5} className="text-sm-Left ml-2">
							Effective Date From
						  </Label>
						  <Col sm={5}>         
							<Input type="date" name="EffectiveDateFrom"  id="EffectiveDateFrom"  value={this.state.Row.EffectiveDateFrom_String2} onChange={this.handleChange_Value4}  />
						  </Col>
						</FormGroup>
						
						<FormGroup row>
						  <Label sm={5} className="text-sm-Left ml-2">
							Effective Date To
						  </Label>
						  <Col sm={5}>         
							<Input type="date" name="EffectiveDateFrom"  id="EffectiveDateFrom"  value={this.state.Row.EffectiveDateTo_String2} onChange={this.handleChange_Value5}  />
						  </Col>
						</FormGroup>
						
						<FormGroup row>
						  <Label sm={5} className="text-sm-Left ml-2">
							Run Date From
						  </Label>
						  <Col sm={5}>         
							<Input type="date" name="EffectiveDateFrom"  id="EffectiveDateFrom"  value={this.state.Row.RunDateFrom_String2} onChange={this.handleChange_Value6}  />
						  </Col>
						</FormGroup>
						
						<FormGroup row>
						  <Label sm={5} className="text-sm-Left ml-2">
							Run Date To
						  </Label>
						  <Col sm={5}>         
							<Input type="date" name="EffectiveDateFrom"  id="EffectiveDateFrom"  value={this.state.Row.RunDateTo_String2} onChange={this.handleChange_Value7}  />
						  </Col>
						</FormGroup>
					
					</Form>			
				</CardBody>
			</Card>
		</Container>
    </div>
		
	)
}}

// <DateReturn parentCallback = {this.handleCallback_EffectiveDateFrom_String}  Date_Label={"Effective Date From"} Date_Var={this.state.Row.EffectiveDateFrom_String}  />
//					<DateReturn parentCallback = {this.handleCallback_EffectiveDateTo_String1}  Date_Label={"Effective Date To"} Date_Var={this.state.Row.EffectiveDateTo_String1}  />
//					<DateReturn parentCallback = {this.handleCallback_RunDateFrom_String1}  Date_Label={"Run Date From"} Date_Var={this.state.Row.RunDateFrom_String1}  />
//					<DateReturn parentCallback = {this.handleCallback_RunDateTo_String1}  Date_Label={"Run Date To"} Date_Var={this.state.Row.RunDateTo_String1}  />	
				
/*
		handleCallback_EffectiveDateFrom_String = (childData) =>{
		this.props.Row.EffectiveDateFrom_String = childData
		this.props.parentCallback( this.state.Row )
    }


	
	handleCallback_EffectiveDateTo_String1 = (childData) =>{
		this.props.Row.EffectiveDateTo_String1 = childData
		this.props.parentCallback( this.state.Row )
		//console.log("Table CB - ", this.state.Row.EffectiveDateFrom_String )
    }

	handleCallback_RunDateFrom_String1 = (childData) =>{
		this.props.Row.RunDateFrom_String1 = childData
		this.props.parentCallback( this.state.Row )
    }	
	handleCallback_RunDateTo_String1 = (childData) =>{
		this.props.Row.RunDateTo_String1 = childData
		this.props.parentCallback( this.state.Row )
    }
	*/

export default DataParameters;