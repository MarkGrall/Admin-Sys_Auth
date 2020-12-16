import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2 } from "react-feather";
import {  Trash } from "react-feather";

  const tableColumns1 = [
 
      {
        Header: 'Charges',
        columns: [
          {
            Header: 'Charge Type',
            accessor: 'Charge',
            className: 'ChargeType',
            style: {
              fontWeight: 'bolder',
            },
          },
        ],
      },
      {
        Header: 'Update Date',
        columns: [
          {
            Header: '01/01/2015',
            accessor: 'Update0',
          },
          {
            Header: '01/01/2016',
            accessor: 'Update1',
          },
          {
            Header: '01/01/2017',
            accessor: 'Update2',
          },
          {
            Header: '01/01/2018',
            accessor: 'Update3',
          }
        ],
      },
    ]

const tableColumns2 = [
  {
    dataField: "Charges",
    text: "Charges",
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        },
	columns: [
	  {
		dataField: 'Charge Type',
		text: 'Charge',
		className: 'ChargeType',
		style: {
		  fontWeight: 'bolder',
		},
	  },
	],	
  },
  {
	dataField: 'UpdateDate',
	text: "Update Date",
	columns: [
			  {
				dataField: "Update0",
				text: "01/01/2018"
			  },
			  {
				dataField: "Update1",
				text: "01/01/2017"
			  },
			  {
				dataField: "Update2",
				text: "01/01/2016"
			  },
			  {
				dataField: "Update3",
				text: "01/01/2015"
			  }
			 ] 
  }
];


const tableColumns = [
  {
    dataField: "Charges",
    text: "Charges",
  },
  {
    dataField: "Update0",
    text: "01/01/2013",
  },
  {
    dataField: "Update1",
    text: "01/01/2015",
  },
  {
    dataField: "Update2",
    text: "01/01/2017",
  },
  {
    dataField: "Update3",
    text: "01/01/2019",
  }
 ]

const tableData = [
  {
    Charges: "Policy Fee",
	Update0: "£3 per month",
	Update1: "£3 per month",
	Update2: "£4 per month",
    Update3: "£5 per month"
  },
    {
    Charges: "Fund Switch Charge",
	Update0: "£10 per switch",
	Update1: "£5 per switch",
	Update2: "No charge",
    Update3: "No charge"
  },
    {
    Charges: "Early Exit Charge",
	Update0: "5% of surrender value",
	Update1: "3% of surrender value",
	Update2: "No charge",
    Update3: "No charge"
  },
      {
    Charges: "Fund Charge",
	Update0: "Fund Dependent",
	Update1: "Fund Dependent",
	Update2: "Fund Dependent",
    Update3: "Fund Dependent"
  },
      {
    Charges: "Bid Offer Spread",
	Update0: "5% Spread",
	Update1: "2% Spread",
	Update2: "No charge",
    Update3: "No charge"
  }
 ]






const ExpandableRowsTable = () => {
  
  const selectRow = {
    mode: "checkbox",
	clickToSelect: true,
	hideSelectColumn: true,
	 onSelect: (row, isSelect, rowIndex, e) => {
    // ...
  }

  };

  const MyExportCSV = props => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-secondary mt-2" onClick={handleClick}>
          Export
        </button>
      </div>
    );
  };

  return (
    <Card>
      <ToolkitProvider
        keyField="Charge"
        data={tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            
            <div className="float-right pull-right">
                <MyExportCSV {...props.csvProps} />
            </div>

            <CardBody>
              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                bordered={false}
				keyField="Charge"
				data={tableData}
				columns={tableColumns}
				selectRow={selectRow}
                
				pagination={paginationFactory({
                  sizePerPage: 10,
                  sizePerPageList: [5, 10, 25, 50]
                })}
              />
            </CardBody>
          </div>
        )}
      </ToolkitProvider>
    </Card>
  );

};

const Tables = () => (
  <Container fluid className="p-0">
    <ExpandableRowsTable />
  </Container>
);

export default Tables;
