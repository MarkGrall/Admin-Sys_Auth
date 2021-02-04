import React, { useState } from "react";
import {Button,ButtonGroup, Card, CardBody, Container, Tooltip } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const OptionsBar = (FundID, props) => {
  const [tooltipOpenFund_Buy, setTooltipFund_Buy] = useState(false);
  const [tooltipOpenFund_Sell, setTooltipFund_Sell] = useState(false);

  const toggleFund_Buy = () => setTooltipFund_Buy(!tooltipOpenFund_Buy);
  const toggleFund_Sell = () => setTooltipFund_Sell(!tooltipOpenFund_Sell);
  
  return (
	<div className="mb-3">
      <ButtonGroup size="sm">
		  
		  <Button color="success" className="mt-3" id="TooltipFund_Buy">
			  <FontAwesomeIcon icon={faArrowCircleUp} />
		  </Button>
		  <Button color="danger" className="ml-1 mt-3" id="TooltipFund_Sell">
			  <FontAwesomeIcon icon={faArrowCircleDown} />
		  </Button>
		  
		  <Tooltip placement="bottom" isOpen={tooltipOpenFund_Buy} target="TooltipFund_Buy" toggle={toggleFund_Buy}>
			Buy
		  </Tooltip>
		  <Tooltip placement="bottom" isOpen={tooltipOpenFund_Sell} target="TooltipFund_Sell" toggle={toggleFund_Sell}>
			Sell
		  </Tooltip>
      </ButtonGroup>
    </div>
  );
}


const tableColumns = [
	{
    dataField: "Trade",
    text: "Trade",
	events: window.operateEvents,
	clickToSelect: false,
		headerStyle: (colum, colIndex) => {
          return { width: '45px', textAlign: 'Left' };
        }
  },
  
  {
    dataField: "Product",
    text: "Product",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '120px', textAlign: 'Left' };
        }
  },
  {
    dataField: "Qty",
    text: "Qty",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '50px', textAlign: 'Left' };
        }
  },
  {
    dataField: "Price",
    text: "Price",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '50px', textAlign: 'Left' };
        }
  
  },
  {
    dataField: "Currency",
    text: "Currency",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '65px', textAlign: 'Left' };
        }
  },
  {
    dataField: "Value",
    text: "Value €",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '70px', textAlign: 'Left' };
        }
  },
    {
    dataField: "BEP",
    text: "BEP",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '50px', textAlign: 'Left' };
        }
  },
    {
    dataField: "ChangeAmount",
    text: "Change €",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '70px', textAlign: 'Left' };
        }
  },
  {
    dataField: "ChangePercentage",
    text: "Change %",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '70px', textAlign: 'Left' };
        }
  },
  {
    dataField: "UnrealisedPL",
    text: "Unrealised P/L",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px', textAlign: 'Left' };
        }
  }

];


const tableData = [
  {
	Trade: <OptionsBar />,
	Product: "Citigroup",
	Qty: "40",
	Price: "$58.84",
    Currency: "USD",
    Value: "2,080.88",
    BEP: 51.75,
	ChangeAmount: -4.17,
	ChangePercentage:"-0.03%",
	UnrealisedPL: "+197.00 (+10.45%)"
  },
   {
    Trade: <OptionsBar />,
	Product: "Occidental Petroleum Corp",
	Qty: "200",
	Price: "$20.78",
    Currency: "USD",
    Value: "3,673.54",
    BEP: 18.99,
	ChangeAmount: -8.78,
	ChangePercentage:"-0.04%",
	UnrealisedPL: "+308.51 (+9.16%)"
  },
    {
	Trade: <OptionsBar />,
    Product: "Nikola Corporation",
	Qty: "50",
	Price: "$35.97",
    Currency: "USD",
    Value: "1,589.71",
    BEP: 33.34,
	ChangeAmount: -3.03,
	ChangePercentage:"0.00%",
	UnrealisedPL: "+118.48 (+8.05%)"
  },
    {
    Trade: <OptionsBar />,
	Product: "Iron Mountain",
	Qty: "100",
	Price: "$29.71",
    Currency: "USD",
    Value: "2,626.10",
    BEP: 27.83,
	ChangeAmount: -5.10,
	ChangePercentage:"0.00%",
	UnrealisedPL: "+146.10 (+5.89%)"
  },
    {
	Trade: <OptionsBar />,
    Product: "Winnebago Industries",
	Qty: "40",
	Price: "$65.06",
    Currency: "USD",
    Value: "2,300.29",
    BEP: 59.81,
	ChangeAmount: -5.10,
	ChangePercentage:"-0.03%",
	UnrealisedPL: "+119.63 (+5.48%)"
  },
    {
    Trade: <OptionsBar />,
	Product: "Royal Caribbean Cruises Ltd",
	Qty: "60",
	Price: "$69.64",
    Currency: "USD",
    Value: "3,693.34",
    BEP: 67.07,
	ChangeAmount: +3.57,
	ChangePercentage:"+0.28%",
	UnrealisedPL: "+129.47 (+3.63%)"
  },
    {
	Trade: <OptionsBar />,
    Product: "Gilead Sciences",
	Qty: "8",
	Price: "$76.71",
    Currency: "USD",
    Value: "542.44",
    BEP: 73.82,
	ChangeAmount: -1.32,
	ChangePercentage:"-0.05%",
	UnrealisedPL: "+10.58 (+1.99%)	"
  },
    {
	Trade: <OptionsBar />,
    Product: "Exxon Mobil Corp",
	Qty: "50",
	Price: "$ 53.13",
    Currency: "USD",
    Value: "2,348.11",
    BEP: 52.23,
	ChangeAmount: -2.27,
	ChangePercentage:"+0.09%",
	UnrealisedPL: "+34.94 (+1.51%)"
  },
    {
    Trade: <OptionsBar />,
	Product: "Intuit",
	Qty: "6",
	Price: "$288.23",
    Currency: "USD",
    Value: "1,528.62",
    BEP: 276.3766,
	ChangeAmount: -2.28,
	ChangePercentage:"+0.04%",
	UnrealisedPL: "+13.48 (+0.89%)"
  },
  
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
        keyField="Product"
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
				striped
				bordered={false}
				keyField="Product"
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
