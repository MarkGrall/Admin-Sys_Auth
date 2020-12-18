import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown, Form, FormGroup,Input,Label
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";



import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

import {  MinusCircle, PlusCircle } from "react-feather";

import Info_Bullet from "../../../../../../../../components/pages/InfoBullet/index - Short";
import update from 'react-addons-update';

let ProductData_Updated


const options_Charge = [
  {
    label: "Amount",
    value: "Amount",
  },
  {
    label: "Percentage",
    value: "Percentage",
  }

];

const options_Frequency = [
  {
    label: "Monthly",
    value: "Monthly",
  },
  {
    label: "Quarterly",
    value: "Quarterly",
  },
  {
    label: "Annual",
    value: "Annual",
  }

];



const B_Label="Early Encashment Charge"
let nameFilter;



const tableColumns = [
	  {
		dataField: "Year",
		text: "Year"	
	  },
	  {
		dataField: "EarlyEncashmentCharge",
		text: "Early Encashment Charge",
	  },
	   {
			dataField: 'TableNumber',
			text: '',
			csvExport: false,
			headerStyle: (column, colIndex) => {
				return { width: 0 ,height: 0, 'visibility': 'hidden'}
			},
			filter: textFilter({
				getFilter: (filter) => {
				  // nameFilter was assigned once the component has been mounted.
				  nameFilter = filter; 
				},
				style: {'visibility': 'hidden','height':'0px'}
			}),
			style: {'visibility': 'hidden'}	
	  },
	  {
		dataField: "ID",
		text: "ID",
		csvExport: false,
		hidden: true
	   }
	];

const TableData = [
			  {
				TableNumber:4,
				ID: "1",
				Year:1,
				EarlyEncashmentCharge: "5%"  
			  },
			  {
				TableNumber:4,
				ID: "2",
				Year:2,
				EarlyEncashmentCharge: "5%" 
			  },
			  {
				TableNumber:4,
				ID: "3",
				Year:3,
				EarlyEncashmentCharge: "5%" 
			  },
			  {
				TableNumber:4,
				ID: "4",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:4,
				ID: "5",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:4,
				ID: "6",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  },


////
			  {
				TableNumber:3,
				ID: "7",
				Year:1,
				EarlyEncashmentCharge: "4%"  
			  },
			  {
				TableNumber:3,
				ID: "8",
				Year:2,
				EarlyEncashmentCharge: "4%" 
			  },
			  {
				TableNumber:3,
				ID: "9",
				Year:3,
				EarlyEncashmentCharge: "4%" 
			  },
			  {
				TableNumber:3,
				ID: "10",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:3,
				ID: "11",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:3,
				ID: "12",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  },


			  {
				TableNumber:2,
				ID: "13",
				Year:1,
				EarlyEncashmentCharge: "3%"  
			  },
			  {
				TableNumber:2,
				ID: "14",
				Year:2,
				EarlyEncashmentCharge: "3%" 
			  },
			  {
				TableNumber:2,
				ID: "15",
				Year:3,
				EarlyEncashmentCharge: "3%" 
			  },
			  {
				TableNumber:2,
				ID: "16",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:2,
				ID: "17",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:2,
				ID: "18",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  },


			  {
				TableNumber:1,
				ID: "19",
				Year:1,
				EarlyEncashmentCharge: "2%"  
			  },
			  {
				TableNumber:1,
				ID: "20",
				Year:2,
				EarlyEncashmentCharge: "2%" 
			  },
			  {
				TableNumber:1,
				ID: "21",
				Year:3,
				EarlyEncashmentCharge: "2%" 
			  },
			  {
				TableNumber:1,
				ID: "22",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:1,
				ID: "23",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:1,
				ID: "24",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  }			  
			  
			  
			  
]


//-------------------

const { ExportCSVButton } = CSVExport;

const handleClick = (TableNumber) => {
	  nameFilter(TableNumber);
	};

class ExpandableRowsTable_2ndTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				TableNumber_State: this.props.TableNumber_Prop
			}
	}
	  
	componentDidMount() {
		handleClick (this.state.TableNumber_State) 
	}

	componentDidUpdate() {
		//this.setState({TableNumber_State: this.props.TableNumber_Prop})
		//alert( 'State is ' + this.state.TableNumber_State  +  'Prop is ' + this.props.TableNumber_Prop );
		handleClick (this.props.TableNumber_Prop) 
	}
//Testing - ExpandableRowsTable_2ndTable - state   {this.state.TableNumber_State }   - Prop  {this.props.TableNumber_Prop}	
	render() {     
		return (
			<ToolkitProvider
				data={TableData}
				columns={tableColumns}
				keyField="TableNumber"
				exportCSV={ { onlyExportFiltered: true, exportAll: false } }
				search
			  >
				{props => (
				  <div>
					<ExportCSVButton className="btn btn-secondary mt-1 ml-1 mb-1" { ...props.csvProps }>Export</ExportCSVButton>

					<BootstrapTable
						{...props.baseProps}
						keyField="ID"
						bordered={false}
						data={TableData}
						columns={tableColumns}
						filter={ filterFactory() }
						cellEdit={ cellEditFactory({
							mode: 'click',
							blurToSave: true
					  }) }
					/>
				  </div>
				)}
			</ToolkitProvider>
		);
	};
};

class Container_2ndTable extends React.Component{
    constructor(props){
        super(props);
		this.state = {
				TableNumber_State: this.props.TableNumber_Prop
			}
    }
	//"Testing - Container_2ndTable " + {this.props.TableNumber_Prop}	
    render(){
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
						  {B_Label} - Table Number: {this.props.TableNumber_Prop}
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  <ExpandableRowsTable_2ndTable TableNumber_Prop = {this.props.TableNumber_Prop} />	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	


/////////////////////////////
class DataForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		ProdData: this.props.ProdData
		};
	}
	
	componentDidMount() {
		this.setState({ProdData: this.props.ProdData})
		//console.log("11111", this.state )
		//console.log("22222", this.props )
	}
  	

	handleChange_Value1 = (e ) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value1 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value1 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}

	handleChange_Value2 = (e) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value2 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value2 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}

	handleChange_Value3 = (e) => {
		let value = e.target.value;
		this.setState(prevState => {
		  let ProdData = Object.assign({}, prevState.ProdData);  // creating copy of state variable jasper
		  ProdData.Value3 = value;                     // update the name property, assign a new value                 
		  return { ProdData };                                 // return new object jasper object
		})		
		this.props.ProdData.Value3 = value
		this.props.parentCallback( this.props.ProdData );	//	console.log("2333333", e.target.name )
	}


    render() {
	//  console.log("Table - props ", this.props )
	 // console.log("Table - state ", this.state )		
		return (
			<div>
			<Card>
			<CardBody>

			<Form className="mb-4 "> 
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name1} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" name="144444" id="1" value={this.state.ProdData.Value1} onChange={this.handleChange_Value1}  >
						{options_Charge.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name2} </Label>

					<Col sm={5} >
						<Input name="2" value={this.state.ProdData.Value2} onChange={this.handleChange_Value2} id="2" />		
					</Col>
				  
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2"> {this.props.HeaderData.Name3} </Label>

				  <Col sm={5} >
					<Input className=" float-left" type="select" value={this.state.ProdData.Value3} onChange={this.handleChange_Value3}  >
						{options_Frequency.map((option) => ( 
						<option value={option.value}>{option.label}</option>
						))}
					</Input>		
				  </Col>
				   
				  <Info_Bullet header = "The minimum allowable premium to be paid." />	 
				</FormGroup>
				
				
			</Form>
			</CardBody>
			</Card> 
			</div>
		
		);
	};
};



export default DataForm;
