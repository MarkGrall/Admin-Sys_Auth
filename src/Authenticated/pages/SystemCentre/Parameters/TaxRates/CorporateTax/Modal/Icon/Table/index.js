import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown,
    Form, FormGroup, Label,
	 ListGroupItem,
  ListGroup
 
  } from "reactstrap";

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
import { MoreHorizontal } from "react-feather";
import { PlusCircle, HelpCircle} from "react-feather";
import { Form as FinalForm, Field } from 'react-final-form'

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport, Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

const B_Label="Personal Pension Levy"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


const Form_TaxRate = () => (
 <Form id="Form_TaxRate">
	<FormGroup row>
	  <Label  className="text-sm-Left">
		Personal Pension Levy Rate
	  </Label>
	  <Col >
		  <AvGroup>
			<AvInput name="PersonalPensionLevy_TaxRate" placeholder="£" id="PersonalPensionLevy_TaxRate_ID"  required />
			<AvFeedback>Enter an amount.</AvFeedback>		
          </AvGroup>
	  </Col>
	</FormGroup>
 </Form>
);

const Form1 = () => (


		<FinalForm onSubmit={onSubmit} >
		  {({ handleSubmit, form,  CustomInput, values }) => (
			<form onSubmit={handleSubmit}>

			  <Form_TaxRate/>
			  
			</form>
		  )}
		</FinalForm>

);


class NameForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	alert('Named1 : ' + event.target.value)
	alert('Named2 : ' + this.state.value)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


class NameForm extends React.Component {
  constructor(props) {
    super(props);
	this.state = {value: ''};
	
	this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = ( event) => {
		this.setState({value: event.target.value});
		//alert('Named1 : ' + event.target.value)
		//alert('Named2 : ' + this.state.value)
		this.props.parentCallback( event.target.value );
  }
  
  render() {
	return (
	  <form >
		<label>
		  Corporate tax rate
		  <input type="text" value={this.state.value} onChange={this.handleChange} />
		</label>
	  </form>
	);
  }
}


class Container_Spec1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

	handleCallback = (childData) =>{
        this.setState({data: childData})
		alert('handle : ' + this.state.data);

    }

    handleSubmit(event) {
    //alert('A' )
	alert('A name was submitted: ' + this.state.data);
    //event.preventDefault();
  }

//"Testing - Container_Spec " + {data}
    render(){
        const {data} = this.state;
        return(
			<Container fluid className="p-0">
				<Card className="card-margin">
					<CardHeader>
					  <div className="card-actions float-right">
						<UncontrolledDropdown>
						  <DropdownToggle tag="a">
							<MoreHorizontal />
						  </DropdownToggle>
						  <DropdownMenu right>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem>Something else here</DropdownItem>
						  </DropdownMenu>
						</UncontrolledDropdown>
					  </div>
					   <CardTitle id="HeaderID" tag="h3" className="mb-1" >
						  {B_Label} - Specification
					  </CardTitle>
					</CardHeader>
					<CardBody>
						<form onSubmit={this.handleSubmit}>
							<NameForm parentCallback = {this.handleCallback}/>	
							<input type="submit" value="Submit" />
						</form>
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	


class Container_2ndTable1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    handleCallback = (childData) =>{
        this.setState({data: childData})
	this.props.parentCallback( childData );
    }
	

	//"Testing - Container_2ndTable " + {this.props.TableNumber_Prop}	
    render(){
		const {data} = this.state;
        return(
			<Container fluid className="p-0">
				<Card className="card-margin">
					<CardHeader>
					  <div className="card-actions float-right">
						<UncontrolledDropdown>
						  <DropdownToggle tag="a">
							<MoreHorizontal />
						  </DropdownToggle>
						  <DropdownMenu right>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem>Something else here</DropdownItem>
						  </DropdownMenu>
						</UncontrolledDropdown>
					  </div>
					   <CardTitle id="HeaderID" tag="h3" className="mb-1" >
						  {B_Label} 
					  </CardTitle>
					</CardHeader>
					<CardBody>	   

					  <form >
						<NameForm parentCallback = {this.handleCallback}/>
						<input type="submit" value="Submit" />
					  </form>

					</CardBody>
				</Card>
			  </Container>
        )
    }
}	

// 

///////////////////////////////


let DefaultSelected = "3";


const tableColumns = [
  {
    dataField: "CurrentTable",
    text: "Current Table" 
  },
  {
    dataField: "TableNumber",
    text: "Table Number"
  },
  {
    dataField: "DateEntered",
    text: "Date Entered"
  },
  {
    dataField: "EffectiveDateFrom",
    text: "Effective Date From"
  },
  {
    dataField: "EffectiveDateTo",
    text: "Effective Date To"
  },
  {
    dataField: "RunDateFrom",
    text: "Run Date From"
  },
  {
    dataField: "RunDateTo",
    text: "Run Date To"
  },
  { dataField: "edit", 
	text: "Edit",
	sort: false,
	formatter: rankFormatter,
	headerAttrs: { width: 50 },
	attrs: { width: 50, class: "EditRow" } 
  }

];

const tableData = [
  {
	CurrentTable: "No",
	TableNumber: "4",
  	EffectiveDateFrom: "01/01/2021",
    EffectiveDateTo: "",
	DateEntered: "01/01/2018",
	RunDateFrom: "01/01/2018",
	RunDateTo: ""
  },
  {
	CurrentTable: "Yes",
	TableNumber: "3",
  	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "01/01/2021",
	DateEntered: "01/01/2018",
	RunDateFrom: "01/01/2018",
	RunDateTo: ""
  },
  {
	CurrentTable: "No",
	TableNumber: "2",
  	EffectiveDateFrom: "01/01/2017",
    EffectiveDateTo: "01/01/2018",
	DateEntered: "01/01/2018",
	RunDateFrom: "01/01/2018",
	RunDateTo: ""
  },
  {
	CurrentTable: "No",
	TableNumber: "1",
  	EffectiveDateFrom: "01/01/2016",
    EffectiveDateTo: "01/01/2018",
	DateEntered: "01/01/2016",
	RunDateFrom: "01/01/2016",
	RunDateTo: "01/01/2018"
  }
]

function rankFormatter(cell, row, rowIndex, formatExtraData) { 
     return ( 
	    <div 
		   style={{ textAlign: "center",
			  cursor: "pointer",
			 lineHeight: "normal" }}>


		
		</div> 
 ); } 

class Table_Spec extends React.Component {
	constructor(props, context) {
    super(props, context);
	//this.state = { selected: [ DefaultSelected ] };
	}
  

	handleOnSelect = ( row, isSelect) => {
		this.props.parentCallback(row.TableNumber );
	}

/*	
	handleOnSelect = ( row, isSelect) => {
		this.setState({TableNumber_Row: row.TableNumber});
		this.props.parentCallback(row.TableNumber );
		if (isSelect) {
		  
		  this.setState(() => ({
			selected: [...this.state.selected, row.TableNumber]
		  }));

		} else {	  
		  this.setState(() => ({
			selected: this.state.selected.filter(x => x !== row.TableNumber)
		  }));
		}
	}
*/


	//"Table_Spec - " {this.state.TableNumber_Row} 
	render() { 
	
	const MyExportCSV = props => {
		const handleClick = () => {
		  props.onExport();
		};
		return (
		  <div>
			<Row>
			<button className="btn btn-secondary mt-0 mb-1" onClick={handleClick}>
			  Export
			</button>
			</Row>
		  </div>
		);
    };
	
	const selectRow = {
      mode: 'radio',
      clickToSelect: true,
	  bgColor: "#cbecee",
      onSelect: this.handleOnSelect
	//  ,selected: this.state.selected
   }
    
	return ( 
      
	  <ToolkitProvider
        keyField="TableNumber"
        data={tableData}
        columns={tableColumns}
      >
        {props => (
	     <div>
			<MyExportCSV {...props.csvProps} />

			<BootstrapTable
				{...props.baseProps}

				bordered={false}
				keyField="TableNumber"
				data={tableData}
				columns={tableColumns}
				sortable={true}
				selectRow={ selectRow }
			/>
          </div>
        )}
      </ToolkitProvider>
  );
  };
};

class Container_Spec extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    handleCallback = (childData) =>{
        this.setState({data: childData})
	this.props.parentCallback( childData );
    }
//"Testing - Container_Spec " + {data}
    render(){
        const {data} = this.state;
        return(
			<Container fluid className="p-0">
				<Card className="card-margin">
					<CardHeader>
					  <div className="card-actions float-right">
						<UncontrolledDropdown>
						  <DropdownToggle tag="a">
							<MoreHorizontal />
						  </DropdownToggle>
						  <DropdownMenu right>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem>Something else here</DropdownItem>
						  </DropdownMenu>
						</UncontrolledDropdown>
					  </div>
					   <CardTitle id="HeaderID" tag="h3" className="mb-1" >
						  {B_Label} - Specification
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  
					  <Table_Spec parentCallback = {this.handleCallback}/>	
					  	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	


class Test_Whole extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: DefaultSelected
		};
	}
	
	handleCallback = (childData) =>{
        this.setState({data: childData})
    }
	//"Testing - Test_Whole " + {data}
	render() {     
		const {data} = this.state;
		return (
			<Container fluid className="p-0">
				
				
				<Container_Spec parentCallback = {this.handleCallback} />

				
			</Container>
		);
	};
};


export default Container_Spec1;
