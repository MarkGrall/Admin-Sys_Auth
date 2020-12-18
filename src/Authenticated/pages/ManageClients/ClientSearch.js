import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle } from "react-feather";

//
const tableData = [
  {
    ClientID: "C1234566778",
    PolicyNumber: "P12345678",
    ProductCode: "MVP1",
    startDate: "2011/04/25"
  },
  {
    ClientID: "C123456099",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C1234567899",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C1234569679",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C1234569569",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C1234569239",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C123456991",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C123456939",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C1234564499",
    PolicyNumber: "P123455699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C12345694",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C1234569",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C1234699",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  },
  {
    ClientID: "C145699",
    PolicyNumber: "P12345699",
    ProductCode: "MVP2",
    startDate: "2011/07/25"
  }
  
];

const tableColumns = [
  {
    dataField: "ClientID",
    text: "Client ID",
    sort: true
  },
  {
    dataField: "PolicyNumber",
    text: "Policy Number",
    sort: true
  },
  {
    dataField: "ProductCode",
    text: "Product Code",
    sort: true
  },
  {
    dataField: "startDate",
    text: "Start Date",
    sort: true
  }
];

const ExpandableRowsTable = () => {
  
  const selectRow = {
    mode: "checkbox",
clickToSelect: true,
	 onSelect: (row, isSelect, rowIndex, e) => {
    // ...
  }

  };
  const expandRow = {
    renderer: row => (
      <div>
        
        <p>
          You can render anything here, also you can add additional data on every row object.
        </p>
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
            <CardHeader>
              <div className="float-right pull-right">
                <MyExportCSV {...props.csvProps} />
              </div>
              <CardTitle tag="h5">Search Clients</CardTitle>
            </CardHeader>
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
                  sizePerPage: 5,
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
