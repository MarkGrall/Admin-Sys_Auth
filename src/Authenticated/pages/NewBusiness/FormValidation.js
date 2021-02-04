import React from 'react';
import {
  Col,
  CustomInput,
  Form,
  FormGroup,
  Label
} from "reactstrap";

import Select from "react-select";

import { Form as FinalForm,Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

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




const Form1CoverType = () => (
 <Form>
	<FormGroup row>
		<Label sm={4} className="text-sm-Left">
			What type of life insurance do you need?	
		</Label>  
		<Col sm={3}>
			<div className="InsuranceType">
			  
			  <Field name="LifeInsurance">
				  {props => (
					<div>
					  <CustomInput
						name={props.input.name}

						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="LifeAssuaranceCoverType_TA"
						label="Level Term Assuarance"
						className="mb-2"
						value = "TA"
					  />
					  <CustomInput
						name={props.input.name}
		
						onChange={props.input.onChange}
						type="radio"
						component="input"
						id="LifeAssuaranceCoverType_DTA"
						label="Decreasing Term Assuarance"
						className="mb-2"
						value = "TA"
					  />
					  <CustomInput
						name={props.input.name}
				
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
		</Col>		  
	</FormGroup>
 </Form>
);

const Form1CoverTerm = () => (
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
	</FormGroup>
 </Form>
);



const App = () => (

<FinalForm onSubmit={onSubmit} >
  {({ handleSubmit, form,  CustomInput, values }) => (
	<form onSubmit={handleSubmit}>

	  <Form1CoverType/>
	  <Condition when="LifeInsurance" is="TA" >
		<div>
						<Form1CoverTerm/>
		</div>
	  </Condition>
	  
	
	  
	</form>
  )}
</FinalForm>

	
)


export default App;

