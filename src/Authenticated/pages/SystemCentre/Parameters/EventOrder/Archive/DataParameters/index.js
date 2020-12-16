import React , { useState } from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane, FormGroup, Form, Label
 } from "reactstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const DateExample = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};


class EffectiveDateFrom extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: new Date().toISOString()
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    
  }
  render() {
    return (
			 
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Effective Date From
				  </Label>
				  
				  <Col sm={4}>         
					<DateExample />
				  </Col>
				</FormGroup>
			</Form>
	)
}};
class EffectiveDateTo extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: new Date().toISOString()
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    
  }
  render() {
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Effective Date To
				  </Label>
				  <Col sm={4}>         
					<DateExample />
				  </Col>
				</FormGroup>
			</Form>
	)
}};
class RunDateFrom extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: new Date().toISOString()
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    
  }
  render() {
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Run Date From
				  </Label>
				  <Col sm={4}>         
					<DateExample />
				  </Col>
				</FormGroup>
			</Form>
	)
}};
class RunDateTo extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: new Date().toISOString()
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    
  }
  render() {
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Run Date To
				  </Label>
				  <Col sm={4}>         
					<DateExample />
				  </Col>
				</FormGroup>
			</Form>
	)
}};



const DataParameters = () => (
  <Container fluid className="p-0">
		<Container fluid className="p-0">
			<Card className="card-margin"> 
				<CardBody>
					<EffectiveDateFrom/>
					<EffectiveDateTo/>
					<RunDateFrom/>
					<RunDateTo/>
				</CardBody>
			</Card>
		</Container>
  </Container>
);




export default DataParameters;