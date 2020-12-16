import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table, Row, Col,
UncontrolledDropdown,   DropdownItem, DropdownMenu, DropdownToggle,
} from "reactstrap";
import { MoreHorizontal } from "react-feather";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const TableColumns = [
	  {
		dataField: "BankHoliday",
		text: "Bank Holiday Date",
		sort: true		
	  }
	];

const TableData = [
  { BankHoliday: "28/12/2020" },
  { BankHoliday: "25/12/2020" },
  { BankHoliday: "26/10/2020" },
  { BankHoliday: "03/08/2020" },
  { BankHoliday: "01/06/2020" },
  { BankHoliday: "04/05/2020" },
  { BankHoliday: "13/04/2020" },
  { BankHoliday: "17/03/2020" },
  { BankHoliday: "01/01/2020" },
  { BankHoliday: "28/12/2019" },
  { BankHoliday: "25/12/2019" },
  { BankHoliday: "26/10/2019" },
  { BankHoliday: "03/08/2019" },
  { BankHoliday: "01/06/2019" },
  { BankHoliday: "04/05/2019" },
  { BankHoliday: "13/04/2019" },
  { BankHoliday: "17/03/2019" },
  { BankHoliday: "01/01/2019" }
]

const BankHoliday_Dates = () => {
  
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
        keyField="BankHoliday"
        data={TableData}
        columns={TableColumns}
        exportCSV
      >
        {props => (
          <div>
            
			<Row className="float-left ml-2 mb-1">
				<div className="ml-2">
					<MyExportCSV {...props.csvProps} />
				</div>
			</Row>
			
            <CardBody>

              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                bordered={false}
				keyField="BankHoliday"
				data={TableData}
				columns={TableColumns}
                
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


const CurrentTable = () => (
  <Container fluid className="p-0">
	<Card className="card-margin">
		<Col xl="4">
			<Card className="card-margin mt-3">
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
					  
					  Bank Holiday Dates
				  </CardTitle>
				</CardHeader>

				<CardBody>
					<BankHoliday_Dates  />	
				</CardBody>
			</Card>
		</Col>
	</Card>
  </Container>
);


export default CurrentTable;
