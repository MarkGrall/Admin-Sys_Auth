import React  from "react";
import { Card, CardBody,CardHeader,CardTitle, Container, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter   } from 'react-bootstrap-table2-filter';


import ModelButton from "./Modal/Button/Model_Button";
import ModelIcon from "./Modal/Icon/Model_Icon";


const ButtonLabel="Early Encashment Charge"
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

			<ModelIcon buttonLabel={ButtonLabel} Row={row}  / >
		
		</div> 
 ); } 

class TableSpec extends React.Component { 

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
			<ModelButton buttonLabel={ButtonLabel} isButton={true} TableNumber={"4"} / >
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
						  {ButtonLabel} - Specification
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

const tableColumns2 = [
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

const tableData2 = [
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
        data={tableData2}
        columns={tableColumns2}
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
				data={tableData2}
				columns={tableColumns2}
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
						  {ButtonLabel} - Table Number: {this.props.TableNumberProp}
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
