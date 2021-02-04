import React, { useState } from "react";
import {Button,ButtonGroup, Card, CardBody, CardHeader, CardTitle, Container,Form, Label, Tooltip,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledButtonDropdown, Modal, ModalHeader, ModalBody, ModalFooter
  } from "reactstrap";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import filterFactory, { textFilter, selectFilter }  from 'react-bootstrap-table2-filter';

import { MinusCircle, PlusCircle } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faStar, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const selectOptions = {
  1: "1",
  2: "2",
  3: "3"
};


const tableColumns = [

 {
    dataField: "FundID",
    text: "Fund ID",
	sort: true,
	filter: textFilter(),
	headerStyle: (colum, colIndex) => {
	return { width: '9%', textAlign: 'Left' };
        }	
  },
  {
    dataField: "FundName",
    text: "Fund Name",
    sort: true,
	filter: textFilter(),
	
	headerStyle: (colum, colIndex) => {
	return { width: '19%', textAlign: 'Left' };
	},
		
	dataTarget:"#orderModal",
	events: {
    onClick: (e, column, columnIndex, row, rowIndex) => { 
    }}
	
  },
  
  {
    dataField: "Risk",
    text: "Fund Risk Level",
    sort: true,
	
	formatter: cell => selectOptions[cell],
	filter: selectFilter({
    options: selectOptions
	}),
	
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
	}
	
  },
  {
    dataField: "AMC",
    text: "AMC",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "Mth1",
    text: "1 Mth",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "Mth3",
    text: "3 Mth",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "YTD",
    text: "YTD",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "Year1",
    text: "1 Year",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "Year3",
    text: "3 Year",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "Year5",
    text: "5 Year",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "Year10",
    text: "10 Year",
    sort: true,
	headerStyle: (colum, colIndex) => {
	return { width: '8%', textAlign: 'Left' };
        }
  },
  {
    dataField: "Compare",
    text: "Options",
	events: window.operateEvents,
	clickToSelect: false,
	headerStyle: (colum, colIndex) => {
	return { width: '10%', textAlign: 'Left' };
        }
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
    Risk: "2",
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
    Risk: "3",
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

const form1_filter = () => {
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
		filter={ filterFactory() }
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
			  <div className="float-left">
				 <form1_filter/>
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
				filter={ filterFactory() }
				
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
