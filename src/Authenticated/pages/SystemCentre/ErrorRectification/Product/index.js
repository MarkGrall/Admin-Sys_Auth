import React from "react";
import { CardBody,  Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

const tableDataSub = [
  {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
    {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
    {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
    {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
    {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
    {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
    {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
    {
    ProductCategory: "Pension Plan",
    ProductGroup: "FPB",
	Product: "FPB2",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  }
  ]

const tableColumnsSub = [
  {
    dataField: "ProductCategory",
    text: "Product Category",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '120px', textAlign: 'Left' };
        }
  },
    {
    dataField: "ProductGroup",
    text: "Product Group",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        }
  },
  {
    dataField: "Product",
    text: "Product",
    sort: true
  },
  {
    dataField: "PlanCount",
    text: "Plan Count",
    sort: true
  },
  {
    dataField: "InForce",
    text: "In-Force",
    sort: true
  },
  {
    dataField: "OutOfForce",
    text: "Out Of Force",
    sort: true
  },
  {
    dataField: "FirstPlanRCD",
    text: "First Plan RCD",
    sort: true
  },
  {
    dataField: "LastPlanRCD",
    text: "Last Plan RCD",
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
