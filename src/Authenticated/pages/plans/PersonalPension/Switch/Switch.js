import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  Collapse,
  Container,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
    Input,
  Label,
  ListGroup,
  ListGroupItem,
  Nav,
  Progress,
  Row,
  Table,
  UncontrolledDropdown
} from "reactstrap";


import {
  AlertCircle,
  Bell,
  BellOff,
  HelpCircle,
  Home,
  MessageCircle,
  PieChart,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  ArrowRightCircle,
  ArrowDownCircle,
  RotateCw,
  X
} from "react-feather";

import { MoreHorizontal } from "react-feather";
import { Form as FinalForm, Field } from 'react-final-form'

import Funds from "../Overview/Funds";
import Select from "react-select";

const FundsData = [
 { Fund: "Emerging Market Equity Income Fund",Name1: "Value", Value1: "£40,000" , Name2: "Units", Value2:"20,000", Name3:"Price", Value3:"£2.00", Name4: "Policy Value Percent", Value4: "40%", Name5: "Future Premiums Percent", Value5: "25%" },
 { Fund: "High Yield Income Fund", Name1: "Value", Value1: "£30,000" , Name2: "Units", Value2:"10,000", Name3:"Price", Value3:"£3.00", Name4: "Policy Value Percent", Value4: "30%", Name5: "Future Premiums Percent", Value5: "25%"},
{ Fund: "Managed Fund 1", Name1: "Value", Value1: "£30,000" , Name2: "Units", Value2:"5,000", Name3:"Price", Value3:"£6.00", Name4: "Policy Value Percent", Value4: "30%", Name5: "Future Premiums Percent", Value5: "50%"}

]

const FundsSwichInData = [
 { Fund: "Emerging Market Equity Income Fund",Name1: "Value", Value1: "£40,000" , Name2: "Units", Value2:"20,000", Name3:"Price", Value3:"£2.00", Name4: "Policy Value Percent", Value4: "40%", Name5: "Future Premiums Percent", Value5: "25%" },
 { Fund: "High Yield Income Fund", Name1: "Value", Value1: "£30,000" , Name2: "Units", Value2:"10,000", Name3:"Price", Value3:"£3.00", Name4: "Policy Value Percent", Value4: "30%", Name5: "Future Premiums Percent", Value5: "25%"},
{ Fund: "Managed Fund 1", Name1: "Value", Value1: "£30,000" , Name2: "Units", Value2:"5,000", Name3:"Price", Value3:"£6.00", Name4: "Policy Value Percent", Value4: "30%", Name5: "Future Premiums Percent", Value5: "50%"}

]


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


const options = [
 { value: "Emerging Market Equity Income Fund", label: "Emerging Market Equity Income Fund" },
 { value: "High Yield Income Fund", label: "High Yield Income Fund" },
 { value: "Managed Fund 1", label: "Managed Fund 1" },
 { value: "Managed Fund 2", label: "Managed Fund 2" },
 { value: "Managed Fund 3", label: "Managed Fund 3" },
 { value: "Managed Fund 4", label: "Managed Fund 4" },
 { value: "Managed Fund 5", label: "Managed Fund 5" },
 { value: "Managed Fund 6", label: "Managed Fund 6" },
 { value: "Managed Fund 7", label: "Managed Fund 17" }, 
]

const Info_SwitchType = [
  {
    type: "Switch_Amount",
    title: "Switch Amount",
    description: "Switch an Amount from one fund to a different fund.",
  },
  {
    type: "Switch_Rebalance",
    title: "Rebalance Funds",
    description: "Rebalance funds to specified funds.",
  }
];




const SwitchType = () => (
 <Card>
 <CardBody>
 <Form>
	<FormGroup row>
		<Label sm={4} className="text-sm-Left">
			What type of fund switch would you like?	
		</Label>  
		<Col sm={5}>
			  <Field name="Switch">
				  {props => (
					<div>
					  <CustomInput
						value={props.input.value}
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="SwitchType_Amount"
						label="Switch an Amount from one fund to a different fund"
						className="mb-2"
						value = "Switch_Amount"
						name = "SwtichType"
					  />
					  <CustomInput
						value={props.input.value}
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="SwitchType_Rebalance"
						label="Rebalance funds to specified funds"
						className="mb-2"
						value = "Rebalance"
						name = "SwtichType"
					  />
					</div>
				  )}
				</Field>
		
		</Col>		  
	</FormGroup>
 </Form>
</CardBody>
</Card>
);


  
class SwitchAmount_Out extends React.Component {
  render() {
    return <Container fluid className="p-0">
    <h3 className="h3 mb-3 ml-2">Fund switch out instrusction</h3>
	<Row>
	{		
		FundsData.map((Fund, index) => {
		return( 
		<Col sm={4}>
		<Card className="card-margin">
			<CardHeader>
			  <CardTitle tag="h5" className="mb-1">
				  {Fund.Fund} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> Fund Value </th>
					<td>{Fund.Value1}</td>
				  </tr>

				  <tr>
					<th>Switch Out Percentage of fund </th>
					<td><Input name="SwitchOutFundPercentage" placeholder="0%" />  </td>
				  </tr>

				  <tr>
					<th>Switch Out Amount </th>
					<td><Input name="SwitchOutFundAmount" placeholder="£0"   /> </td>
					
				  </tr>
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
		  )
		})	
	}
	</Row>
	<h4 className="h4 mb-3 ml-2">Total Amount Switched out £10,000</h4>
	</Container>
}}	

const SwitchAmount_In_FundsSelect = () => (
 <Form className="mb-4 ">
 
	<FormGroup row>
	
	  <Label sm={4} className="text-sm-Left ml-2">
		Select the funds you want to switch into.  
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
 </Form>
);

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


class SwitchAmount_InFund extends React.Component {
  render() {
    return <Container fluid className="p-0">
    
	<Row>
	{		
		FundsData.map((Fund, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <div className="card-actions float-right">
				<X className="align-middle" size={18} />
			  </div>
			  <CardTitle tag="h5" className="mb-1">
				  {Fund.Fund} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th>Switch in amount</th>
					<td><Input name="SwitchInFundAmount" placeholder="£0" />  </td>
				  </tr>

				  <tr>
					<th>New Fund holding amount </th>
					<td>£1,000  </td>
				  </tr>
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
		  )
		})	
	}
	</Row>
	<h4 className="h4 mb-3 ml-2">Total Amount Switched in £1,000</h4>
	<h5 className="h5 mb-3 ml-2">You have £1,000 left to switch in.</h5>
	<Button  color="primary" className="my-2 ml-1 ">
	    Confirm Switch 
    </Button>
	</Container>
}}	




const SwitchAmount = () => (
  <Container fluid className="p-0">
	<Card>
		<CardBody>
			<SwitchAmount_Out/>
		</CardBody>	
	</Card>

	<Card>	
		<CardBody>
			<h3 className="h3 mb-3 ml-2">Fund switch in instrusction</h3>		
			<SwitchAmount_In_FundsSelect/>
			<SwitchAmount_InFund/>
		
		</CardBody>	
	</Card>
	
  </Container>
);


const SwitchRebalance_FundsSelect = () => (
 <Form className="mb-4 ">
 
	<FormGroup row>
	
	  <Label sm={4} className="text-sm-Left ml-2">
		Select the funds you want to switch into.  
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
 </Form>
);



const SwitchRebalance = () => (
 <Container fluid className="p-0">	
<Card>
<CardBody>
	<h3 className="h3 mb-3 ml-2">Fund Rebalance instrusction</h3>
	<SwitchRebalance_FundsSelect / >
	<SwitchRebalance_Funds/>
</CardBody>
</Card>
</Container>

);

class SwitchRebalance_Funds extends React.Component {
  render() {
    return <Container fluid className="p-0">
    
	<Row>
	{		
		FundsData.map((Fund, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardHeader>
			  <div className="card-actions float-right">
				<X className="align-middle" size={18} />
			  </div>
			  <CardTitle tag="h5" className="mb-1">
				  {Fund.Fund} 
			  </CardTitle>
			</CardHeader>
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th>Fund percentage of policy</th>
					<td><Input name="SwitchRelabanceFundPercentage" placeholder="%" />  </td>
				  </tr>

				  <tr>
					<th>New fund holding amount </th>
					<td><Input name="SwitchRelabanceFundAmount" placeholder="£" />    </td>
				  </tr>
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
		  )
		})	
	}
	</Row>
	<h5 className="h5 mb-3 ml-2">You have £1,000 left to allocate.</h5>
	<Button  color="primary" className="my-2 ml-1 ">
	    Confirm Switch 
    </Button>
	</Container>
}}	


const Switch = () => (

<FinalForm onSubmit={onSubmit} >
  {({ handleSubmit, form,  CustomInput, values }) => (
	<form onSubmit={handleSubmit}>

	  <SwitchType/>
	  
	  <Condition when="Switch" is="Switch_Amount" >
		<div>
			<SwitchAmount/>
		</div>
	  </Condition>
	  
	  <Condition when="Switch" is="Rebalance" >
		<div>
			<SwitchRebalance/>
		</div>
	  </Condition>
	  
	
	  
	</form>
  )}
</FinalForm>
)


const SwitchFinal = () => (
  <Container fluid className="p-0">
	<Card>
		<CardBody>
			<Funds/>
		</CardBody>
	
		<CardBody>
			<Switch/>
		</CardBody>
	
	
	
	
	</Card>
	
  </Container>
);	

export default SwitchFinal;
