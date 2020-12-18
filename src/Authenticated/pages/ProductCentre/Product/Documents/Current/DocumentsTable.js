import React, { useState, Component }  from "react";
import {Button, Card, CardBody, Col, Tooltip, Row  } from "reactstrap";


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
    dataField: "DocumentType",
    text: "Document Type"
    
  },
  {
    dataField: "DocDate",
    text: "Date Issued From",
	sort: true,
    headerStyle: () => {
      return { width: "15%" };
    }
  },
  {
    dataField: "EarlierVerison",
    text: "Earlier verison issued"
  },
  {
    dataField: "CustomerIssued",
    text: "Issued to customer"
    
  },

];

const tableOne = [
  {
    DocDate: "01/01/2019",
    DocumentType: "Product Terms & Conditions",
	EarlierVerison: "Yes",
	CustomerIssued: "Yes"
  },
  {
    DocDate: "01/01/2018",
    DocumentType: "Product Advisor Summary",
	EarlierVerison: "Yes",
	CustomerIssued: "No"
  }
]




let tableData = tableOne.map(obj => {
   let rObj = {}
   rObj.DocDate = obj.DocDate
   rObj.EarlierVerison = obj.EarlierVerison
   rObj.CustomerIssued = obj.CustomerIssued
   rObj.DocumentType =
   <Row >	
	<Col sm="1.5">
		  <FontAwesomeIcon icon={faFilePdf}  className="fa-2x mr-0 ml-2  text-danger"/> 
		</Col>
		<Col className="mt-1 "  >
			<p  >
			{obj.DocumentType}
			</p>
		</Col>
	</Row>
   return rObj
})



const selectRowProp = {
    mode: 'checkbox',
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
  
    return ( 

    <Card>
      <ToolkitProvider
        keyField="DocDate"
        data={tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
			  <Button  color="primary" className="my-2 ml-1 ">
					Exported Selected Documents
			  </Button>
			  <Button  color="secondary" className="my-2 ml-1 ">
					Add new version of selected document 
			  </Button>
			  <Button  color="warning" className="my-2 ml-1 ">
					Add New Document 
			  </Button>
			  <BootstrapTable
                {...props.baseProps}
                
                bordered={false}
				keyField="DocDate"
				data={tableData}
				columns={tableColumns}
                sortable={true}
                selectRow={ selectRowProp }
				
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
