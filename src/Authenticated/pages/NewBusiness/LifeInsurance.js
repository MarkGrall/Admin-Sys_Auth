import React from "react";
import { render } from 'react-dom'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  CustomInput,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row,
  Table
} from "reactstrap";

import { DatePicker  } from 'rsuite';

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox
} from "availity-reactstrap-validation";

import {faQuestionCircle } from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Edit2,Check, Trash,X } from "react-feather";

import Select from "react-select";
import { Form as FinalForm, Field } from 'react-final-form'
import jQuery from "jquery";

import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,

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
  RotateCw
} from "react-feather";

const $ = jQuery;
window.jQuery = jQuery;
require("smartwizard/dist/js/jquery.smartWizard.min.js");

const options = [
  { value: "1", label: "1 Year" },
  { value: "2", label: "2 Years" },
  { value: "3", label: "3 Years" },
  { value: "4", label: "4 Years" },
  { value: "5", label: "5 Years" },
  { value: "6", label: "6 Years" },
  { value: "7", label: "7 Years" },
  { value: "8", label: "8 Years" },
  { value: "9", label: "9 Years" },
  { value: "10", label: "10 Years" },
  { value: "11", label: "11 Years" },
  { value: "12", label: "12 Years" },
  { value: "13", label: "13 Years" },
  { value: "14", label: "14 Years" },
  { value: "15", label: "15 Years" },
  { value: "16", label: "16 Years" },
  { value: "17", label: "17 Years" },
  { value: "18", label: "18 Years" },
  { value: "3", label: "19 Years" },
  { value: "3", label: "20 Years" },
  { value: "3", label: "21 Years" },
  { value: "3", label: "22 Years" },
  { value: "3", label: "23 Years" },
  { value: "3", label: "24 Years" },
  { value: "3", label: "25 Years" },
  { value: "2", label: "26 Years" },
  { value: "3", label: "27 Years" },
  { value: "3", label: "28 Years" },
  { value: "3", label: "29 Years" },
  { value: "3", label: "30 Years" },
  { value: "3", label: "31 Years" },
  { value: "3", label: "32 Years" },
  { value: "3", label: "33 Years" },
  { value: "3", label: "34 Years" },
  { value: "3", label: "35 Years" },
  { value: "3", label: "36 Years" },
  { value: "3", label: "37 Years" },
  { value: "2", label: "38 Years" },
  { value: "3", label: "39 Years" },
  { value: "3", label: "40 Years" },
  { value: "3", label: "41 Years" },
  { value: "3", label: "42 Years" },
  { value: "3", label: "43 Years" },
  { value: "3", label: "44 Years" },
  { value: "3", label: "45 Years" },
  { value: "3", label: "46 Years" },
  { value: "3", label: "47 Years" },
  { value: "3", label: "48 Years" },
  { value: "3", label: "49 Years" },
  { value: "2", label: "50 Years" }
  
];
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

const Info_CoverType = [
  {
    type: "TA",
    title: "Level Term Assuarance",
    description: "This type of policy will pay out a lump sum in the event of death or critical illness(if added to your policy). The benefit amount is fixed for the duration of the policy term.",
  },
  {
    type: "DTA",
    title: "Decreasing Term Assuarance",
    description: "The benefit amount decreases over time. This option is usually chosen to cover a mortgage.",
  },
  {
    type: "WOL",
    title: "Whole of Life",
    description: "This type of policy will pay out a lump sum in the event of death, the duration is for the remainder of the life assured.",


  }
];
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

const Info_CoverTerm = [
  {
    description: "Life insurance policies do not cover you indefinetly. When selecting the length of cover you may want to consider when your mortgage will paid off, or when your dependents will be self-sufficient."
  }
];

const Info_CriticalIllness = [
	{
	description: "Critical illness cover provides a lump sum if you are diagnosed with a defined critical illness such as advanced cancer, severe stroke and heart attack."
	}
];

const Info_CriticalIllnessAmount = [
	{
	description: "Critical illness cover can be more expensive then life insruance cover and therefore the selected amount is usually lower."
	}
];

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

const Form1_CoverType = () => (
 <Form>
	<FormGroup row>
		<Label sm={4} className="text-sm-Left">
			What type of life insurance do you need?	
		</Label>  
		<Col sm={3}>
		<AvRadioGroup name="InsuranceTypeRG" required errorMessage="Select the type of cover required.">
			<div className="InsuranceType">
			  <Field name="LifeInsurance">
				  {props => (
					<div>
					  <AvRadio CustomInput
						name={props.input.name}
						value={props.input.value}
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="LifeAssuaranceCoverType_TA"
						label="Level Term Assuarance"
						className="mb-2"
						value = "TA"
					  />
					  <AvRadio CustomInput
						name={props.input.name}
						value={props.input.value}
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="LifeAssuaranceCoverType_DTA"
						label="Decreasing Term Assuarance"
						className="mb-2"
						value = "TA"
					  />
					  <AvRadio CustomInput
						name={props.input.name}
						value={props.input.value}
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="LifeAssuaranceCoverType_WOL"
						label="Whole of Life"
						className="mb-2"
						value = "WOL"
					  />
					</div>
				  )}
				</Field>
			</div>
		</AvRadioGroup>
		</Col>	
		<Col sm={1}>
			
		<NavbarDropdown
            header="What type of life insurance do you need?"
            icon={HelpCircle}
        >
            {Info_CoverType.map((item, key) => {
              let icon = <ArrowRightCircle size={16} className="text-warning" />;

              if (item.type === "TA") {
                icon = <ArrowRightCircle size={18} className="text-primary" />;
              }

              if (item.type === "DTA") {
                icon = <ArrowDownCircle size={18} className="text-danger" />;
              }

              if (item.type === "WOL") {
                icon = <RotateCw size={18} className="text-success" />;
              }

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
	</FormGroup>
 </Form>
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

const Form1_CoverLevel = () => (
 <Form id="Frm1_CoverLevel">
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left">
		How much life cover would you like?
	  </Label>
	  <Col sm={3}>
		  <AvGroup>
            <AvInput name="CoverLevel" placeholder="£" id="CoverLevel"  required />
			<AvFeedback>Enter an amount.</AvFeedback>
			
          </AvGroup>
		
	  </Col>
	  <Info_Bullet 
		InfoDesc = {Info_CoverLevel}
		header = "How much life cover would you like?"  
	  />	  
	</FormGroup>
 </Form>
);

const Form1_CoverTerm = () => (
 <Form>
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left">
		How long do you want to be covered for?  
	  </Label>
	  <Col sm={3}>         
		<Select
			className="react-select-container"
			classNamePrefix="react-select"
			options={options}
		/>
	  </Col>
	  <Info_Bullet 
		InfoDesc = {Info_CoverTerm}
		header = "How long do you need cover for?"  
	  />	 
	</FormGroup>
 </Form>
);

const Form1_CriticalIllness_Question = () => (
<Form id="Frm1_CriticalIllness_Question">
	<FormGroup row>
	  <Label sm={4} className="text-sm-Left">
		Would you like to include critical illness cover?   
	  </Label>
	  
	  <Col sm={3}>
		<AvRadioGroup name="CriticalIllnessRG" required errorMessage="Select if critical illness cover is required.">
		<div>
			<Field name="CriticalIllness">
				{props => (
				<div>
				  <CustomInput
					name={props.input.name}
					value={props.input.value}
					onChange={props.input.onChange}
					type="radio"
					component="input"
					id="CriticalIllness_Yes"
					label="Yes"
					className="mb-2"
					value = "Yes"
				  />
				  <CustomInput
					name={props.input.name}
					value={props.input.value}
					onChange={props.input.onChange}
					type="radio"
					component="input"
					id="CriticalIllness_No"
					label="No"
					className="mb-2"
					value = "No"
				  />
				</div>
			  )}
			 </Field>
		</div>
		</AvRadioGroup> 
	  </Col>	
	  <Info_Bullet 
		InfoDesc = {Info_CriticalIllness}
		header = "Would you like critical illnes cover?"  
	  />		  
	</FormGroup>
</Form>	
);
const Form1_CriticalIllness_Amount = () => (
<Form  id="Frm1_CriticalIllness_Amount">
	<FormGroup row >
	  <Label sm={4} className="text-sm-Left">
		How much critical illness cover would you like?
	  </Label>
	  <Col sm={3}>
		
		  <AvGroup>
            <AvInput name="CoverLevel_CI" placeholder="£" id="CoverLevel_CI" required />
            <AvFeedback>Enter an amount.</AvFeedback>
          </AvGroup>
		
	  </Col>
	  <Info_Bullet 
		InfoDesc = {Info_CriticalIllnessAmount}
		header = "How much critical illness cover would you like?"  
	  />		  
	</FormGroup>
</Form>

);
const Form1_CriticalIllness = () => (
<Card>
	<CardBody>
		<FinalForm onSubmit={onSubmit} >
		  {({ handleSubmit, form,  CustomInput, values }) => (
			<form onSubmit={handleSubmit}>

			  <Form1_CriticalIllness_Question/>
			  
			  <Condition when="CriticalIllness" is="Yes" >
				<div>
					<Form1_CriticalIllness_Amount/>
				</div>
			  </Condition>
			</form>
		  )}
		</FinalForm>
	</CardBody>
</Card>
);

const Form1 = () => (
<Card>
	<CardBody>
		
		<FinalForm onSubmit={onSubmit} >
		  {({ handleSubmit, form,  CustomInput, values }) => (
			<form onSubmit={handleSubmit}>

			  <Form1_CoverType/>
			  <Form1_CoverLevel/>
			  
			  <Condition when="LifeInsurance" is="TA" >
				<div>
					<Form1_CoverTerm/>
				</div>
			  </Condition>
			  
			</form>
		  )}
		</FinalForm>
		
	</CardBody>
</Card>
);


const Form2_Partner1 = () => (
<Card>
	<CardBody>
		
      <Form>
		<h3 className="h3 mb-3">Your details</h3>
        <FormGroup row>
		  
		  
		  <Label sm={4} className="text-sm-Left">
            Who is the cover for? 	
          </Label>
		  
		  <Col sm={3}>
			<div className="custom-controls-stacked">
			   <Field name="PartnerCover">
				  {props => (
					<div>
					  <CustomInput
						name={props.input.name}
						value={props.input.value}
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="Partner1_CoverTypeSingle"
						label="Just Myself"
						className="mb-2"
						value = "Just Myself"
					  />
					  <CustomInput
						name={props.input.name}
						value={props.input.value}
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="Partner1_CoverTypeJoint"
						label="Myself and my partner"
						className="mb-2"
						value = "Partner 1 - Myself and my partner"
					  />
					</div>
				  )}
				</Field>
			</div>
		  </Col>	
        </FormGroup>

        <FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Your full name:
          </Label>
          <Col sm={6}>
		  <Row form>
			  <Col md={3}>
				<FormGroup>
				  <Input type="FirstName" name="FirstName" placeholder="First Name" />
				</FormGroup>
			  </Col>
			  <Col md={3}>
				<FormGroup>
				  <Input type="Surname" name="Surname" placeholder="Surname" />
				</FormGroup>
			  </Col>
			</Row>
		  </Col>
        </FormGroup>
        
		<FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Your Gender:   
          </Label>
		  
		  <Col sm={3}>
            <div>
              <CustomInput
                type="radio"
                id="GenderRadio1"
                name="GenderRadio"
                label="Male"
                className="mb-2"
                defaultChecked
              />
              <CustomInput
                type="radio"
                id="GenderRadio2"
                name="GenderRadio"
                label="Female"
                className="mb-2"
              />
            </div>
          </Col>
		  
        </FormGroup>
		
        <FormGroup row>
		  <Label sm={4} className="text-sm-Left">
            Your date of birth:  
          </Label>

		  <Col sm={6}>
		  <Row form>
			  <Col md={2}>
				<FormGroup>
				  <Input type="dd" min="1" max="31" name="DD" placeholder="DD" />
				</FormGroup>
			  </Col>
			  <Col md={2}>
				<FormGroup>
				  <Input type="mm" min="1" max="12" name="MM" placeholder="MM" />
				</FormGroup>
			  </Col>
			  <Col md={2}>
				<FormGroup>
				  <Input type="yyyy" min="1" max="2020" name="YYYY" placeholder="YYYY" />
				</FormGroup>
			  </Col>
			</Row>
		  </Col>
		</FormGroup>

		<FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Do you smoke:   
          </Label>
		  
		  <Col sm={3}>
            <div className="custom-controls-stacked">
              <CustomInput
                type="radio"
                id="SmokerRadio1"
                name="SmokerRadio"
                label="Yes"
                className="mb-2"
                defaultChecked
              />
              <CustomInput
                type="radio"
                id="SmokerRadio2"
                name="SmokerRadio"
                label="No"
                className="mb-2"
              />
            </div>
          </Col>
		  
        </FormGroup>

      </Form>
	</CardBody>
</Card>  

);

const Form2_Partner2 = () => (
<Card> 
	<CardBody>
      <Form>
	  <h3 className="h3 mb-3">Your partner's details</h3>	
        <FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Your partner's full name:
          </Label>
          <Col sm={6}>
		  <Row form>
			  <Col md={3}>
				<FormGroup>
				  <Input type="FirstName" name="FirstName" placeholder="First Name" />
				</FormGroup>
			  </Col>
			  <Col md={3}>
				<FormGroup>
				  <Input type="Surname" name="Surname" placeholder="Surname" />
				</FormGroup>
			  </Col>
			</Row>
		  </Col>
        </FormGroup>
        
		<FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Your partner's Gender:   
          </Label>
		  
		  <Col sm={3}>
            <div className="custom-controls-stacked">
              <CustomInput
                type="radio"
                id="Partner_GenderRadio1"
                name="Partner_GenderRadio"
                label="Male"
                className="mb-2"
                defaultChecked
              />
              <CustomInput
                type="radio"
                id="Partner_GenderRadio2"
                name="Partner_GenderRadio"
                label="Female"
                className="mb-2"
              />
            </div>
          </Col>
		  
        </FormGroup>
		
        <FormGroup row>
		  <Label sm={4} className="text-sm-Left">
            Your partners date of birth:  
          </Label>

		  <Col sm={6}>
		  <Row form>
			  <Col md={2}>
				<FormGroup>
				  <Input type="DD" name="DD" placeholder="DD" />
				</FormGroup>
			  </Col>
			  <Col md={2}>
				<FormGroup>
				  <Input type="MM" name="MM" placeholder="MM" />
				</FormGroup>
			  </Col>
			  <Col md={2}>
				<FormGroup>
				  <Input type="YYYY" name="YYYY" placeholder="YYYY" />
				</FormGroup>
			  </Col>
			</Row>
		  </Col>
		</FormGroup>

		<FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Does your partner smoke:   
          </Label>
		  
		  <Col sm={3}>
            <div className="custom-controls-stacked">
              <CustomInput
                type="radio"
                id="Partner_SmokerRadio1"
                name="Partner_SmokerRadio"
                label="Yes"
                className="mb-2"
                defaultChecked
              />
              <CustomInput
                type="radio"
                id="Partner_SmokerRadio2"
                name="Partner_SmokerRadio"
                label="No"
                className="mb-2"
              />
            </div>
          </Col>
		  
        </FormGroup>

      </Form>
	</CardBody>
</Card> 	  

);


const Form2 = () => (


		<FinalForm onSubmit={onSubmit} >
		  {({ handleSubmit, form,  CustomInput, values }) => (
			<form onSubmit={handleSubmit}>
			  <Form2_Partner1/>	
			  
			  <Condition when="PartnerCover" is="Partner 1 - Myself and my partner" >
				<div>
					<Form2_Partner2/>
				</div>
			  </Condition>
			</form>
		  )}
		</FinalForm>
		
		
	

);

const Form3_InitialQoute = () => (
  <Card>
  <CardBody>
    <CardHeader>
      <CardTitle tag="h5">Life Insurance Quote</CardTitle>
    </CardHeader>
    <Table striped>
      <thead>
        <tr>
          <th style={{ width: "15%" }}>Qoute Date</th>
		  <th style={{ width: "20%" }}>Qoute Number</th>
          <th style={{ width: "13.5%" }}>Monthly Premium</th>
          <th style={{ width: "13.5%" }}>Life Cover</th>
          <th style={{ width: "13.5%" }}>Critical Illness Cover</th>
		  <th style={{ width: "13.5%" }}>Policy Term</th>
		  <th style={{ width: "5.5%" }}>Edit</th>
		  <th style={{ width: "5.5%" }}>Proceed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
		  <td>05/01/2020 01:21</td>
		  <td>ACT-Q-TA1-1234567</td>
          <td>€8.64</td>
          <td>€100,000</td>
          <td className="table-action">
            <X className="align-middle mr-1" size={18} />
          </td>
		  <td>10 Years</td>
		  <td className="table-action">
            <Edit2 className="align-middle mr-1" size={18} />
          </td>
		  <td className="table-action">
            <Check className="align-middle mr-1" size={18} />
          </td>
        </tr>
      </tbody>
    </Table>
	</CardBody>
  </Card>
);

const Form3_PreviousQoute = () => (
  <Card>
  <CardBody>
    <CardHeader>
      <CardTitle tag="h5">Saved Life Insurance Quote</CardTitle>
    </CardHeader>
    <Table striped>
      <thead>
        <tr>
          <th style={{ width: "15%" }}>Qoute Date</th>
		  <th style={{ width: "20%" }}>Qoute Number</th>
          <th style={{ width: "13.5%" }}>Monthly Premium</th>
          <th style={{ width: "13.5%" }}>Life Cover</th>
          <th style={{ width: "13.5%" }}>Critical Illness Cover</th>
		  <th style={{ width: "13.5%" }}>Policy Term</th>
		  <th style={{ width: "5.5%" }}>Edit / Delete</th>
		  <th style={{ width: "5.5%" }}>Proceed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
		  <td>04/01/2020 20:21</td>	
          <td>ACT-Q-TA1-1234567</td>
          <td>€8.64</td>
          <td>€100,000</td>
          <td className="table-action">
            <X className="align-middle mr-1" size={18} />
          </td>
		  <td>10 Years</td>
		  <td className="table-action">
            <Edit2 className="align-middle mr-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
		  <td className="table-action">
            <Check className="align-middle mr-1" size={18} />
          </td>
        </tr>
      </tbody>
    </Table>
	</CardBody>
  </Card>
);


const Form3 = () => (
<Card> 
	<CardBody>
		<Form3_InitialQoute/>
		<Form3_PreviousQoute/>
	</CardBody>
</Card> 	  

);


const Form5 = () => (
  <Card>
    <CardBody>
      <Form>
        <FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Your email address:	
          </Label>
		  <Col sm={3}>
			<Input type="Email" name="Email" placeholder="" />
          </Col>
        </FormGroup>
        
		<FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Your phone number:	
          </Label>
		  <Col sm={3}>
			<Input type="PhoneNumber" name="PhoneNumber" placeholder="" />
          </Col>
        </FormGroup>
		
        <FormGroup row>
          <Label sm={4} className="text-sm-Left">
            Your postcode:	
          </Label>
		  <Col sm={3}>
			<Input type="PostCode" name="PostCode" placeholder="" />
          </Col>
        </FormGroup>
      </Form>
	  
    </CardBody>
  </Card>
);



function ValidateForm(stepNumber)
{
	switch (stepNumber){
	case 0:
		var Ret =ValidateForm1();
		break;
	case 1:
		var Ret =ValidateForm2();
		break;
	}
	return Ret
}

function ValidateForm2()
{
	
//Date of Birth

	
}	


function ValidateForm1()
{
	var x,y;
	var RetOverall = false;

//Cover Level Amount	
	x=document.getElementById("Frm1_CoverLevel").elements["CoverLevel"]
	var Ret1 = ValidateNumbers(x)

//CI Amount	
	if(document.getElementById("Frm1_CriticalIllness_Question").elements["CriticalIllness"].value=="Yes"){
		y=document.getElementById("Frm1_CriticalIllness_Amount").elements["CoverLevel_CI"]
		var Ret2 = ValidateNumbers(y)
	}else{
		Ret2 = true
	}

//Retrun false if any one validation is false	
	if ( (Ret1 == false) || (Ret2 == false) )
	{
		//button("btnSubmit").click
		
		alert("Fix errors in the form.")
		RetOverall = false
	}else{
		RetOverall = true
	}

	return RetOverall
}

//Validate numbers function
function ValidateNumbers(x) {
	if (isNaN(x.value)  || (x.value == "") )
	{	
		x.value = ""	
		return false;
	}else{	
		return true;
	}
}

class WizardVariant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    }
		
  
  componentDidMount() {
  
	$(this.refs.smartwizard)
      .smartWizard({
        theme: this.props.variant, // default OR arrows
        showStepURLhash: false,
        toolbarSettings: {
          toolbarExtraButtons: [
            $(
              '<button class="btn btn-submit btn-primary" type="button">Finish</button>'
            )
          ]
        }
      })
	  
      .on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        if (stepDirection === "forward") {
          // Validation between steps

			var Ret =ValidateForm(stepNumber);
			return Ret

        }
      });

    $(this.refs.smartwizard)
      .find(".btn-submit")
      .on("click", function() {
        alert("Great! The form is ready to submit.");
        // Final validation
		
        return false;
      });
 
  }
  
  render = () => {

    const { color } = this.props;	
	
//Defines the titles for the wizard
    return (
      <div ref="smartwizard" className={`wizard wizard-${color} mb-4`}>
        <ul>
          <li>
            <a href={`#step-1`}>
              Cover Details
              <br />
              <small>Level Of Cover Required</small>
            </a>
          </li>
          
		  <li>
			<a href={`#step-2`}>
              Your Details
              <br />
              <small>Life Covered details</small>
            </a>
          </li>
          <li>
            <a href={`#step-3`}>
              Qoute
              <br />
              <small>Life Insurance Qoute</small>
            </a>
          </li>
        </ul>

        <div>
          <div id={`step-1`}>
			
			<AvForm >	         
			  <Form1/>
			  <Form1_CriticalIllness/>
			  <Button name="btnSubmit">Submit</Button>
			</AvForm>
			
		  </div>
		  
          <div id={`step-2`}>
			<Form2 />	
		  </div>
          <div id={`step-3`}>
		  <Form3 />	
		  </div>
        </div>
      </div>
    );
  };
}

//Title of the form
const LifeInsurance = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Life Insurance qoute</h1>
    <Row>
      <Col lg="12">
        <WizardVariant variant="arrows" color="primary" />
      </Col>
    </Row>
  </Container>
);

export default LifeInsurance;
