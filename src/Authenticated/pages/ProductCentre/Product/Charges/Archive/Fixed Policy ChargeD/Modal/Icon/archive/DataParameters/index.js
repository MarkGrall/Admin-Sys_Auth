import React , { useState } from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane, FormGroup, Form, Label
 } from "reactstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

	
const MyComponent1 = (props) => {
  const {
    S_Date, min_Date, DateLabel, Row
  } = props;
  
  let isReadOnly = false; 
  let S_Date2 = null;  
  let min_Date2 = null;
  
  if( S_Date ) {
	S_Date2 = new Date(S_Date)
   // isReadOnly = true;
  }  
	  
  if( min_Date ) {
	//Min date not null so use it
	min_Date2 = new Date(min_Date); 
  } else {
	//Min date is null so use the sDate  
	min_Date2 = new Date();  
  }

	//alert( DateLabel + " - " + S_Date2 + " - " + min_Date2 + " - " + isReadOnly )
 
  const [date, setDate] = useState(S_Date2) 
 // const handleChange = date => setDate(date);
  
  const handleChange = (date) => {
	    setDate(date);
		var n = date.toLocaleDateString('en-GB');
		props.parentCallback( n );
		
		//console.log("2333333", n )
	}
  
  
  return (
	<DatePicker
      selected={date}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
	  minDate={min_Date2}
	  readOnly={isReadOnly}
    />
  );
}

const MyComponent = (props) => {
	const {
		S_Date, DateLabel
	} = props;
	
	let S_Date2 = null; 
	
	if( S_Date ) {
		S_Date2 = new Date(S_Date)
	}  
   
  const [date, setDate] = useState(S_Date2) 
  
  const handleChange = (date) => {
	    setDate(date);
		var n = date.toLocaleDateString('en-GB');
		props.parentCallback( n );
		
		//console.log("2333333", n )
	}
  
  
  return (
	<DatePicker
      selected={date}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
	  readOnly={false}
    />
  );
}
//minDate={min_Date2}
//readOnly={isReadOnly}


class DateReturn extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
		
    }
  }

  
  handleCallback = (childData) =>{
		//console.log("Table - DR - HCB ",  childData)
		this.props.parentCallback( childData )
    }
  
  componentDidUpdate() {
    var hiddenInputElement = document.getElementById("example-datepicker");
  }

  render() {
	//  console.log("Table - DR - Render - ", this.props.Date_Var )
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					{this.props.Date_Label}
				  </Label>
				  <Col sm={4}>         
					<MyComponent parentCallback = {this.handleCallback} S_Date={this.props.Date_Var}  DateLabel={this.props.Date_Label}  />
				  </Col>
				</FormGroup>
			</Form>
	)
}};
//min_Date={this.props.min_Date}

class DataParameters extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			Row: this.props.Row
		};
		//console.log("Table Const - ", this.state.Row.EffectiveDateFrom )
	}
	
	componentDidMount() {
		this.setState({Row: this.props.Row})
	}
  	
	handleCallback_EffectiveDateTo = (childData) =>{
		this.props.Row.EffectiveDateTo = childData
		this.props.parentCallback( this.state.Row )
		//console.log("Table CB - ", this.state.Row.EffectiveDateFrom )
    }
	handleCallback_EffectiveDateFrom = (childData) =>{
		this.props.Row.EffectiveDateFrom = childData
		this.props.parentCallback( this.state.Row )
    }
	handleCallback_RunDateFrom = (childData) =>{
		this.props.Row.RunDateFrom = childData
		this.props.parentCallback( this.state.Row )
    }	
	handleCallback_RunDateTo = (childData) =>{
		this.props.Row.RunDateTo = childData
		this.props.parentCallback( this.state.Row )
    }
	

    render() {	
	//console.log("Table Render - ", this.state.Row.EffectiveDateFrom )
	return (
	 <div>
		<Container fluid className="p-0">
			<Card className="card-margin"> 
				<CardBody>
					<DateReturn parentCallback = {this.handleCallback_EffectiveDateFrom}  Date_Label={"Effective Date From"} Date_Var={this.state.Row.EffectiveDateFrom}  />
					<DateReturn parentCallback = {this.handleCallback_EffectiveDateTo}  Date_Label={"Effective Date To"} Date_Var={this.state.Row.EffectiveDateTo}  />
					<DateReturn parentCallback = {this.handleCallback_RunDateFrom}  Date_Label={"Run Date From"} Date_Var={this.state.Row.RunDateFrom}  />
					<DateReturn parentCallback = {this.handleCallback_RunDateTo}  Date_Label={"Run Date To"} Date_Var={this.state.Row.RunDateTo}  />				
				</CardBody>
			</Card>
		</Container>
    </div>
		
	)
}}

//	<DateReturn  Date_Label={"Effective Date To"} Date_Var={this.props.Row.EffectiveDateTo}  min_Date={this.props.Row.EffectiveDateFrom} />				
//	<DateReturn  Date_Label={"Run Date From"} Date_Var={this.props.Row.RunDateFrom} />
//<DateReturn  Date_Label={"Run Date To"} Date_Var={this.props.Row.RunDateTo} min_Date={this.props.Row.RunDateFrom} />
					

export default DataParameters;