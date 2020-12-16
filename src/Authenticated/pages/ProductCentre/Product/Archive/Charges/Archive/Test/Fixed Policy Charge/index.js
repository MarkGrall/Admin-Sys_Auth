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

window.jQuery = jQuery;


const tableColumns = [
  {
    dataField: "ChargeAmount",
    text: "Charge Amount"
    
  },
  {
    dataField: "Frequency",
    text: "Charge Frequency"
  },
  {
    dataField: "CurrentCharge",
    text: "Charge Charge"
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
  }
];

const tableData = [
  {
	ChargeAmount: "£4",
	Frequency: "Monthly",
	CurrentCharge: "No",
  	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "01/01/2019",
	RunDateFrom: "01/01/2020",
	RunDateTo: ""
  },
  {
	ChargeAmount: "£3",
	Frequency: "Monthly",
	CurrentCharge: "No",
  	EffectiveDateFrom: "01/01/2018",
    EffectiveDateTo: "01/01/2019",
	RunDateFrom: "01/01/2018",
	RunDateTo: "01/01/2019"
  },
  {
	ChargeAmount: "£5",
	Frequency: "Monthly",
	CurrentCharge: "Yes",
  	EffectiveDateFrom: "01/01/2019",
    EffectiveDateTo: "",
	RunDateFrom: "01/01/2019",
	RunDateTo: ""
  }
]


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
        <button className="btn btn-secondary mt-0 mb-1" onClick={handleClick}>
          Export
        </button>
      </div>
    );
  };
  
  
    return ( 

    <Card>
      <ToolkitProvider
        keyField="DocDate"
        data={tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
				<MyExportCSV {...props.csvProps} />

			  <BootstrapTable
                {...props.baseProps}
                
                bordered={false}
				keyField="DocDate"
				data={tableData}
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
