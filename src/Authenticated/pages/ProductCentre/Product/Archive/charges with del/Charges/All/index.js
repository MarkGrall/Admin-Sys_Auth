import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import { Document, Page } from 'react-pdf';
import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import {  MinusCircle, PlusCircle } from "react-feather";

import Model_Icon from "./Modal/Icon/Model_Icon";
//import Model_Icon from "./Modal/Icon/Icon_Test";

import ModelButton_NewProduct from "./Modal/ModalButton - New Product";

const B_Label="Fixed Policy Charge"

let ValueString = null; 
let ValueDate = null; 

let tableData = [
  {
	id:1,
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£4",
	Frequency: "Annual",
	CurrentCharge: "No",
	Used: "Yes",
  	EffectiveDateFrom: "01/01/2015",
    EffectiveDateTo: "01/01/2019",
	RunDateFrom: "01/01/2020",
	RunDateTo: ""
  },
  {
	id:2,  
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£3",
	Frequency: "Monthly",
	CurrentCharge: "No",
  	Used: "Yes",
	EffectiveDateFrom: "01/01/2017",
    EffectiveDateTo: "01/01/2019",
	RunDateFrom: "01/01/2018",
	RunDateTo: "01/01/2019"
  },
  {
	id:3,  
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£5",
	Frequency: "Monthly",
	CurrentCharge: "Yes",
	Used: "Yes",
  	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "",
	RunDateFrom: "01/01/2019",
	RunDateTo: ""
  },
{
	id:4,
	AmountOrPercentage: "Percentage",
	ChargeAmountOrPercentage: "0.5%",
	Frequency: "Annual",
	CurrentCharge: "Yes",
	Used: "No",
  	EffectiveDateFrom: "01/01/2019",
    EffectiveDateTo: "",
	RunDateFrom: "01/01/2019",
	RunDateTo: ""
  }
]


class ExpandableRowsTable extends React.Component {
    constructor(props, context) {
    super(props, context);
	this.state = { 
			tableData: tableData,
			Up: null
		};
		this.handleCallback = this.handleCallback.bind(this);
    }
	
	handleCallback_NewProduct = (childData) =>{
		
	  if( childData.EffectiveDateFrom ) {
			// date not null
			ValueDate = new Date(childData.EffectiveDateFrom)
			ValueString = ValueDate.toLocaleDateString('en-GB');
			childData.EffectiveDateFrom = ValueString
		}
		
	  if( childData.EffectiveDateTo ) {
			ValueDate = new Date(childData.EffectiveDateTo)
			ValueString = ValueDate.toLocaleDateString('en-GB');
			childData.EffectiveDateTo = ValueString
	    }
	  
	  if( childData.RunDateFrom ) {
			ValueDate = new Date(childData.RunDateFrom)
			ValueString = ValueDate.toLocaleDateString('en-GB');
			childData.RunDateFrom = ValueString
   	   }
	  if( childData.RunDateTo ) {
			ValueDate = new Date(childData.RunDateTo)
			ValueString = ValueDate.toLocaleDateString('en-GB');
			childData.RunDateTo = ValueString
   	   }

		childData.id = this.state.tableData.length + 1	
		this.state.tableData.push(childData);
		this.setState({Up: "1"}); //Dummy state to force the refresh of the state and render the page

	  };
	
	handleCallback = (childData) =>{				
		let newProducts = [...this.state.tableData];
		newProducts = newProducts.map((d) => {
		  if (d.id === childData.id) {	
			return {
			  ...d,
			  AmountOrPercentage: childData.AmountOrPercentage,
			  ChargeAmountOrPercentage: childData.ChargeAmountOrPercentage,
			  Frequency: childData.Frequency,
			  CurrentCharge: childData.CurrentCharge,
			  
			  EffectiveDateFrom: childData.EffectiveDateFrom,
			  EffectiveDateTo: childData.EffectiveDateTo,
			  RunDateFrom: childData.RunDateFrom,
			  RunDateTo: childData.RunDateTo,
			}
		  }
		  return d;
		});
		this.setState(curr => ({ ...curr, tableData: newProducts }));
	}
	
	handleCallback_DeleteRow = (childData) =>{
		this.state.tableData.splice( childData.id - 1, 1);
		this.setState({Up: "2"}); //Dummy state to force the refresh of the state and render the page
		//console.log("Delete state A", this.state )
	}
	
	render() { 
	//console.log("Render props ", this.props )
	//console.log("Render state", this.state )
		//console.log("Index_Render", this.state)
		let tableColumns = [
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
			dataField: "Used",
			text: "Used",
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
				formatter: (cell, row, rowIndex, extraData) => (
					< div 
						   style={{ textAlign: "center",
							  cursor: "pointer",
							 lineHeight: "normal" }}
					>
						<Model_Icon parentCallback = {this.handleCallback} parentCallback_Delete = {this.handleCallback_DeleteRow} buttonLabel={B_Label} Row={row}  / >
					</div> 
				),
				headerAttrs: { width: 50 },
				attrs: { width: 50, class: "EditRow" } 
			  }
		  
		];
	
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
		<ModelButton_NewProduct parentCallback = {this.handleCallback_NewProduct}   B_Label={B_Label}  / >
		</Row>
      </div>
    );
  };

    return ( 

      <ToolkitProvider
        keyField="DocDate"
        data={this.state.tableData}
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
				data={this.state.tableData}
				columns={tableColumns}
                sortable={true}
                
              />
            </CardBody>
          </div>
        )}
      </ToolkitProvider>

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
