import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import { Document, Page } from 'react-pdf';
import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import {  MinusCircle, PlusCircle } from "react-feather";

import jQuery from "jquery";

import ModelIcon_Edit from "../Modal/ModalIcon - Edit";
import ModelButton_NewProduct from "../Modal/ModalButton - New Product";

window.jQuery = jQuery;

const B_Label="Event Order"

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
    dataField: "EffectiveDateFrom",
    text: "Effective Date From"
  },
  {
    dataField: "EffectiveDateTo",
    text: "Effective Date To"
  },
  {
    dataField: "DateEntered",
    text: "Date Entered"
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
           < div 
               style={{ textAlign: "center",
                  cursor: "pointer",
                 lineHeight: "normal" }}>

        <ModelButton_NewProduct buttonLabel={B_Label} isButton={false} / >
		
      </div> 
 ); } 

const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true   
};

class ExpandableRowsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: [0, 1] };
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
		<ModelButton_NewProduct buttonLabel={B_Label} isButton={true} / >
		</Row>
      </div>
    );
  };
  
    return ( 
    <Card>
      <ToolkitProvider
        keyField="TableNumber"
        data={tableData}
        columns={tableColumns}
      >
        {props => (
          <div>
            <CardBody>
			  <MyExportCSV {...props.csvProps} />
			  <BootstrapTable
                {...props.baseProps}
                
                bordered={false}
				keyField="TableNumber"
				data={tableData}
				columns={tableColumns}
                sortable={true}
                selectRow={ selectRowProp }
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
			  {B_Label}
		  </CardTitle>
		</CardHeader>
		<CardBody>
		  <ExpandableRowsTable />

		</CardBody>
	</Card>
  </Container>
);





export default FixedCharge;
