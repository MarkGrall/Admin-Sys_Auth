import React  from "react";
import {Button, Card, CardBody, Col,  Row  } from "reactstrap";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";



const tableColumns = [

 {
    dataField: "DocDate",
    text: "Date",
	sort: true,
    headerStyle: () => {
      return { width: "15%" };
    }
  },
  {
    dataField: "DocumentType",
    text: "Document Type"
    
  }

];



const tableOne = [
  {
    DocDate: "01/01/2019",
    DocumentType: "2019 Annual Benefit Statement"
  },
  {
    DocDate: "01/01/2018",
    DocumentType: "2018 Annual Benefit Statement"
  }
]

let tableData = tableOne.map(obj => {
   let rObj = {}
   rObj.DocDate = obj.DocDate
   rObj.DocumentType =
   <Row >	
	<Col sm="1.5">
		  <FontAwesomeIcon icon={faFilePdf}  className="fa-3x mr-1  text-danger"/> 
		</Col>
		<Col className="mt-3 "  >
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
			  <h2>View your Plan Documents</h2>
			  <Button  color="primary" className="my-2 ml-1 ">
					Exported Selected Documents
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
