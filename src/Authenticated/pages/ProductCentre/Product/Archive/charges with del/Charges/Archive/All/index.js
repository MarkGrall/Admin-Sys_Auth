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

const B_Label="Fixed Charge"

let tableData = [
  {
	id:1,
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
	id:2,  
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
	id:3,  
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
	id:4,
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

class ExpandableRowsTable extends React.Component {
    constructor(props, context) {
    super(props, context);
	this.state = { 
			tableData: tableData
		};
		this.handleCallback = this.handleCallback.bind(this);
    }
	handleCallback = (childData) =>{		
			//alert("here")
		//	console.log("handleCallback - 1",childData)
		//	console.log("handleCallback - 2",this.state)
		//	console.log("handleCallback - 3",this.props)
		//	console.log("handleCallback - 4",tableData)

		let newProducts = [...this.state.tableData];
		newProducts = newProducts.map((d) => {
		  if (d.id === childData.id) {
			return {
			  ...d,
			  d: childData
			};
		  }
		  return d;
		});
		this.setState(curr => ({ ...curr, tableData: newProducts }));
	}
	
	
	render() { 
		
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
				formatter: (cell, row, rowIndex, extraData) => (
					< div 
						   style={{ textAlign: "center",
							  cursor: "pointer",
							 lineHeight: "normal" }}
					>
						<Model_Icon parentCallback = {this.handleCallback} buttonLabel={B_Label} Row={row}  / >
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
		<ModelButton_NewProduct / >
		</Row>
      </div>
    );
  };

    return ( 

    <Card>
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
