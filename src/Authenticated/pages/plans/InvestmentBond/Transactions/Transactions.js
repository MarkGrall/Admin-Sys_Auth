import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2 } from "react-feather";


const tableData = [
  {
    TransactionNumber: 1,
	TransactionDate: "01/02/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
   {
    TransactionNumber: 2,
    TransactionDate: "01/03/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
    {
	TransactionNumber: 3,
    TransactionDate: "01/04/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
    {
	TransactionNumber: 4,
	TransactionDate: "01/05/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
    {
    TransactionNumber: 5,
	TransactionDate: "01/06/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
    {
	TransactionNumber: 6,
    TransactionDate: "01/07/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
    {
	TransactionNumber: 7,
    TransactionDate: "01/08/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
    {
	TransactionNumber: 8,
	TransactionDate: "01/09/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
    {
	TransactionNumber: 9,
	TransactionDate: "01/10/2019",
	TrasactionType: "Regular Premium",
    Fund: "Emerging Market Equity Income Fund",
    Units: 250,
    Price: 2,
	Amount: 500
  },
  
];

const tableColumns = [
  {
    dataField: "TransactionNumber",
    text: "Transaction Number",
    sort: true
  },
  {
    dataField: "TransactionDate",
    text: "Transaction Date",
    sort: true
  },
  {
    dataField: "TrasactionType",
    text: "Trasaction Type",
    sort: true
  },
  {
    dataField: "Fund",
    text: "Fund",
    sort: true
  },
  {
    dataField: "Units",
    text: "Units",
    sort: false
  },
    {
    dataField: "Price",
    text: "Price",
    sort: false
  },
    {
    dataField: "Amount",
    text: "Amount",
    sort: false
  }
];

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
        keyField="TransactionNumber"
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
				keyField="TransactionNumber"
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
