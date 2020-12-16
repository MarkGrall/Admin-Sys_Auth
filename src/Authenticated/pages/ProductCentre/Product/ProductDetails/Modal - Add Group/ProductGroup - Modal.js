import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table, Row, Col, Form, FormGroup,
Button, Modal, ModalBody, ModalFooter, ModalHeader, CustomInput, Label,
  ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown
} from "reactstrap";

import { Form as FinalForm, Field } from 'react-final-form'

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2, HelpCircle, Trash } from "react-feather";
import Select from "react-select";

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
const Info_ClonedProduct = [
  {
    type: "Bullet",
    description: "This will bring in the cloned products parameters as a starting point. Note the Cloned product will remain unaffected.",
  }
];

 const ProductList = [
	  {value: 'Select', label: 'Select...'},
      {value: 'FPB1', label: 'FPB1'},
      {value: 'FPB2', label: 'FPB2'}
    ];


const CloneProduct_Choice = () => (

 <Form className="mb-4 "> 
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left ml-2">
		Clone a product 
	  </Label>
	  <Col sm={4}>         
		<Field name="CloneProduct_Choice_Field">
		  {props => (
				<div>
					<CustomInput
						value={props.input.value}
						onChange={props.input.onChange}
						type="select"
						component="input"
						id="PaymentType_Holiday"
						className="mb-2"
						className="react-select-container"
						classNamePrefix="react-select"

					>
						<option value="">Select...</option>
						<option>Yes</option>
						<option>No</option>
					</CustomInput>
				</div>
		   )}
		</Field>
	  </Col>	 
	  <Info_Bullet 
		InfoDesc = {Info_ClonedProduct}
		header = "Select the product you which to clone."  
	   />
	</FormGroup>
 </Form>
);
class CloneProduct_Product extends React.Component {
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
					Cloned Product
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={ProductList}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};
const CloneProduct = () => (
<FinalForm onSubmit={onSubmit} >
  {({ handleSubmit, form,  CustomInput, values }) => (
	<form onSubmit={handleSubmit}>
	  

	  <Card>
		<CardBody>
		  <CloneProduct_Choice/>
			  <Condition when="CloneProduct_Choice_Field" is="Yes" >
				<div>
					<CloneProduct_Product/>
				</div>
			  </Condition>	
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
      <Button className="btn btn-warning mt-0" color="warning" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Product Group/Category</ModalHeader>
        <ModalBody>

			<CardBody>
			  <CloneProduct/>
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
