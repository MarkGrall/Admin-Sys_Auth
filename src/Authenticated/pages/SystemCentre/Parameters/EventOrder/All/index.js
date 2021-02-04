import React  from "react";
import {Card, CardBody,CardHeader,CardTitle, Container, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter   } from 'react-bootstrap-table2-filter';


import ModelButton from "./Modal/Button/Model_Button";
import ModelIcon from "./Modal/Icon/Model_Icon";


const BLabel="Event Order"
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

			<ModelIcon buttonLabel={BLabel} Row={row}  / >
		
		</div> 
 ); } 

class TableSpec extends React.Component {
	constructor(props, context) {
    super(props, context);
	//this.state = { selected: [ DefaultSelected ] };
	}
  

	handleOnSelect = ( row, isSelect) => {
		this.props.parentCallback(row.TableNumber );
	}

/*	
	handleOnSelect = ( row, isSelect) => {
		this.setState({TableNumberRow: row.TableNumber});
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

	//"TableSpec - " {this.state.TableNumberRow} 
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
			<ModelButton buttonLabel={BLabel} isButton={true} TableNumber={"4"} / >
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

class ContainerSpec extends React.Component{
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
//"Testing - ContainerSpec " + {data}
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
						  {BLabel} - Specification
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  
					  <TableSpec parentCallback = {this.handleCallback}/>	
					  	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	



let nameFilter;

const tableColumns2ndTable = [
	  {
		dataField: "Event",
		text: "Event"	
	  },
	  {
		dataField: "Order",
		text: "Order",
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

const TableData1 = [
			  {
				Event: "Policy Start - 1",
				Order: "1",
				TableNumber:1,
				ID: "1"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:1,
				ID: "2"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:1,
				ID: "3"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:1,
				ID: "4"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:1,
				ID: "5"
			  },
				{
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:1,
				ID: "6"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:1,
				ID: "7"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:1,
				ID: "8"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:1,
				ID: "9"
			  },
			  
			  {
				Event: "Policy Start - 2",
				Order: "1",
				TableNumber:2,
				ID: "11"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:2,
				ID: "12"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:2,
				ID: "13"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:2,
				ID: "14"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:2,
				ID: "15"
			  },
			  {
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:2,
				ID: "26"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:2,
				ID: "27"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:2,
				ID: "28"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:2,
				ID: "29"
			  },
			  
			  {
				Event: "Policy Start - 3",
				Order: "1",
				TableNumber:3,
				ID: "31"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:3,
				ID: "32"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:3,
				ID: "33"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:3,
				ID: "34"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:3,
				ID: "35"
			  },
			  {
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:3,
				ID: "36"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:3,
				ID: "37"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:3,
				ID: "38"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:3,
				ID: "39"
			  },
			  
			  
			  {
				Event: "Policy Start - 4",
				Order: "1",
				TableNumber:4,
				ID: "41"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:4,
				ID: "42"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:4,
				ID: "43"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:4,
				ID: "44"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:4,
				ID: "45"
			  },
			  {
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:4,
				ID: "46"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:4,
				ID: "47"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:4,
				ID: "48"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:4,
				ID: "49"
			  }
			  
			  
]


const { ExportCSVButton } = CSVExport;

const handleClick = (TableNumber) => {
	  nameFilter(TableNumber);
	};

class ExpandableRowsTable2ndTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				TableNumberState: this.props.TableNumberProp
			}
	}
	  
	componentDidMount() {
		handleClick (this.state.TableNumberState) 
	}

	componentDidUpdate() {
		//this.setState({TableNumberState: this.props.TableNumberProp})
		//alert( 'State is ' + this.state.TableNumberState  +  'Prop is ' + this.props.TableNumberProp );
		handleClick (this.props.TableNumberProp) 
	}
//Testing - ExpandableRowsTable2ndTable - state   {this.state.TableNumberState }   - Prop  {this.props.TableNumberProp}	
	render() {     

    return (
	<ToolkitProvider
        data={TableData1}
        columns={tableColumns2ndTable}
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
				data={TableData1}
				columns={tableColumns2ndTable}
				filter={ filterFactory() }
              />
          </div>
        )}
      </ToolkitProvider>
  );
 };
};
	

class Container2ndTable extends React.Component{
    constructor(props){
        super(props);
		this.state = {
				TableNumberState: this.props.TableNumberProp
			}
    }
	//"Testing - Container2ndTable " + {this.props.TableNumberProp}	
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
						  {BLabel} - Table Number: {this.props.TableNumberProp}
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  <ExpandableRowsTable2ndTable TableNumberProp = {this.props.TableNumberProp} />	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	




class TestWhole extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: DefaultSelected
		};
	}
	
	handleCallback = (childData) =>{
        this.setState({data: childData})
    }
	//"Testing - TestWhole " + {data}
	render() {     
		const {data} = this.state;
		return (
			<Container fluid className="p-0">
				
				
				<ContainerSpec parentCallback = {this.handleCallback} />
				
				<Container2ndTable TableNumberProp = {data}  />
				
				
			</Container>
		);
	};
};



export default TestWhole;
