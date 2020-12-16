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

//import Model_Button from "./Modal/Button/Model_Button";
import Model_Icon from "./Modal/Icon/Model_Icon";


const B_Label="Personal Pension Levy"
let DefaultSelected = "3";


const tableColumns = [
  {
    dataField: "CurrentRate",
    text: "Current Rate" 
  },
  {
    dataField: "TaxRate",
    text: "Tax Rate" 
  },
  {
    dataField: "TaxID",
    text: "Tax ID" 
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
	CurrentRate: "Yes",
	TaxRate: "0.05",
	TaxID: 3,
  	DateEntered: "01/01/2020",
	EffectiveDateFrom: "01/01/2020",
    EffectiveDateTo: "01/01/2021",
	RunDateFrom: "01/01/2020",
	RunDateTo: ""
  },
  {
	CurrentRate: "No",
	TaxRate: "0.01",
	TaxID: 2,
  	DateEntered: "01/01/2019",
	EffectiveDateFrom: "01/01/2019",
    EffectiveDateTo: "01/01/2020",
	RunDateFrom: "01/01/2019",
	RunDateTo: "01/01/2020"
  },
  {
	CurrentRate: "No",
	TaxRate: "0.02",
  	TaxID: 1,
	DateEntered: "01/01/2018",
	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "01/01/2019",
	RunDateFrom: "01/01/2018",
	RunDateTo: "01/01/2019"
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
//<Model_Button buttonLabel={B_Label} isButton={true} TaxID={"3"} / >

class Table_Spec extends React.Component {
	constructor(props, context) {
    super(props, context);
	//this.state = { selected: [ DefaultSelected ] };
	}
  
	componentDidMount() {

	}
 
	handleOnSelect = ( row, isSelect) => {
		this.setState({TaxID_Row: row.TaxID});
		//this.props.parentCallback(row.TaxID );
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
			
			</Row>
		  </div>
		);
    };
	   
	return ( 
      
	  <ToolkitProvider
        keyField="TaxID"
        data={tableData}
        columns={tableColumns}
      >
        {props => (
	     <div>
			<MyExportCSV {...props.csvProps} />

			<BootstrapTable
				{...props.baseProps}

				bordered={false}
				keyField="TaxID"
				data={tableData}
				columns={tableColumns}
				sortable={true}
				
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
	//this.props.parentCallback( childData );
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
					  
					  <Table_Spec />	
					  	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	





export default Container_Spec;
