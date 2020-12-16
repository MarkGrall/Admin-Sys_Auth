import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2 } from "react-feather";
import {  Trash } from "react-feather";

const tableDataSub = [
  {
    PlanID: 1,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 2,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 3,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 4,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 5,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 6,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 7,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 8,
    PlanStartDate: "01/01/2015",
	ProductID: "PFB2",
	Product: "Complete Personal Pension",
	ProductGroup: "Personal Pension",
	Status: "In-Force",
  },
    {
    PlanID: 9,
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


const Tables = () => (
  <Container fluid className="p-0">
    <BorderedTable />
  </Container>
);

export default Tables;
