import React, { useState, Component }  from "react";
import { Card, CardBody, Col, Tooltip, Row  } from "reactstrap";


import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import {  MinusCircle, PlusCircle } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";


import jQuery from "jquery";

window.jQuery = jQuery;


const tableColumns = [

 {
    dataField: "DocDate",
    text: "Date",
	sort: true
  },
  {
    dataField: "DocumentType",
    text: "Document Type",
    sort: true
  },
  {
    dataField: "DocumentDownload",
    text: "Document Download",
    sort: false
  }
];

const OptionsBar = (FundID, props) => {
  const [tooltipOpenPDF, setTooltipOpenPDF] = useState(false);
  const togglePDF = () => setTooltipOpenPDF(!tooltipOpenPDF);
  
  return (
	<div className="mb-3">
	  <FontAwesomeIcon icon={faFilePdf}  className="fa-3x m-2 text-danger" id="TooltipPDF" />
	  <Tooltip placement="bottom" isOpen={tooltipOpenPDF} target="TooltipPDF" toggle={togglePDF}>
		  Annual Benefit Statement
	  </Tooltip>
    </div>
  );
}

const tableData = [
  {
    DocDate: "01/01/2019",
    DocumentType: "Annual Benefit Statement",
	DocumentDownload:
	<OptionsBar />
  },
  {
    DocDate: "01/01/2018",
    DocumentType: "Annual Benefit Statement",
	DocumentDownload:
	<OptionsBar />
  },
  {
    DocDate: "01/01/2017",
    DocumentType: "Annual Benefit Statement",
	DocumentDownload:
	<OptionsBar />
  },
  {
    DocDate: "01/01/2016",
    DocumentType: "Annual Benefit Statement",
	DocumentDownload:
	<OptionsBar />
  },
  {
    DocDate: "01/01/2015",
    DocumentType: "Annual Benefit Statement",
	DocumentDownload:
	<OptionsBar />
  }
];


const selectRowProp = {
    mode: 'checkbox',
    hideSelectColumn: true,
    clickToSelect: true   
};

class ExpandableRowsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: [0, 1] };
  }

  render() { 
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
        keyField="FundID"
        data={tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
			  <Row>
				<Col>
				<h2>View your Plan Documents</h2>
				</Col>
			    <Col>

              </Col>
			  </Row>
			  <BootstrapTable
                {...props.baseProps}
                
                bordered={false}
				keyField="FundID"
				data={tableData}
				columns={tableColumns}
                sortable={true}
                
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
};
	

export default ExpandableRowsTable;
