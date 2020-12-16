import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2 } from "react-feather";
import {  Trash } from "react-feather";

const tableData = [
  {
    
	ClientID: "C-12341",
	LinkClient: "/Client/Client",
	PlanCount: 2,
	FirstName: "Mark",
    Surname: "Grall"
  },
    {
    ClientID: "C-12342",
	PlanCount: 2,
	FirstName: "Mark",
    Surname: "Grall"
  },
    {
    ClientID: "C-12343",
	PlanCount: 2,
	FirstName: "Mark",
    Surname: "Grall"
  },
    {
    ClientID: "C-12344",
	PlanCount: 2,
	FirstName: "Mark",
    Surname: "Grall"
  },
    {
    ClientID: "C-12345",
	PlanCount: 2,
	FirstName: "Mark",
    Surname: "Grall"
  },
    {
    ClientID: "C-12346",
	PlanCount: 2,
	FirstName: "Mark",
    Surname: "Grall"
  }
];

const tableColumns = [
  {
    dataField: "ClientID",
    text: "Client ID",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        }
  },
  {
    dataField: "PlanCount",
    text: "Plan Count",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '120px', textAlign: 'Left' };
        }
  },
  {
    dataField: "FirstName",
    text: "First Name",
    sort: true,
		headerStyle: (colum, colIndex) => {
          return { width: '150px', textAlign: 'Left' };
        }
  },
  {
    dataField: "Surname",
    text: "Surname",
    sort: true
  }
];


const tableDataSub = [
  {
    PlanID: 1,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  }
  ]

const tableColumnsSub = [
  {
    dataField: "PlanID",
    text: "Plan ID",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '120px', textAlign: 'Left' };
        }
  },
    {
    dataField: "PlanStartDate",
    text: "Plan Start Date",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        }
  },
  {
    dataField: "ProductID",
    text: "Product ID",
    sort: true
  },
    {
    dataField: "Product",
    text: "Product",
    sort: true
  },
    {
    dataField: "ProductGroup",
    text: "Product Group",
    sort: true
  },
    {
    dataField: "Status",
    text: "Status",
    sort: true
  }
]

const BorderedTable = () => {
  return (
      <ToolkitProvider
        keyField="PlanID"
		data={tableDataSub}
        columns={tableColumnsSub}
      >
          {props => (
          <div>
            <CardBody>
              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                bordered={true}
				data={tableDataSub}
				columns={tableColumnsSub}
              />
            </CardBody>
          </div>
        )}
      </ToolkitProvider>
  );
};


const ExpandableRowsTable = () => {
  
  const selectRow = {
    mode: "checkbox",
	clickToSelect: true,
	hideSelectColumn: true,
	 onSelect: (row, isSelect, rowIndex, e) => {
    // ...
  }

  };
  const expandRow = {
    renderer: row => (
      <div>
		<BorderedTable />
      </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) =>
      isAnyExpands ? (
        <MinusCircle width={16} height={16} />
      ) : (
        <PlusCircle width={16} height={16} />
      ),
    expandColumnRenderer: ({ expanded }) =>
      expanded ? (
        <MinusCircle width={16} height={16} />
      ) : (
        <PlusCircle width={16} height={16} />
      )
  }
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
        keyField="ClientID"
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
				keyField="ClientID"
				data={tableData}
				columns={tableColumns}
				selectRow={selectRow}
				expandRow={expandRow}
                
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
