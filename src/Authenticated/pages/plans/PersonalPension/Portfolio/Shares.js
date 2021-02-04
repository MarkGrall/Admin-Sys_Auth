import React from "react";
import { CardBody, Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

const tableDataSub = [
  {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  },
  {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  },
   {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  },
    {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  },
    {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  },
    {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  },
    {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  },
    {
    Product: "ASML",
    Quantity: 250,
	Price: 2,
    Currency: "GBP",
    Value: "£500",
	BEP: 1,
	DayAmount: 0.1,
    DayPerc: "10%",
	ProfitLoss: "£250",
  }

  
  ]

const tableColumnsSub = [
  {
    dataField: "Product",
    text: "Product",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '120px', textAlign: 'Left' };
        }
  },
    {
    dataField: "Quantity",
    text: "Quantity",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        }
  },
  {
    dataField: "Price",
    text: "Price",
    sort: true
  },
  {
    dataField: "Currency",
    text: "Currency",
    sort: true
  },
  {
    dataField: "Value",
    text: "Value",
    sort: true
  },
  {
    dataField: "BEP",
    text: "BEP",
    sort: true
  },
  {
    dataField: "DayAmount",
    text: "Day +/-",
    sort: true
  },
  {
    dataField: "DayPerc",
    text: "Day +/- %",
    sort: true
  },
  {
    dataField: "ProfitLoss",
    text: "Profit/Loss",
    sort: true
  }

]

const BorderedTable = () => {
  return (
      <ToolkitProvider
        keyField="Coverage"
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


const Tables = () => (
  <Container fluid className="p-0">
    <BorderedTable />

  </Container>
);

export default Tables;
