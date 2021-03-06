import React, { useState } from "react";
import {Button,ButtonGroup, Card, CardBody, CardHeader, CardTitle, Container,Form,FormGroup, Input, Label, Tooltip,
  CustomInput,DropdownItem, DropdownMenu, DropdownToggle,Row,UncontrolledButtonDropdown, Modal, ModalHeader, ModalBody, ModalFooter
  } from "reactstrap";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { Activity, Edit2, MinusCircle, PlusCircle } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faStar,
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { Form as FinalForm, Field } from 'react-final-form'
import jQuery from "jquery";
import PropTypes from 'prop-types';
import FundModals from "./FundPricesModal";

const $ = jQuery;
window.jQuery = jQuery;


const tableColumns = [

 {
    dataField: "FundID",
    text: "Fund ID"
  },
  {
    dataField: "FundName",
    text: "Fund Name",
    sort: true,
	dataTarget:"#orderModal",
	events: {
    onClick: (e, column, columnIndex, row, rowIndex) => { 
	

    }}
  },
  {
    dataField: "Risk",
    text: "Fund Risk Level",
    sort: true
  },
  {
    dataField: "AMC",
    text: "AMC",
    sort: true
  },
  {
    dataField: "Mth1",
    text: "1 Mth",
    sort: true
  },
  {
    dataField: "Mth3",
    text: "3 Mth",
    sort: true
  },
  {
    dataField: "YTD",
    text: "YTD",
    sort: true
  },
  {
    dataField: "Year1",
    text: "1 Year",
    sort: true
  },
  {
    dataField: "Year3",
    text: "3 Year",
    sort: true
  },
  {
    dataField: "Year5",
    text: "5 Year",
    sort: true
  },
  {
    dataField: "Year10",
    text: "10 Year",
    sort: true
  },
  {
    dataField: "Compare",
    text: "Options",
	events: window.operateEvents,
	clickToSelect: false,

  }
];

const OptionsBar = (FundID, props) => {
  const [tooltipOpenFund, setTooltipOpenFund] = useState(false);
  const [tooltipOpenFav, setTooltipOpenFav] = useState(false);
  const [tooltipOpenPDF, setTooltipOpenPDF] = useState(false);

  const toggleFund = () => setTooltipOpenFund(!tooltipOpenFund);
  const toggleFav = () => setTooltipOpenFav(!tooltipOpenFav);
  const togglePDF = () => setTooltipOpenPDF(!tooltipOpenPDF);
  
  return (
	<div className="mb-3">
      <ButtonGroup size="sm">
		  
		  <Button color="primary" className="mr-1 mb-1" id="TooltipFund">
			  <FontAwesomeIcon icon={faChartLine} />
		  </Button>
		  <Button color="secondary" className="mr-1 mb-1" id="TooltipFav">
			  <FontAwesomeIcon icon={faStar} />
		  </Button>
		  <Button color="warning" className="mr-1 mb-1" id="TooltipPDF">
			  <FontAwesomeIcon icon={faFilePdf} />
		  </Button>
		  
		  <Tooltip placement="bottom" isOpen={tooltipOpenFund} target="TooltipFund" toggle={toggleFund}>
			Compare Funds for comparison
		  </Tooltip>
		  <Tooltip placement="bottom" isOpen={tooltipOpenFav} target="TooltipFav" toggle={toggleFav}>
			Mark or remove as favourite
		  </Tooltip>
		  <Tooltip placement="bottom" isOpen={tooltipOpenPDF} target="TooltipPDF" toggle={togglePDF}>
			  tableData.FundID
			  FundID.value
		  </Tooltip>
      </ButtonGroup>
    </div>
  );
}

const tableData = [
  {
    FundID: "12356430",
    FundName: "Emerging Market Equity Income Fund",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare:
	<OptionsBar />
  },
  {
    FundID: "12356431",
    FundName: "High Yield Income Fund",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare: <OptionsBar FundID/>
  },
  {
    FundID: "12356432",
    FundName: "Managed Fund 1",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare: <OptionsBar/>
  },
  {
    FundID: "12356433",
    FundName:  "Managed Fund 2",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare: <OptionsBar/>
  },
  {
    FundID: "12356434",
    FundName: "Managed Fund 3",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare:<OptionsBar/>
  },
  {
    FundID: "12356435",
    FundName:  "Managed Fund 4",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare:<OptionsBar/>
  },
  {
    FundID: "12356436",
    FundName:  "Managed Fund 5",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare:<OptionsBar/>
  },
  {
    FundID: "12356437",
    FundName:  "Managed Fund 6",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare:<OptionsBar/>
  },
  {
    FundID: "12356438",
    FundName:  "Managed Fund 7",
    Risk: "1",
    AMC: "0.8% - 1.20%",
	Mth1: "1.50%",
	Mth3: "3.12%",
	YTD: "5.12%",
	Year1: "6.12%",
	Year3: "4.37%",
	Year5: "5.42%",
	Year10: "3.13%",
	Compare:<OptionsBar/>
  }  
];

const FundsAvailable = [
  {
    name: "Funds available to my Policies ",
    value: "secondary"
  }
]
const AllFunds = [
  {
    name: "All Funds ",
    value: "primary"
  }
]

const Policies = [
  {
    value: "Policy 1 - Investment"
  },
  {
    value: "Policy 2 - Pension"
  }
]

const Form1_Filter = () => {

    const handleClick = (x) => {
     DropdownToggle.value = (x)
    };
return (
<Form>
	<div className="mb-3">

	  {AllFunds.map((color, index) => (
          <Button key={index} color={color.value} className="mr-1 mb-1">
            {color.name}
          </Button>
        ))}
	  {FundsAvailable.map((color, index) => (
          <UncontrolledButtonDropdown key={index} className="mr-1 mb-1">
            <DropdownToggle caret color={color.value}>
              {color.name}
            </DropdownToggle>
            <DropdownMenu key={index}>
			    {Policies.map((color, index) => (
				  <DropdownItem key={index} >
					{color.value}
				  </DropdownItem>
				))}
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        ))}

	</div>
</Form>	
);
};

const colors = [

  {
    name: "Success",
    value: "success"
  },
  {
    name: "Danger",
    value: "danger"
  },
  {
    name: "Warning",
    value: "warning"
  }
];

const sizes = [
  {
    name: "Large",
    value: "lg"
  }
];

function Modal_Fund_Function()
{
return(
<Form>
	  <Modal
		isOpen={true}
		size="lg"
	  >
		<ModalHeader>
		  Emerging Market Equity Income Fund
		</ModalHeader>
		<ModalBody className="text-center m-3">
		  <p className="mb-0">
			Use Bootstrap’s JavaScript modal plugin to add dialogs to
			your site for lightboxes, user notifications, or completely
			custom content.
		  </p>
		</ModalBody>
		<ModalFooter>
		  <Button color="primary">
			Close
		  </Button>{" "}
		</ModalFooter>
	  </Modal>
</Form>
)	
}
const Modal_Fund = () => {
return(
<Form>
	  <Modal
		isOpen={true}
		size="lg"
	  >
		<ModalHeader>
		  Emerging Market Equity Income Fund
		</ModalHeader>
		<ModalBody className="text-center m-3">
		  <p className="mb-0">
			Use Bootstrap’s JavaScript modal plugin to add dialogs to
			your site for lightboxes, user notifications, or completely
			custom content.
		  </p>
		</ModalBody>
		<ModalFooter>
		  <Button color="primary">
			Close
		  </Button>{" "}
		</ModalFooter>
	  </Modal>
</Form>
)
};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
     alert(`You clicked row id: ${row.id}, row index: ${rowIndex}`);
	  
  }
};

const selectRow = {
  onClick: (e, row, rowIndex, FundID) => {
     alert(`You clicked row id: ${row.id}, ${FundID} row index: ${rowIndex}`);
	  
  }
};

const selectRowProp3 = {
    mode: 'checkbox',
    hideSelectColumn: true,
    bgColor: function (row, isSelect) {
        if (isSelect) {
            alert( 'yes' )
            const { id } = { row };
      
            if (id < 2) return 'blue';
            else if (id < 4) return 'red';
            else return 'yellow';
        }
        return null;
    }
};

function onRowSelect4(row, isSelected, isSelect, e) {
    let rowStr = '';
    for (const prop in row) {
        rowStr += prop + ': "' + row[prop] + '"';
    }
    console.log(e);
    rowStr = row['FundID']
    alert(`is selected: ${rowStr}`)
    // alert(`is selected: ${isSelected}, ${isSelect}, ${rowStr}`);
}

const selectRowProp2 = {
    mode: 'checkbox',
    bgColor: "pink", // you should give a bgcolor, otherwise, you can't regonize which row has been selected
    hideSelectColumn: true,  // enable hide selection column.
    clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
};

function onRowSelect(row,  isSelected, isSelect, e) {
    let rowStr = '';
    rowStr = row['FundID'] 
    alert(`is selected: ${rowStr}`)
   // alert(`is selected: ${isSelected}, ${isSelect}, ${rowStr}`);
}


const selectRowProp = {
    mode: 'checkbox',
    hideSelectColumn: true,
    clickToSelect: true,
    onSelect: onRowSelect
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
	<CardHeader>
		<CardTitle tag="h5">Fund Centre</CardTitle>
	  </CardHeader>
      <ToolkitProvider
        keyField="FundID"
        data={tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
			  <div className="float-left">
				 <Form1_Filter/>
			  </div>
			  <div className="float-right">
				 <MyExportCSV {...props.csvProps} />
			  </div>
              <BootstrapTable
                {...props.baseProps}
                
                bordered={false}
				keyField="FundID"
				data={tableData}
				columns={tableColumns}
                //rowEvents={rowEvents}
                sortable={true}
                selectRow={selectRowProp}
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
	
const Tables = () => (

  <Container fluid className="p-0">
   <Card>
	<CardBody>
	  <CardHeader>
		<CardTitle tag="h5">Fund Centre</CardTitle>
	  </CardHeader>
		
	  <Form>
		<Label sm={4} className="text-sm-Left">
			Filter funds listed by	
		</Label>  
	
	
		
			<Button
			color="primary"
			onClick={() => <Modal_Fund />}
			className="mr-1"
			>
			test
			</Button>
		
	  </Form>	
	  

	
	</CardBody>
</Card>
  </Container>
);

class ModalSizes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle = index => {
    this.setState(state => ({
      [index]: !state[index]
    }));
  };
  
   testing(x){
  alert ("aaathe")
   };  
  
  componentWillMount() {
    colors.forEach((color, index) => {
      this.setState(() => ({
        [index]: false
      }));
    });
  }

  render() {
    return (
      <Card>

        <CardBody className="text-center">


          {sizes.map((size, index) => (
            <React.Fragment key={index}>
              <Button
                color="primary"
                onClick={() => this.toggle(index)}
                className="mr-1"
              >
                {size.name}
              </Button>
              <Modal
                isOpen={this.state[index]}
                toggle={() => this.toggle(index)}
                size={size.value}
              >
                <ModalHeader toggle={() => this.toggle(index)}>
                  {size.name} modal
                </ModalHeader>
                <ModalBody className="text-center m-3">
                  <p className="mb-0">
                    Use Bootstrap’s JavaScript modal plugin to add dialogs to
                    your site for lightboxes, user notifications, or completely
                    custom content.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => this.toggle(index)}>
                    Close
                  </Button>{" "}
                  <Button color="primary" onClick={() => this.toggle(index)}>
                    Save changes
                  </Button>
                </ModalFooter>
              </Modal>
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button >
          Open the modal
        </button>

        <ModalSizes 
          >
        </ModalSizes>
      </div>
    );
  }
}

export default ExpandableRowsTable;
