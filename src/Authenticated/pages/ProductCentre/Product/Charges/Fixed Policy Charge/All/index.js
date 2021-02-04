import React  from "react";
import { Card, CardBody,CardHeader,CardTitle, Container,  Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

//
import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";


import ModelIcon from "./Modal/Icon/Model_Icon";
//import ModelIcon from "./Modal/Icon/IconTest";

import ModelButtonNewProduct from "./Modal/ModalButton - New Product";

const BLabel="Fixed Policy Charge"

let ValueString = null; 
let ValueDate = null; 

let tableData = [
  {
	id:1,
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£4",
	Frequency: "Annual",
	ArrearsAdvance: "Arrears",
	ChargeTimingType: "Policy Anniversary", // Policy Anniversary - Monthly - PA or 
	ChargeTimingTypeSpecDay: "",
	ChargeTimingTypeSpecMonth: "",
	ChargeDate: "Policy Anniversary",
	CurrentCharge: "No1",
	Used: "Yes",
  	EffectiveDateFromString1: "22/01/2015",
    EffectiveDateToString1: "04/08/2019",
	RunDateFromString1: "01/01/2020",
	RunDateToString1: "",
	EffectiveDateFromString2: "2015-01-22",
    EffectiveDateToString2: "2019-08-04",
	RunDateFromString2: "2020-01-01",
	RunDateToString2: "",
	EffectiveDateFromDate: null,
    EffectiveDateToDate: null,
	RunDateFromDate: null,
	RunDateToDate: null
  },
  {
	id:2,  
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£3",
	Frequency: "Monthly",
	ArrearsAdvance: "Advance",
	ChargeTimingType: "Specified Date",
	ChargeTimingTypeSpecDay: "1st",
	ChargeTimingTypeSpecMonth: "",
	ChargeDate: "1st of Month",
	CurrentCharge: "No1",
  	Used: "Yes",
	EffectiveDateFromString1: "01/01/2017",
    EffectiveDateToString1: "01/01/2019",
	RunDateFromString1: "01/01/2018",
	RunDateToString1: "01/01/2019",
	EffectiveDateFromString2: "2017-01-01",
    EffectiveDateToString2: "2019-01-01",
	RunDateFromString2: "2018-01-01",
	RunDateToString2: "2019-01-01",
	EffectiveDateFromDate: null,
    EffectiveDateToDate: null,
	RunDateFromDate: null,
	RunDateToDate: null
  },
  {
	id:3,  
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£5",
	Frequency: "Quarterly",
	ArrearsAdvance: "Advance",
	ChargeTimingType: "Specified Date",
	ChargeTimingTypeSpecDay: "1st",
	ChargeTimingTypeSpecMonth: "January",
	ChargeDate:  "1st January", 
	CurrentCharge: "Yes1",
	Used: "Yes",
  	EffectiveDateFromString1: "01/01/2018",
    EffectiveDateToString1: "",
	RunDateFromString1: "01/01/2019",
	RunDateToString1: "",
	EffectiveDateFromString2: "2018-01-01",
    EffectiveDateToString2: "",
	RunDateFromString2: "2019-01-01",
	RunDateToString2: "",
	EffectiveDateFromDate: null,
    EffectiveDateToDate: null,
	RunDateFromDate: null,
	RunDateToDate: null
  },
{
	id:4,
	AmountOrPercentage: "Percentage",
	ChargeAmountOrPercentage: "0.5%",
	Frequency: "Annual",
	ArrearsAdvance: "Arrears",
	ChargeTimingType: "Specified Date",
	ChargeTimingTypeSpecDay: "1st",
	ChargeTimingTypeSpecMonth: "January",
	ChargeDate: "1st January",
	CurrentCharge: "Yes1",
	Used: "No",
  	EffectiveDateFromString1: "01/01/2019",
    EffectiveDateToString1: "",
	RunDateFromString1: "01/01/2019",
	RunDateToString1: "",
		EffectiveDateFromString2: "2019-01-01",
    EffectiveDateToString2: "",
	RunDateFromString2: "2019-01-01",
	RunDateToString2: "",
	EffectiveDateFromDate: null,
    EffectiveDateToDate: null,
	RunDateFromDate: null,
	RunDateToDate: null
  }
]

let TodaysDate = null;
let RunDateFromString1 = null;
let RunDateToString1 = null;
let EffectiveDateFromString1 = null;
let EffectiveDateToString1 = null;
let RunDateFromDate = null;
let RunDateToDate = null;
let EffectiveDateFromDate = null;
let EffectiveDateToDate = null;
let CurrentCharge = null;

class ExpandableRowsTable extends React.Component {
    constructor(props, context) {
    super(props, context);
	this.state = { 
			tableData: tableData,
			Up: null
		};
		this.handleCallback = this.handleCallback.bind(this);
    }
	
    componentDidMount() {
		TodaysDate = new Date();  
		let newProducts = [...this.state.tableData];
		newProducts = newProducts.map((d) => {
			
			//Eff From
			var dateParts = d.EffectiveDateFromString1.split("/");
		    EffectiveDateFromDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			//Eff To
			if( d.EffectiveDateToString1 === "" ) {
				EffectiveDateToString1 ="01/01/3000"
			} else {
				EffectiveDateToString1 = d.EffectiveDateToString1
			}
			var dateParts = EffectiveDateToString1.split("/");
			EffectiveDateToDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			//Run From
			var dateParts = d.RunDateFromString1.split("/");
		    RunDateFromDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			//Run To
			if( d.RunDateToString1 === "" ) {
				RunDateToString1 ="01/01/3000"
			} else {
				RunDateToString1 = d.RunDateToString1
			}
			var dateParts = RunDateToString1.split("/");
			RunDateToDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			CurrentCharge = "No"			
			if (TodaysDate >= RunDateFromDate ) {
				if ( TodaysDate <= RunDateToDate ) {	
					if (TodaysDate >= EffectiveDateFromDate ) {
						if ( TodaysDate <= EffectiveDateToDate ) {
							CurrentCharge = "Yes"
						}
					}
				}
			}
			
			d.EffectiveDateFromDate = EffectiveDateFromDate
			d.EffectiveDateToDate = EffectiveDateToDate
			d.RunDateFromDate = RunDateFromDate
			d.RunDateToDate = RunDateToDate
			return {
					...d,				
					CurrentCharge: CurrentCharge,
				}
			
		});
		this.setState(curr => ({ ...curr, tableData: newProducts }));
		this.setState({Up: "1"}); 
		//console.log("111", this.state)
    }
	
 /*	UpdateCurrentCharge = (d) => {
		//console.log( "Update" , d)

		RunDateFromString1 = new Date(d.RunDateFromString1)
		EffDateFrom = new Date(d.EffectiveDateFromString1)
		
		if( d.RunDateToString1 === "" ) {
			RunDateToString1 = new Date("01/01/3000")
		}  else {
			RunDateToString1 = new Date(d.RunDateToString1)
		}
		
		if( d.EffectiveDateToString1 === "" ) {
			EffDateTo = new Date("01/01/3000")
		}  else {
			EffDateTo = new Date(d.EffectiveDateToString1)
		}
		
		CurrentCharge = "No"			
		if (TodaysDate >= RunDateFromString1 ) {
			if ( TodaysDate <= RunDateToString1 ) {	
				if (TodaysDate >= EffDateFrom ) {
					if ( TodaysDate <= EffDateTo ) {
						CurrentCharge = "Yes"
					}
				}
			}
		}
		
		if (CurrentCharge === "Yes") {
			return {
				...d,
				CurrentCharge: "Yes",
			}
		} else {
			return {
				...d,
				CurrentCharge: "No",
			}
		}
		
	  return d;
	}
*/
	
	handleCallbackNewProduct = (childData) =>{	
		console.log("4", childData)
		TodaysDate = new Date();
		CurrentCharge = "No"			
		if (TodaysDate >= childData.RunDateFromDate ) {
			if ( TodaysDate <= RunDateToDate ) {	
				if (TodaysDate >= childData.EffectiveDateFromDate ) {
					if ( TodaysDate <= EffectiveDateToDate ) {
						CurrentCharge = "Yes"
					}
				}
			}
		}
		childData.CurrentCharge = CurrentCharge
				
		childData.id = this.state.tableData.length + 1	
		this.state.tableData.push(childData);
		this.setState({Up: "1"}); //Dummy state to force the refresh of the state and render the page

	  };
	
	handleCallback = (childData) =>{		
		//console.log("Modal - Submit ", this.state )
		
		let newProducts = [...this.state.tableData];
		newProducts = newProducts.map((d) => {
		  if (d.id === childData.id) {	
			
			TodaysDate = new Date();
			CurrentCharge = "No"			
			if (TodaysDate >= childData.RunDateFromDate ) {
				if ( TodaysDate <= childData.RunDateToDateDate ) {	
					if (TodaysDate >= childData.EffectiveDateFromDate ) {
						if ( TodaysDate <= childData.EffectiveDateToDate ) {
							CurrentCharge = "Yes"
						}
					}
				}
			}

			return {
			  ...d,
			  AmountOrPercentage: childData.AmountOrPercentage,
			  ChargeAmountOrPercentage: childData.ChargeAmountOrPercentage,
			  Frequency: childData.Frequency,
			  ArrearsAdvance: childData.ArrearsAdvance,
			  ChargeTimingType: childData.ChargeTimingType,
			  ChargeTimingTypeSpecDay: childData.ChargeTimingTypeSpecDay,
			  ChargeTimingTypeSpecMonth: childData.ChargeTimingTypeSpecMonth,
			  ChargeDate: childData.ChargeDate,
			  
			  CurrentCharge: CurrentCharge,
			  
			  EffectiveDateFromString1: childData.EffectiveDateFromString1,
			  EffectiveDateToString1: childData.EffectiveDateToString1,
			  RunDateFromString1: childData.RunDateFromString1,
			  RunDateToString1: childData.RunDateToString1,
			  
			  EffectiveDateFromString2: childData.EffectiveDateFromString2,
			  EffectiveDateToString2: childData.EffectiveDateToString2,
			  RunDateFromString2: childData.RunDateFromString2,
			  RunDateToString2: childData.RunDateToString2,
			  
			  RunDateFromDate: childData.RunDateFromDate,
			  RunDateToDateDate: childData.RunDateToDateDate,
			  EffectiveDateFromDate: childData.EffectiveDateFromDate,
			  EffectiveDateToDate: childData.EffectiveDateToDate,
			}
		  }
		  
		  return d;
		});
		this.setState(curr => ({ ...curr, tableData: newProducts }));
		this.setState({Up: "1"}); //Dummy state to force the refresh of the state and render the page
	}
	
	handleCallbackDeleteRow = (childData) =>{
		this.state.tableData.splice( childData.id - 1, 1);
		this.setState({Up: "2"}); //Dummy state to force the refresh of the state and render the page
		//console.log("Delete state A", this.state )
	}
	
	render() { 
	//console.log("Render props ", this.props )
	//console.log("Render state", this.state )
		//console.log("IndexRender", this.state)
		let tableColumns = [
		  {
			dataField: "AmountOrPercentage",
			text: "Amount or Percentage",
			sort: true
		  },
		  {
			dataField: "ChargeAmountOrPercentage",
			text: "Charge",
			sort: true
		  },
		  {
			dataField: "Frequency",
			text: "Charge Frequency",
			sort: true
		  },
		  
		  {
			dataField: "ArrearsAdvance",
			text: "Arrears or Advance",
			sort: true
		  },
		  
		  {
			dataField: "ChargeDate",
			text: "Charge Timing",
			sort: true
		  },
		  
		  {
			dataField: "CurrentCharge",
			text: "Current Charge",
			sort: true
		  },
		  {
			dataField: "Used",
			text: "Used",
			sort: true
		  },
		  {
			dataField: "EffectiveDateFromString1",
			text: "Effective Date From",
			sort: true
		  },
		  {
			dataField: "EffectiveDateToString1",
			text: "Effective Date To",
			sort: true
		  },
		  {
			dataField: "RunDateFromString1",
			text: "Run Date From",
			sort: true
		  },
		  {
			dataField: "RunDateToString1",
			text: "Run Date To",
			sort: true
		  },
		  
			{ dataField: "edit", 
				text: "Edit",
				sort: false,
				formatter: (cell, row, rowIndex, extraData) => (
					< div 
						   style={{ textAlign: "center",
							  cursor: "pointer",
							 lineHeight: "normal" }}
					>
						<ModelIcon parentCallback = {this.handleCallback} parentCallbackDelete = {this.handleCallbackDeleteRow} buttonLabel={BLabel} Row={row}  / >
					</div> 
				),
				headerAttrs: { width: 50 },
				attrs: { width: 50, class: "EditRow" } 
			  }
		  
		];
	
    const MyExportCSV = props => {
    const handleClick = () => {
      props.onExport();
    };
    
	return (
      <div>
        <Row>
		<button className="btn btn-secondary mt-0 mb-1" onClick={handleClick}>
          Export
        </button>
		<ModelButtonNewProduct parentCallback = {this.handleCallbackNewProduct}   BLabel={BLabel}  / >
		</Row>
      </div>
    );
  };

    return ( 

      <ToolkitProvider
        keyField="DocDate"
        data={this.state.tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
          <div>
            <CardBody>
				<MyExportCSV {...props.csvProps} />

			  <BootstrapTable
			    Bootstrap4 
                {...props.baseProps}
                
                bordered={false}
				keyField="DocDate"
				data={this.state.tableData}
				columns={tableColumns}
                sortable={true}
                
              />
            </CardBody>
          </div>
        )}
      </ToolkitProvider>

  );
  };
};
	

const FixedCharge = () => (
  <Container fluid className="p-0">
	<Card className="card-margin">
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
			  Fixed Policy Charge
		  </CardTitle>
		</CardHeader>
		<CardBody>
		  <ExpandableRowsTable />

		</CardBody>
	</Card>
  </Container>
);





export default FixedCharge;
