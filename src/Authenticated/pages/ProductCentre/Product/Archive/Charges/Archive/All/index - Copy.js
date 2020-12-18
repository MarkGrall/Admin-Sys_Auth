import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";


import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import {  MinusCircle, PlusCircle } from "react-feather";

import Model_Icon from "./Modal/Icon/Model_Icon";
import ModelButton_NewProduct from "./Modal/ModalButton - New Product";

import jQuery from "jquery";

window.jQuery = jQuery;


const B_Label="Fixed Charge"
const tableColumns = [
  {
    dataField: "AmountOrPercentage",
    text: "Amount or Percentage",
	sort: true
  },
  {
    dataField: "ChargeAmountOrPercentage",
    text: "Charge",
	sort: true
  },
  {
    dataField: "Frequency",
    text: "Charge Frequency",
    sort: true
  },
  {
    dataField: "CurrentCharge",
    text: "Charge Charge",
	sort: true
  },
  {
    dataField: "EffectiveDateFrom",
    text: "Effective Date From",
	sort: true
  },
  {
    dataField: "EffectiveDateTo",
    text: "Effective Date To",
	sort: true
  },
  {
    dataField: "RunDateFrom",
    text: "Run Date From",
	sort: true
  },
  {
    dataField: "RunDateTo",
    text: "Run Date To",
	sort: true
  },
  
    { dataField: "edit", 
        text: "Edit",
        sort: false,
        formatter: rankFormatter,
        headerAttrs: { width: 50 },
        attrs: { width: 50, class: "EditRow" } 
      }
  
];

let tableData = [
  {
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£4",
	Frequency: "Annual",
	CurrentCharge: "No",
  	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "01/01/2019",
	RunDateFrom: "01/01/2020",
	RunDateTo: ""
  },
  {
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£3",
	Frequency: "Monthly",
	CurrentCharge: "No",
  	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "01/01/2019",
	RunDateFrom: "01/01/2018",
	RunDateTo: "01/01/2019"
  },
  {
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£5",
	Frequency: "Monthly",
	CurrentCharge: "Yes",
  	EffectiveDateFrom: "01/01/2019",
    EffectiveDateTo: "",
	RunDateFrom: "01/01/2019",
	RunDateTo: ""
  },
{
	AmountOrPercentage: "Percentage",
	ChargeAmountOrPercentage: "0.5%",
	Frequency: "Annual",
	CurrentCharge: "Yes",
  	EffectiveDateFrom: "01/01/2019",
    EffectiveDateTo: "",
	RunDateFrom: "01/01/2019",
	RunDateTo: ""
  }
]
let ProductData_Updated


class rankFormatter2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: null
		};
	}
	
	componentDidMount() {
	}
	
	handleCallback = (childData) =>{
		this.setState({data: childData})
		//this.state.data=childData

	}
  
  render() {
  //console.log("Test2", ProdData )
    return (
		< div 
               style={{ textAlign: "center",
                  cursor: "pointer",
                 lineHeight: "normal" }}
		>
				<Model_Icon parentCallback = {this.handleCallback} buttonLabel={B_Label} Row={this.props.row}  / >
		</div> 
	)
}}

function rankFormatter(cell, row, rowIndex, formatExtraData) { 

	 const handleCallback = (childData) =>{
		alert("here" + childData)
		ProductData_Updated=childData
		
		console.log("rankFormatter - 1",childData)
		
		console.log("rankFormatter - 2",cell)
		console.log("rankFormatter - 3",row)
		console.log("rankFormatter - 4",rowIndex)
		console.log("rankFormatter - 5",formatExtraData)		
			
		
		tableData[rowIndex].AmountOrPercentage = row.AmountOrPercentage
		tableData[rowIndex].ChargeAmountOrPercentage = row.ChargeAmountOrPercentage
		tableData[rowIndex].Frequency = row.Frequency
		
		console.log("rankFormatter - 6",tableData)	
		//console.log("rankFormatter - ProductData_Updated",ProductData_Updated)
	}
	 
	 return ( 
		   < div 
               style={{ textAlign: "center",
                  cursor: "pointer",
                 lineHeight: "normal" }}
		   >

				<Model_Icon parentCallback = {handleCallback} buttonLabel={B_Label} Row={row}  / >
				


			</div> 
 ); } 
 
class ExpandableRowsTable extends React.Component {
  constructor(props, context) {
    super(props, context);
	this.state = { 
			tableData1: tableData
		};
  }
	

	
  render() { 
  
    const MyExportCSV = props => {
    const handleClick = () => {
      props.onExport();
    };
    const handleCallback = (childData) =>{
		alert("here2222" + childData)
	}
	return (
      <div>
        <Row>
		<button className="btn btn-secondary mt-0 mb-1" onClick={handleClick}>
          Export
        </button>
		<ModelButton_NewProduct / >
		</Row>
      </div>
    );
  };

    return ( 

    <Card>
      <ToolkitProvider
        keyField="DocDate"
        data={this.state.tableData1}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
				<MyExportCSV {...props.csvProps} />

			  <BootstrapTable
			    Bootstrap4 
                {...props.baseProps}
                
                bordered={false}
				keyField="DocDate"
				data={this.state.tableData1}
				columns={tableColumns}
                sortable={true}
                
              />
            </CardBody>
          </div>
        )}
      </ToolkitProvider>
    </Card>
  );
  };
};
	

const FixedCharge = () => (
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
			  Fixed Policy Charge
		  </CardTitle>
		</CardHeader>
		<CardBody>
		  <ExpandableRowsTable />

		</CardBody>
	</Card>
  </Container>
);





export default FixedCharge;
