import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2 } from "react-feather";
import {  Trash } from "react-feather";

import TranDetails from "./index";


const tableData = [
 {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
  {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
  {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
  {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
  {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
  {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
  {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  },
  {
    ProductCategory: "Pension Plan",
	PlanCount: 500,
	InForce: 100,
	OutOfForce: 400,
	FirstPlanRCD: "01/01/2015",
	LastPlanRCD: "01/01/2020"
  }
];

const tableColumns = [
  {
    dataField: "ProductCategory",
    text: "Product Category",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '120px', textAlign: 'Left' };
        }
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
        keyField="ProductCategory"
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
        keyField="ProductCategory"
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
				keyField="ProductCategory"
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
