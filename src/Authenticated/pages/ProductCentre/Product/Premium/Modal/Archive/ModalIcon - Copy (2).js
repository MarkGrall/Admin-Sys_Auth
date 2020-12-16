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

import { useForm } from 'react-hook-form';

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

 const ProductList = [
	  {value: 'Select', label: 'Select...'},
      {value: 'FPB1', label: 'FPB1'},
      {value: 'FPB2', label: 'FPB2'}
    ];

 const ProductGroup_List = [
	  {value: 'Select', label: 'Select...'},
      {value: 'FPB', label: 'FPB'},
      {value: 'PIB', label: 'PIB'}
    ];


 const ProductCategory_List = [
	  {value: 'Select', label: 'Select...'},
      {value: 'PensionPlan', label: 'Pension Plan'},
      {value: 'TermAssuarance', label: 'Term Assuarance'}
    ];

 const NB_List = [
	  {value: 'Select', label: 'Select...'},
      {value: 'Yes', label: 'Yes'},
      {value: 'No', label: 'No'}
    ];



class ProductGroup extends React.Component {
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
					Product Group
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={ProductGroup_List}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};

class ProductCategory extends React.Component {
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
					Product Category
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={ProductCategory_List}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};

class OpenToNB extends React.Component {
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
					Open to new business
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={NB_List}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};



class EditProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				ProductData: this.props.ProductData,
				Value: null
			};
		this.handleChange = this.handleChange.bind(this);
	}
		
	handleChange = (e) => {
		//let index = e.nativeEvent.target.selectedIndex;
		//let label = e.nativeEvent.target[index].text;
		let value = e.target.value;
		
		this.setState({value: value  })
		//handleClick_Update (value )
		//this.props.parentCallback( {value} );

		
		//alert (e.target.value + label)
	}
	
	componentDidMount() {
		this.setState({Value: this.props.ProductData.Value1  })
		//this.setState({value: this.props.ProductData.value1   })
		//handleClick (this.state.TableNumber_State) 
		//alert(this.props.ProductData.Value1)
	}

	componentDidUpdate() {
		//this.setState({TableNumber_State: this.props.TableNumber_Prop})
		//alert( 'State is ' + this.state.TableNumber_State  +  'Prop is ' + this.props.TableNumber_Prop );
		//handleClick (this.props.TableNumber_Prop) 
	}
//Testing - ExpandableRowsTable_2ndTable - state   {this.state.TableNumber_State }   - Prop  {this.props.TableNumber_Prop}
//onChange={this.handleChange}
	render() {     
	const {data} = this.state;
    return (
	
		  <Card>
			<CardBody>
			
			  <Form className="mb-4 "> 
					<FormGroup row>
					  <Label sm={4} className="text-sm-Left ml-2">
						Min Regular Payment
					  </Label>

					  <Col sm={4} >
						 <Input name="MinPremium" value={this.state.Value} onChange={this.handleChange}    id="MinPremium"  required />	
					  </Col>
					   
					  <Info_Bullet 
						InfoDesc = {Info_Bullet_Data}
						header = "The minimum allowable premium to be paid."  
					  />	 
					</FormGroup>
					
					<FormGroup row>
					  <Label sm={4} className="text-sm-Left ml-2">
						Product Code
					  </Label>

					  <Col sm={4} >
						<Input name="ProductCode" placeholder="Product Code" id="ProductCode"  required />
					  </Col>
					   
					  <Info_Bullet 
						InfoDesc = {Info_Bullet_Data}
						header = "How long do you need cover for?"  
					  />	 
					</FormGroup>
					
					<ProductGroup/>
					<ProductCategory/>
					<OpenToNB />
			
			  
			 </Form>
			</CardBody>
		  </Card> 


	)}
}


const Form_1 = (props) => {
  const {
	ProductData
  } = props;

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Min Regular Payment" name="Min Regular Payment" ref={register({required: true, max: 2000, min: 0, maxLength: 80})} />
      <input type="text" placeholder="Max Regular Payment" name="Max Regular Payment" ref={register({required: true, max: 2000, min: 0, maxLength: 100})} />
      <input type="number" placeholder="Min Single Top-up" name="Min Single Top-up" ref={register({required: true, min: 1000})} />
      <select name="Bid Offer Spread" ref={register({ required: true })}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <input type="submit" />
    </form>
  );
}

//////////////////////////////////////////////////

const options = [
  {
    label: "Non-Smoker",
    value: "1",
  },
  {
    label: "Smoker",
    value: "2",
  }

];


class ExpandableRowsTable_2ndTable extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		value: '',
		ValuePrem: '3'
		};
		this.handleChange = this.handleChange.bind(this);
	}
	  
	componentDidMount() {

	}
		
	handleChange = ( e) => {
		let index = e.nativeEvent.target.selectedIndex;
		let label = e.nativeEvent.target[index].text;
		let value = e.target.value;
		
		this.setState({ value: value })
	}
	
	handleChange_Prem = (e) => {
		let value = e.target.value;
		this.setState({ ValuePrem: value })
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

				  <Col sm={4} >
					<Input className=" float-left" type="select" name="state" id="state" value={this.state.value} onChange={this.handleChange}  >
						{options.map((option) => (
						<option value={option.value}>{option.label}</option>
						))}
					</Input>
					 
					 <Input name="MinPremium" value={this.state.ValuePrem} onChange={this.handleChange_Prem} id="MinPremium" />	
				  </Col>
				   
				  <Info_Bullet 
					InfoDesc = {Info_Bullet_Data}
					header = "The minimum allowable premium to be paid."  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Product Code
				  </Label>

				  <Col sm={4} >
					<Input name="ProductCode" placeholder="Product Code" id="ProductCode"  required />
				  </Col>
				   
				  <Info_Bullet 
					InfoDesc = {Info_Bullet_Data}
					header = "How long do you need cover for?"  
				  />	 
				</FormGroup>
				
				<ProductGroup/>
				<ProductCategory/>
				<OpenToNB />


			</Form>
			</CardBody>
			</Card> 
			
			
				<Row>
					<Col >
						<FormGroup row>
							<Col sm="1.5 mt-1 ml-2">
							<Label  className="text-sm-Left float-left">
								Rate Type
							</Label>
							</Col>
							<Col sm="3">
							<Input className=" float-left" type="select" name="state" id="state" value={this.state.value} onChange={this.handleChange}  >
								{options.map((option) => (
								<option value={option.value}>{option.label}</option>
								))}
							</Input>
							</Col>
						</FormGroup>
					</Col>
				</Row>
			</div>
		
		);
	};
};



//<EditProduct ProductData={ProductData} />


//////////////////////////////////////

const ModalIcon = (props) => {
  const {
    buttonLabel,
    className,
	ProductData,
	Table_1
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
	
      <FontAwesomeIcon icon={faPencilAlt} className="  fa-4x text-primary mr-2 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>
	 
	  <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Premium Details</ModalHeader>
        <ModalBody>

			<CardBody>
			  <ExpandableRowsTable_2ndTable />
			  
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
