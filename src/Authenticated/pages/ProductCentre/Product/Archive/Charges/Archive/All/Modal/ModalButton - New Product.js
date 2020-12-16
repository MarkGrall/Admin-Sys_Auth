import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table, Row, Col, Form, FormGroup,Input,
Button, Modal, ModalBody, ModalFooter, ModalHeader, CustomInput, Label,
  ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown
} from "reactstrap";

import { Form as FinalForm, Field } from 'react-final-form'


import { MinusCircle, PlusCircle, Edit2, HelpCircle, Trash } from "react-feather";
import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";


import Info_Bullet from "../../../../../../components/pages/InfoBullet/index";

import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";

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


const DateExample = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};


 const ChargeFrequency_List = [
	  {value: 'Select', label: 'Select...'},
      {value: 'Daily', label: 'Daily'},
      {value: 'Monthly', label: 'Monthly'},
	   {value: 'Quarterly', label: 'Quarterly'},
	    {value: 'Annually', label: 'Annually'}
    ];

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


class ChargeFrequency extends React.Component {
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
					Charge Frequency
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={ChargeFrequency_List}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};



const EditProduct = () => (
<FinalForm onSubmit={onSubmit} >
  {({ handleSubmit, form,  CustomInput, values }) => (
	<form onSubmit={handleSubmit}>
	  

	  <Card>
		<CardBody>
		  <Form className="mb-4 "> 
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Charge Amount
				  </Label>

				  <Col sm={4} >
					<Input name="ChargeAmount" placeholder="Charge Amount" id="ChargeAmount"  required />
				  </Col>
				    
				</FormGroup>
				
				<ChargeFrequency />
				
				<EffectiveDateFrom/>
				<EffectiveDateTo/>
				<RunDateFrom/>
				<RunDateTo/>
		
		  
		 </Form>
		</CardBody>
	  </Card> 

	</form>
  )}
</FinalForm>
)

const ModalButton = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn btn-primary ml-2" color="primary" onClick={toggle}>New Fixed Charge</Button>
	  
	  <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New Fixed Policy Charge</ModalHeader>
        <ModalBody>

			<CardBody>
			  <EditProduct/>
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


export default ModalButton;
