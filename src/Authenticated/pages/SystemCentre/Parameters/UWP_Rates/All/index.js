import React, {  Component , useState }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport, Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

import {  MinusCircle, PlusCircle } from "react-feather";

import Model_Button from "./Modal/Button/Model_Button";
import Model_Icon from "./Modal/Icon/Model_Icon";


const B_Label="UWP Rate"
let DefaultSelected = "4";


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
	CurrentTable: "Yes",
	TableNumber: "4",
  	EffectiveDateFrom: "01/01/2020",
    EffectiveDateTo: "",
	DateEntered: "01/01/2020",
	RunDateFrom: "01/01/2020",
	RunDateTo: ""
  },
  {
	CurrentTable: "No",
	TableNumber: "3",
  	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "01/01/2020",
	DateEntered: "01/01/2018",
	RunDateFrom: "01/01/2018",
	RunDateTo: "01/01/2020"
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

			<Model_Icon buttonLabel={B_Label} Row={row}  / >
		
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
			<Model_Button buttonLabel={B_Label} isButton={true} TableNumber={"4"} / >
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



let nameFilter;

const tableColumns_2ndTable = [
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
		dataField: "TableNumber",
		text: "Table Number",
		hidden: true
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

const TableData_1 = [
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
        data={TableData_1}
        columns={tableColumns_2ndTable}
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
				data={TableData_1}
				columns={tableColumns_2ndTable}
				filter={ filterFactory() }
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
				
				<Container_2ndTable TableNumber_Prop = {data}  />
				
				
			</Container>
		);
	};
};



export default Test_Whole;
