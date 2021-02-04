import React , { useState } from "react";
import { Card,CardBody, Container, Col, FormGroup, Form, Label
 } from "reactstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

	
const MyComponent = (props) => {
  const {

  } = props;
  
  const [date, setDate] = useState(new Date()) 
  const handleChange = date => setDate(date);
  
  return (
	<DatePicker
      selected={date}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
    />
  );
}




class DateReturn extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: this.props.Exsitingdate
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }

  //<DateExample ExsitingDate={this.props.Exsitingdate} />
  render() {
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					{this.props.Date_Label}
				  </Label>
				  <Col sm={4}>         
					<MyComponent />
				  </Col>
				</FormGroup>
			</Form>
	)
}};


const DataParameters = (props) => {

//  const [modal, setModal] = useState(false);
 // const toggle = () => setModal(!modal);

//<DateReturn  Date_Label={"Effective Date To"} Date_Var={Row.EffectiveDateTo} />
//<DateReturn  Date_Label={"Run Date To"} Date_Var={Row.RunDateTo} />

  return (
    <div>
		<Container fluid className="p-0">
			<Card className="card-margin"> 
				<CardBody>
					
					<DateReturn  Date_Label={"Effective Date From"} />
					<DateReturn  Date_Label={"Effective Date To"}  />
					
					<DateReturn  Date_Label={"Run Date From"}  />
					<DateReturn  Date_Label={"Run Date To"} />
				</CardBody>
			</Card>
		</Container>
    </div>
  );
}



export default DataParameters;