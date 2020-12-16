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


const B_Label="Early Encashment Charge"
let DefaultSelected = "1";

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
	TableNumber: "2",
	DateEntered: "01/01/2017",
	EffectiveDateFrom: "01/01/2017",
    EffectiveDateTo: "",
	
	RunDateFrom: "01/01/2018",
	RunDateTo: ""
  },
  {
	CurrentTable: "No",
	TableNumber: "1",
  	EffectiveDateFrom: "01/01/2016",
    EffectiveDateTo: "01/01/2017",
	DateEntered: "01/01/2016",
	RunDateFrom: "01/01/2016",
	RunDateTo: "01/01/2017"
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

const tableColumns_2 = [
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

const tableData_2 = [
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
		handleClick (this.props.TableNumber_Prop) 
	}
//Testing - ExpandableRowsTable_2ndTable - state   {this.state.TableNumber_State }   - Prop  {this.props.TableNumber_Prop}	
	render() {     

    return (
	<ToolkitProvider
        data={tableData_2}
        columns={tableColumns_2}
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
				data={tableData_2}
				columns={tableColumns_2}
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
