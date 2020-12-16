import React, {useReducer} from 'react'
import Chart from "react-apexcharts";
import { connect } from "react-redux";

import { Card, CardBody, CardHeader,Container, CardTitle, Table, Row, Col, Button,Form, FormGroup,Label,FormText, Input,Modal,
  ModalBody,
  ModalFooter,
  ModalHeader } from "reactstrap";
import {
  Collapse,
  CustomInput,
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,

} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Target,RefreshCw, ArrowUpCircle,BarChart2 } from "react-feather";
import {
  HelpCircle,
  PlusCircle
} from "react-feather";
import { Form as FinalForm, Field } from 'react-final-form'
import Select from "react-select";



import RDPCustomWeek from "./CalendarDateSelecter";

var DatePicker = require("reactstrap-date-picker");

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
const NavbarDropdown = ({
  children,
  showBadge,
  header,
  icon: Icon
}) => (
  <UncontrolledDropdown>
		<DropdownToggle nav className="nav-icon dropdown-toggle">
		  <div className="position-relative">
			<Icon className="mb-2" size={16} />
		  </div>
		</DropdownToggle> 
		<DropdownMenu className="dropdown-menu-lg py-0">
		  <div className="dropdown-menu-header position-relative">
		   {header}
		  </div>
		  <ListGroup>{children}</ListGroup>
		</DropdownMenu>
	</UncontrolledDropdown>
);
const NavbarDropdownItem = ({ icon, title, description,  spacing }) => (
  <ListGroupItem>
    <Row noGutters className="align-items-Right">
      <Col xs={2}>{icon}</Col>
      <Col xs={10} className={spacing ? "pl-2" : null}>
        <div className="text-dark">{title}</div>
        <div className="text-muted small mt-1">{description}</div>
      </Col>
    </Row>
  </ListGroupItem>
);

const Info_Bullet = ( {InfoDesc, header}) => (
<Col sm={1}>
	<NavbarDropdown
		header={header}
		icon={HelpCircle}
	>
	{InfoDesc.map((item, key) => {
	  let icon = <PlusCircle className="text-primary" />;

	  return (
		<NavbarDropdownItem
		  icon={icon}
		  title={item.title}
		  description={item.description}
		/>
	  );
	})}
  </NavbarDropdown>
</Col>

);
const Info_CoverLevel = [
  {
    description: "When choosing how much cover you need you may want to consider the amount of your outstanding debts and how much you would like to provide to your loved ones. This may include:"
  },
  {
    type: "Bullet",
    description: "Your outstanding mortgage balance.",
  },
  {
    type: "Bullet",
    description: "Your other financial commitments.",
  },
  {
    type: "Bullet",
    description: "The education costs for your children.",
  },
  {
    type: "Bullet",
    description: "How much you want to leave your loved ones to help maintain their lifestyle.",
  }
];

const Info_SwitchInFund = [
  {
    description: "When choosing how much cover you need you may want to consider the amount of your outstanding debts and how much you would like to provide to your loved ones. This may include:"
  },
  {
    type: "Bullet",
    description: "Your outstanding mortgage balance.",
  },
  {
    type: "Bullet",
    description: "Your other financial commitments.",
  },
  {
    type: "Bullet",
    description: "The education costs for your children.",
  },
  {
    type: "Bullet",
    description: "How much you want to leave your loved ones to help maintain their lifestyle.",
  }
];


const options = [
 { value: "Monthly", label: "Monthly" },
 { value: "Quarterly", label: "Quarterly" }, 
 { value: "Half-Yearly", label: "Half-Yearly" },
 { value: "Annually", label: "Annually" }
]

const optionsDate = [
{ value: "1", label: "1" },
{ value: "2", label: "2" },
{ value: "3", label: "3" },
{ value: "4", label: "4" },
{ value: "5", label: "5" },
{ value: "6", label: "6" },
{ value: "7", label: "7" },
{ value: "8", label: "8" },
{ value: "9", label: "9" },
{ value: "10", label: "10" },
{ value: "11", label: "11" },
{ value: "12", label: "12" },
{ value: "13", label: "13" },
{ value: "14", label: "14" },
{ value: "15", label: "15" },
{ value: "16", label: "16" },
{ value: "17", label: "17" },
{ value: "18", label: "18" },
{ value: "19", label: "19" },
{ value: "20", label: "20" },
{ value: "21", label: "21" },
{ value: "22", label: "22" },
{ value: "23", label: "23" },
{ value: "24", label: "24" },
{ value: "25", label: "25" },
{ value: "26", label: "26" },
{ value: "27", label: "27" },
{ value: "28", label: "28" }
]

const optionsPayment = [
{ value: "SEPA", label: "SEPA Direct Debit" },
{ value: "Paypal", label: "Paypal" }
]

const RegularPremiumData = [
 { NextPremiumDate: "20/01/2020", Frequency: "Monthly", Amount: "£1,000",PaymentAcc: "Lloyds TSB", Indexation: "Yes", NextIndexationDate: "20/06/2020", IndexationRate: "4%", PremiumHoliday: "No" }
]

const RegularPremiumFunds = [
  {
    Fund: "Emerging Market Equity Income Fund",
	Amount: "400",
    PercentageOfPremium: "40%"
  },
  {
    Fund: "High Yield Income Fund",
	Amount: "600",
    PercentageOfPremium: "60%"
  }
 ]

const SinglePremiumFunds = [
  {
    Fund: "Property Fund",
	Amount: "2000",
    PercentageOfPremium: "30%"
  },
  {
    Fund: "Equity Fund",
	Amount: "3500",
    PercentageOfPremium: "70%"
  }
 ]

const SinglePremiumData = [
 { NextPremiumDate: "20/02/2020", Amount: "£5,000",Payment: "Paypal" }
]



class RegularPremiumInstruction extends React.Component {
    constructor(props) {
    super(props);

    this.state = {};
  }

  toggle = index => {
    this.setState(state => ({
      [index]: !state[index]
    }));
  };

  
  render() {
    return <Container fluid className="p-0 mb-3">
    <Row>
	{		
		RegularPremiumData.map((RP, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <CardTitle tag="h5" className="mb-1">
				  Regular Payment instrustion
			  </CardTitle>
			  <Button  
				color="primary" 
				className="my-2 "
				onClick={() => this.toggle(index)}
			  >
					Modify Payment Instrustion
			  </Button>
			  
			  
				  <Modal
					isOpen={this.state[index]}
					toggle={() => this.toggle(index)}
					size="lg"
				  >
					<ModalHeader className="ml-3" toggle={() => this.toggle(index)}>
					    Update Payment Details
					</ModalHeader>
					<ModalBody >
						 
						 <Change_RP_Modal/>
						 
					</ModalBody>
					<ModalFooter>
					
						<Button color="primary" onClick={() => this.toggle(index)}>
							Save
						</Button>{" "}
						
						  <Button color="danger" onClick={() => this.toggle(index)}>
							Close
						  </Button>{" "}
						
					</ModalFooter>
				  </Modal>

			  <Button  color="warning" className="my-2 ml-1 ">
					Stop Regular Payment
			  </Button>
			  <Button  color="danger" className="my-2 ml-1 ">
					Cancel Regular Payment
			  </Button>
			</CardHeader>
			
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> Next Premium Date </th>
					<td>{RP.NextPremiumDate}</td>
				  </tr>
				  
				  <tr>
					<th> Premium Holiday</th>
					<td>{RP.PremiumHoliday}</td>
				  </tr>
				  				  
				  <tr>
					<th>Frequency</th>
					<td>{RP.Frequency}</td>
				  </tr>
				  <tr>
					<th>Amount</th>
					<td>{RP.Amount}</td>
				  </tr>
				  <tr>
					<th>Payment Account</th>
					<td>{RP.PaymentAcc}</td>
				  </tr>
				  
				  <tr>
					<th>Indexation</th>
					<td>{RP.Indexation}</td>
				  </tr>
				  <tr>
					<th>Next Indexation Date</th>
					<td>{RP.NextIndexationDate}</td>
				  </tr>
				  <tr>
					<th>Indexation Rate</th>
					<td>{RP.IndexationRate}</td>
				  </tr>
				</tbody>
			</Table>			
		  </Card>
		  </Col>
		  )
		})	
	}
	</Row>
	</Container>
}}	

const FundsColumns = [
  {
    dataField: "Fund",
    text: "Fund Name",
    sort: true
  },
   {
    dataField: "Amount",
    text: "Amount",
    sort: true
  },
  {
    dataField: "PercentageOfPremium",
    text: "Percentage Of Premium",
    sort: true
  }  
]

const RPFundsTable = () => {
  
  const selectRow = {
    mode: "checkbox",
	clickToSelect: true,
	hideSelectColumn: true,
	 onSelect: (row, isSelect, rowIndex, e) => {
  }
  };
  return (
    <Card>
	  <CardHeader>
	    <CardTitle tag="h5" className="mb-1">
		  Regular Payment Funds
	    </CardTitle>
	    <Button  color="primary" className="my-2 ml-1 ">
			Modify Fund Selection
	    </Button>
	  </CardHeader>
	
      <ToolkitProvider
        keyField="ClientID"
        data={RegularPremiumFunds}
        columns={FundsColumns} 
      >
        {props => (
            
              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                bordered={false}
				keyField="ClientID"
				data={RegularPremiumFunds}
				columns={FundsColumns}
				selectRow={selectRow}                
              />
            
        )}
      </ToolkitProvider>
    </Card>
  );

};


const SPFundsTable = () => {
  
  const selectRow = {
    mode: "checkbox",
	clickToSelect: true,
	hideSelectColumn: true,
	 onSelect: (row, isSelect, rowIndex, e) => {
  }
  };
  return (
    <Card>
	  <CardHeader>
	    <CardTitle tag="h5" className="mb-1">
		  Single Payment Funds
	    </CardTitle>
	    <Button  color="primary" className="my-2 ml-1 ">
			Modify Fund Selection
	    </Button>
	  </CardHeader>
	
      <ToolkitProvider
        keyField="ClientID"
        data={RegularPremiumFunds}
        columns={FundsColumns} 
      >
        {props => (
            
              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                bordered={false}
				keyField="ClientID"
				data={SinglePremiumFunds}
				columns={FundsColumns}
				selectRow={selectRow}                
              />
            
        )}
      </ToolkitProvider>
    </Card>
  );

};


class SinglePremiumInstruction extends React.Component {
  render() {
    return <Container fluid className="p-0 mb-3">
    <Row>
	{		
		SinglePremiumData.map((SP, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <CardTitle tag="h5" className="mb-1">
				  Single Payment Instrustion (Top-up)
			  </CardTitle>
			  <Button  color="primary" className="my-2 ml-1 ">
					Modify Top up Instrustion
			  </Button>
			  <Button  color="danger" className="my-2 ml-1 ">
					Cancel Top up
			  </Button>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> Next Payment Date </th>
					<td>{SP.NextPremiumDate}</td>
				  </tr>
				  <tr>
					<th>Amount</th>
					<td>{SP.Amount}</td>
				  </tr>
				  <tr>
					<th>Payment</th>
					<td>{SP.Payment}</td>
				  </tr>
				  
				</tbody>
			</Table>			
			  
			</CardBody>
		  </Card>
		  </Col>
		  )
		})	
	}
	</Row>
	</Container>
}}	


const RegPremInstruction = () => (
<Container fluid className="p-0">
	<Card>
		<CardBody>
		<Row className="mb-2" >
			
			<Col  md="7">
				<RegularPremiumInstruction />
			</Col>
			<Col  md="5">	
				<RPFundsTable/>
			</Col>
			
		</Row>
		</CardBody>
	</Card>	
  </Container>
);


const PaymentDetails = () => (
<Card>
    <CardHeader>
	  <CardTitle tag="h5" className="mb-1">
		  Payment Details
	  </CardTitle>
	</CardHeader>
<CardBody>
 <Form className="mb-4 "> 
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left ml-2">
		Payment amount 
	  </Label>

	  <Col sm={4} >
		<Input name="Amount" placeholder="Payment Amount" id="PaymentAmount"  required />
	  </Col>
	   
	  <Info_Bullet 
		InfoDesc = {Info_SwitchInFund}
		header = "How long do you need cover for?"  
	  />	 
	</FormGroup>
	
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left ml-2">
		Payment frequency 
	  </Label>
	  <Col sm={4}>         
		<Select
			className="react-select-container"
			classNamePrefix="react-select"
			options={options}
		/>
	  </Col>
	  <Info_Bullet 
		InfoDesc = {Info_SwitchInFund}
		header = "How long do you need cover for?"  
	  />	 
	</FormGroup>
	
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left ml-2">
		Payment collection date 
	  </Label>
	  <Col sm={4}>         
		<Select
			className="react-select-container"
			classNamePrefix="react-select"
			options={optionsDate}
		/>
	  </Col>
	  <Info_Bullet 
		InfoDesc = {Info_SwitchInFund}
		header = "How long do you need cover for?"  
	  />	 
	</FormGroup>
		
 </Form>
</CardBody>
</Card>
);

const PaymentHoliday = () => (

 <Form className="mb-4 "> 
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left ml-2">
		Payment holiday 
	  </Label>
	  <Col sm={4}>         
		<Field name="PaymentHoliday_Field">
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
		InfoDesc = {Info_SwitchInFund}
		header = "How long do you need cover for?"  
	  />	 
	</FormGroup>
 </Form>
);

class PaymentHoliday_Date extends React.Component {
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
					Payment holiday start date
				  </Label>

				  <Col xs="12" md="6" lg="4" >
						<RDPCustomWeek/>
				  </Col>
				   
				  <Info_Bullet 
					InfoDesc = {Info_SwitchInFund}
					header = "How long do you need cover for?"  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Payment holiday end date 
				  </Label>

				  <Col xs="12" md="6" lg="4" >
					<RDPCustomWeek/>
				  </Col>
				   
				  <Info_Bullet 
					InfoDesc = {Info_SwitchInFund}
					header = "How long do you need cover for?"  
				  />	 
				</FormGroup>
			</Form>
)
}};


const PaymentIndexation = () => (
<Card>
    <CardHeader>
	  <CardTitle tag="h5" className="mb-1">
		  Payment Indexation
	  </CardTitle>
	</CardHeader>
<CardBody>
 <Form className="mb-4 "> 
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left ml-2">
		Indexation 
	  </Label>
	  <Col sm={4}>         
		<Field name="PaymentTypeIndexationField">
		  {props => (
				<div>
					<CustomInput
						value={props.input.value}
						onChange={props.input.onChange}
						type="select"
						component="input"
						id="PaymentType_Indexation"
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
		InfoDesc = {Info_SwitchInFund}
		header = "How long do you need cover for?"  
	  />	 
	</FormGroup>
 </Form>
</CardBody>
</Card> 
);	

const PaymentType = () => (
<Card>
    <CardHeader>
	  <CardTitle tag="h5" className="mb-1">
		  Payment method
	  </CardTitle>
	</CardHeader>
<CardBody>
 <Form className="mb-4 "> 
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left ml-2">
		Payment method 
	  </Label>
	  <Col sm={4}>         
		<Field name="PaymentTypeField">
		  {props => (
				<div>
					<CustomInput
						value={props.input.value}
						onChange={props.input.onChange}
						type="select"
						component="input"
						id="PaymentType_ID"
						className="mb-2"
						className="react-select-container"
						classNamePrefix="react-select"

					>
						<option value="">Select...</option>
						<option>SEPA</option>
						<option>Paypal</option>
					</CustomInput>
				</div>
		   )}
		</Field>
	  </Col>
	  <Info_Bullet 
		InfoDesc = {Info_SwitchInFund}
		header = "How long do you need cover for?"  
	  />	 
	</FormGroup>

 </Form>
</CardBody>
</Card>
);



const PaymentMethod = () => (
<FinalForm onSubmit={onSubmit} >
  {({ handleSubmit, form,  CustomInput, values }) => (
	<form onSubmit={handleSubmit}>
	  
      <PaymentDetails/>
	  
	  <Card>
		<CardHeader>
		  <CardTitle tag="h5" className="mb-1">
			  Payment Holiday
		  </CardTitle>
		</CardHeader>
		<CardBody>
		  <PaymentHoliday/>
			  <Condition when="PaymentHoliday_Field" is="Yes" >
				<div>
					<PaymentHoliday_Date/>
				</div>
			  </Condition>	
		</CardBody>
	  </Card> 
	  
	  <PaymentIndexation/>
	  
	  <PaymentType/>
		  <Condition when="PaymentTypeField" is="SEPA" >
			<div>
				<SEPA_Payment/>
			</div>
		  </Condition>
		  
		  <Condition when="PaymentTypeField" is="Paypal" >
			<div>
				<Paypal_Payment/>
			</div>
		  </Condition>

	</form>
  )}
</FinalForm>
)


const SEPA_Payment = () => (
<Card>
	<CardHeader>
	  <CardTitle tag="h5" className="mb-1">
		  SEPA Details
	  </CardTitle>
	</CardHeader>
<CardBody>
 <Form id="ConfirmPassword">
	<FormGroup md="5" row>
	  <Label sm={2} className="text-sm-Left">
		Account Holder
	  </Label>
	  <Col sm={3} >
		<Input name="AccountHolder" placeholder="Account Holder" id="AccountHolder"  required />
	  </Col>
	   <Col sm={1} />
	
	  <Label sm={2} className="text-sm-right">
		BIC
	  </Label>
	  <Col sm={3}>
		<Input name="BIC" placeholder="BIC" id="BIC"  required />
	  </Col>
	</FormGroup>
	
	<FormGroup md="5" row>
	  <Label sm={2} className="text-sm-Left">
		Address Line 1
	  </Label>
	  <Col sm={3} >
		<Input name="AccountHolder" placeholder="Address Line 1" id="AddressLine1"  required />
	  </Col>
	   <Col sm={1} />
	
	  <Label sm={2} className="text-sm-right">
		IBAN
	  </Label>
	  <Col sm={3}>
		<Input name="IBAN" placeholder="IBAN" id="IBAN"  required />
	  </Col>
	</FormGroup>
	
	<FormGroup md="5" row>
	  <Label sm={2} className="text-sm-Left">
		Address Line 2
	  </Label>
	  <Col sm={3} >
		<Input  placeholder="Address Line 2" id="AddressLine2"  required />
	  </Col>
	</FormGroup>
	
	<FormGroup md="5" row>
	  <Label sm={2} className="text-sm-Left">
		Address Line 3
	  </Label>
	  <Col sm={3} >
		<Input  placeholder="Address Line3" id="AddressLine3"  required />
	  </Col>
	</FormGroup>
	
 </Form>
 </CardBody>
</Card>
);


const Paypal_Payment = () => (
<Card>
    <CardHeader>
	  <CardTitle tag="h5" className="mb-1">
		  Paypal Details
	  </CardTitle>
	</CardHeader>
<CardBody>
</CardBody>
</Card>
);



  

const Change_RP_Modal = () => (
<Container fluid className="p-0">
	<PaymentMethod/>
</Container>
);


const SinglePremInstruction = () => (
<Container fluid className="p-0">
	<Card>
		<CardBody>
		<Row className="mb-2" >
			<Col  md="7">
				<SinglePremiumInstruction />
			</Col>
			<Col  md="5">	
				<SPFundsTable/>
			</Col>
		</Row>
		</CardBody>
	</Card>	
  </Container>
);


const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}



const PremiumInstruction = () => (
  <Container fluid className="p-0">
	<RegPremInstruction/>
	<SinglePremInstruction/>
  </Container>
);



export default PremiumInstruction;
