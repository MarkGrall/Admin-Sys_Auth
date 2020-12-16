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

const B_Label="UWP Rate"
let nameFilter;
const tableColumns = [
	  {
		dataField: "RateType",
		text: "Rate Type"	
	  },
	  {
		dataField: "UWPRate",
		text: "UWP Rate",
	  },
	  {
		dataField: "TrancheDateFrom",
		text: "Tranche Date From",
	  },
	  {
		dataField: "TrancheDateTo",
		text: "Tranche Date To",
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
				RateType: "Terminal Bonus",
				UWPRate: "0.01",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:4,
				ID: "2",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:4,
				ID: "3",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:4,
				ID: "4",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:4,
				ID: "5",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.1",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:4,
				ID: "6",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:4,
				ID: "7",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.06",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:4,
				ID: "8",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.02",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  //////////
			  
			  

			  {
				TableNumber:3,
				ID: "10",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:3,
				ID: "11",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:3,
				ID: "12",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:3,
				ID: "14",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:3,
				ID: "15",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.06",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:3,
				ID: "16",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.02",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  
			  
			  ////////////
			  
			  {
				TableNumber:2,
				ID: "17",  
				RateType: "Terminal Bonus",
				UWPRate: "0.01",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:2,
				ID: "18",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:2,
				ID: "19",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:2,
				ID: "20",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:2,
				ID: "21",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.1",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:2,
				ID: "22",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:2,
				ID: "23",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.06",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:2,
				ID: "24",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.02",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  
			  
			  ///////////////
			  {
				TableNumber:1,
				ID: "25",  
				RateType: "Terminal Bonus",
				UWPRate: "0.01",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:1,
				ID: "26",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:1,
				ID: "27",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:1,
				ID: "28",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:1,
				ID: "29",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.1",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:1,
				ID: "30",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:1,
				ID: "31",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.16",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:1,
				ID: "32",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.12",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
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
