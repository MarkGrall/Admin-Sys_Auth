import React from "react";
import { Card, CardBody, Container , Row } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle } from "react-feather";

const tableData = [
  {
    ProductCode: "FPB2",
	ProductName: "Pension Plan",
	ProductGroup: "FPB",
    ProductCategory: "Regular Premium Pension Plan",
    Modified: "Yes",
    PlanCount: 250,
	InForcePlanCount: 150,
	OutOfForcePlanCount: 100,
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "Yes"
  }
];

const tableColumns = [
  {
    dataField: "ProductCode",
    text: "Product Code",
    sort: true

  },
  {
    dataField: "ProductName",
    text: "Product Name",
    sort: true
  },
  {
    dataField: "ProductGroup",
    text: "Product Group",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '90px', textAlign: 'Left' };
        }

  },
  {
    dataField: "ProductCategory",
    text: "Product Category",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        }
  },
  {
    dataField: "Modified",
    text: "Modified"
  },
  {
    dataField: "PlanCount",
    text: "Plan Count"
  },
  {
    dataField: "InForcePlanCount",
    text: "In-Force Plan Count"
  },
  {
    dataField: "OutOfForcePlanCount",
    text: "Out Of Force Plan Count"
  },
  {
    dataField: "RegularPremium",
    text: "Regular Premium"
  },
  {
    dataField: "Indexation",
    text: "Indexation"
  },
  {
    dataField: "SinglePremium",
    text: "Single Premium"
  },
  {
    dataField: "TopUp",
    text: "TopUp Allowed"
  },
  {
    dataField: "BidOfferSpread",
    text: "Bid Offer Spread"
  },
  {
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  },
{
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  },
  {
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  },
  {
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  }

];

const tableDataSub = [
  {
    UpdateDate: "01/01/2017",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "Yes"
  },
  {
    UpdateDate: "01/01/2018",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "Yes"
  },
  {
    UpdateDate: "01/01/2019",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "No",
	EarlyEncashmentCharge: "Yes"
  },
  {
    UpdateDate: "01/01/2020",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "No",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "No"
  }
  
];

const tableColumnsSub = [
  {
    dataField: "UpdateDate",
    text: "Update Date",
    sort: true

  },
  {
    dataField: "RegularPremium",
    text: "Regular Premium"
  },
  {
    dataField: "Indexation",
    text: "Indexation"
  },
  {
    dataField: "SinglePremium",
    text: "Single Premium"
  },
  {
    dataField: "TopUp",
    text: "TopUp Allowed"
  },
  {
    dataField: "BidOfferSpread",
    text: "Bid Offer Spread"
  },
  {
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  }


];


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


const ExpandableRowsTable = () => {
  
  const selectRow = {
    mode: "checkbox",
	clickToSelect: true,
	bgColor: "#f8f9fa",
	
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

  const NewProduct = props => {
	  const handleClick = () => {
		  props.onExport();
		};
		return (
		  <div>
			<button className="btn btn-primary mt-2" onClick={handleClick}>
			  New Product
			</button>
		  </div>
		);
  };

  return (
    <Card>
      <ToolkitProvider
        keyField="ProductCode"
        data={tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            
			<Row className="float-left ml-3">
				
				<NewProduct {...props.csvProps} />
				<div className="ml-2">
					<MyExportCSV {...props.csvProps} />
				</div>
			</Row>
			
            <CardBody>

              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                bordered={false}
				keyField="ProductCode"
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
