import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2 } from "react-feather";
import {  Trash } from "react-feather";

const tableDataSub = [
  {
    ErrorCode: "Error 2018-A",
    ErrorName: "Loyalty Bonus",
	IssueRecordedDate: "01/01/2018",
    IssueResolvedDate: "01/04/2018",
    ErrorCategory: "6 Month",
	ErrorStatus: "Resolved",
	Amount: "£10",
    RestitutionType: "Unit Adjustment"
  },
  {
    ErrorCode: "Error 2018-B",
    ErrorName: "Loyalty Bonus",
	IssueRecordedDate: "01/01/2018",
    IssueResolvedDate: "01/04/2018",
    ErrorCategory: "6 Month",
	ErrorStatus: "Resolved",
	Amount: "£10",
    RestitutionType: "Unit Adjustment"
  },
  {
    ErrorCode: "Error 2018-C",
    ErrorName: "Loyalty Bonus",
	IssueRecordedDate: "01/01/2018",
    IssueResolvedDate: "01/04/2018",
    ErrorCategory: "6 Month",
	ErrorStatus: "Resolved",
	Amount: "£10",
    RestitutionType: "Unit Adjustment"
  },
  {
    ErrorCode: "Error 2018-D",
    ErrorName: "Loyalty Bonus",
	IssueRecordedDate: "01/01/2018",
    IssueResolvedDate: "01/04/2018",
    ErrorCategory: "6 Month",
	ErrorStatus: "Resolved",
	Amount: "£10",
    RestitutionType: "Unit Adjustment"
  },
  {
    ErrorCode: "Error 2019-A",
    ErrorName: "Loyalty Bonus",
	IssueRecordedDate: "01/01/2018",
    IssueResolvedDate: "01/04/2018",
    ErrorCategory: "6 Month",
	ErrorStatus: "Resolved",
	Amount: "£10",
    RestitutionType: "Unit Adjustment"
  },
  {
    ErrorCode: "Error 2019-B",
    ErrorName: "Loyalty Bonus",
	IssueRecordedDate: "01/01/2018",
    IssueResolvedDate: "01/04/2018",
    ErrorCategory: "6 Month",
	ErrorStatus: "Resolved",
	Amount: "£10",
    RestitutionType: "Unit Adjustment"
  },
  {
    ErrorCode: "Error 2019-C",
    ErrorName: "Loyalty Bonus",
	IssueRecordedDate: "01/01/2018",
    IssueResolvedDate: "01/04/2018",
    ErrorCategory: "6 Month",
	ErrorStatus: "Resolved",
	Amount: "£10",
    RestitutionType: "Unit Adjustment"
  }

  ]

const tableColumnsSub = [
  {
    dataField: "ErrorCode",
    text: "Error Code",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '120px', textAlign: 'Left' };
        }
  },
    {
    dataField: "ErrorName",
    text: "Error Name",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        }
  },
  {
    dataField: "IssueRecordedDate",
    text: "Issue Recorded Date",
    sort: true
  },
  {
    dataField: "IssueResolvedDate",
    text: "Issue Resolved Date",
    sort: true
  },
  {
    dataField: "ErrorCategory",
    text: "Error Category",
    sort: true
  },
  {
    dataField: "ErrorStatus",
    text: "Error Status",
    sort: true
  },
  {
    dataField: "Amount",
    text: "Amount",
    sort: true
  },
  {
    dataField: "RestitutionType",
    text: "Restitution Type",
    sort: true
  }

]

const BorderedTable = () => {
  return (
      <ToolkitProvider
        keyField="ErrorCode"
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
