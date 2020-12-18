import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";


import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import {  MinusCircle, PlusCircle } from "react-feather";

import jQuery from "jquery";

window.jQuery = jQuery;


const tableColumns = [
  {
    dataField: "Event",
    text: "Event" 
  },
  {
    dataField: "Order",
    text: "Order"
  }
];

const TableData_1 = [
			  {
				Event: "Policy Start",
				Order: "1"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2"
			  },
				{
				Event: "Single Premium",
				Order: "3"
			  },
				{
				Event: "Regular Premium",
				Order: "4"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5"
			  },
				{
				Event: "Early Encashment Charge",
				Order: "6"
			  },
				{
				Event: "Partial Surrender",
				Order: "7"
			  },
				{
				Event: "Full Surrender",
				Order: "8"
			  },
				{
				Event: "Death",
				Order: "9"
			  }
			]

const tableData_2 = [
  {
	Event: "Policy Start",
	Order: "2"
  },
  {
	Event: "Policy Anniversary",
	Order: "1"
  },
    {
	Event: "Single Premium",
	Order: "3"
  },
    {
	Event: "Regular Premium",
	Order: "4"
  },
    {
	Event: "Fixed Policy Charge",
	Order: "5"
  },
    {
	Event: "Early Encashment Charge",
	Order: "6"
  },
    {
	Event: "Partial Surrender",
	Order: "7"
  },
    {
	Event: "Full Surrender",
	Order: "8"
  },
    {
	Event: "Death",
	Order: "9"
  }
]

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item
    }
  })
}

class ExpandableRowsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: [0, 1] };
	this.state = { TableData_1: []  }
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
        data={TableData_1}
        columns={tableColumns}
		keyField="Event"
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
				<MyExportCSV {...props.csvProps} />

			  <BootstrapTable
                {...props.baseProps}
                keyField="Event"
                bordered={false}
				data={TableData_1}
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
			  Event Order Table - 4
		  </CardTitle>
		</CardHeader>
		<CardBody>
		  <ExpandableRowsTable />

		</CardBody>
	</Card>
  </Container>
);





export default FixedCharge;
