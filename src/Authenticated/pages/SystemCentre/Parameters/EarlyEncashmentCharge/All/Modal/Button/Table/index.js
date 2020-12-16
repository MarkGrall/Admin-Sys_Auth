import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import { Document, Page } from 'react-pdf';

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

import {  MinusCircle, PlusCircle } from "react-feather";

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
		//handleClick (this.props.TableNumber_Prop) 
	}
//Testing - ExpandableRowsTable_2ndTable - state   {this.state.TableNumber_State }   - Prop  {this.props.TableNumber_Prop}	
	render() { 

		const MyExportCSV = props => {
			const handleClick = () => {
			  props.onExport();
			};
			return (
			  <div>
				<Row>
				<button className="btn btn-primary mt-0 mb-1 mr-2" onClick={handleClick}>
				  Export
				</button>
				<button className="btn btn-secondary mt-0 mb-1" onClick={handleClick}>
				  Upload Table
				</button>

				</Row>
			  </div>
			);
		};

    
		return (
			<ToolkitProvider
				data={TableData}
				columns={tableColumns}
				keyField="TableNumber"
				exportCSV={ { onlyExportFiltered: true, exportAll: false } }
				
			  >
				{props => (
				  <div>
				    <MyExportCSV {...props.csvProps} />
					
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
						  {B_Label} - Table 
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





export default Container_2ndTable;
