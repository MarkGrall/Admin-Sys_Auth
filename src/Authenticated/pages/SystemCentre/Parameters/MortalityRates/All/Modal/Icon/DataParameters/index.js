import React , { useState } from "react";
import { Card,CardBody, Container, Col,FormGroup, Form, Label
 } from "reactstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

	
const MyComponent = (props) => {
  const {
    S_Date,
	min_Date,DateLabel
  } = props;
  
  let isReadOnly = false; 
  let S_Date2 = null;  
  let min_Date2 = null;
  
  if( S_Date ) {
	S_Date2 = new Date(S_Date)
    isReadOnly = true;
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
  const handleChange = date => setDate(date);
  
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
					<MyComponent S_Date={this.props.Date_Var} min_Date={this.props.min_Date} DateLabel={this.props.Date_Label}  />
				  </Col>
				</FormGroup>
			</Form>
	)
}};


const DataParameters = (props) => {
  const {
	Row
  } = props;

//<DateReturn  Date_Label={"Effective Date To"} Date_Var={Row.EffectiveDateTo} />
//<DateReturn  Date_Label={"Run Date To"} Date_Var={Row.RunDateTo} />

  return (
    <div>
		<Container fluid className="p-0">
			<Card className="card-margin"> 
				<CardBody>
					
					<DateReturn  Date_Label={"Effective Date From"} Date_Var={Row.EffectiveDateFrom}  />
					<DateReturn  Date_Label={"Effective Date To"} Date_Var={Row.EffectiveDateTo}  min_Date={Row.EffectiveDateFrom} />
					
					<DateReturn  Date_Label={"Run Date From"} Date_Var={Row.RunDateFrom} />
					<DateReturn  Date_Label={"Run Date To"} Date_Var={Row.RunDateTo} min_Date={Row.RunDateFrom} />
					
				</CardBody>
			</Card>
		</Container>
    </div>
  );
}



export default DataParameters;