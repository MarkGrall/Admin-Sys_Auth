import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

//
import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import {  MinusCircle, PlusCircle } from "react-feather";

import Model_Icon from "./Modal/Icon/Model_Icon";
//import Model_Icon from "./Modal/Icon/Icon_Test";

import ModelButton_NewProduct from "./Modal/ModalButton - New Product";

const B_Label="Fixed Policy Charge"

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
	ChargeTimingType_Spec_Day: "",
	ChargeTimingType_Spec_Month: "",
	ChargeDate: "Policy Anniversary",
	CurrentCharge: "No1",
	Used: "Yes",
  	EffectiveDateFrom_String1: "22/01/2015",
    EffectiveDateTo_String1: "04/08/2019",
	RunDateFrom_String1: "01/01/2020",
	RunDateTo_String1: "",
	EffectiveDateFrom_String2: "2015-01-22",
    EffectiveDateTo_String2: "2019-08-04",
	RunDateFrom_String2: "2020-01-01",
	RunDateTo_String2: "",
	EffectiveDateFrom_Date: null,
    EffectiveDateTo_Date: null,
	RunDateFrom_Date: null,
	RunDateTo_Date: null
  },
  {
	id:2,  
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£3",
	Frequency: "Monthly",
	ArrearsAdvance: "Advance",
	ChargeTimingType: "Specified Date",
	ChargeTimingType_Spec_Day: "1st",
	ChargeTimingType_Spec_Month: "",
	ChargeDate: "1st of Month",
	CurrentCharge: "No1",
  	Used: "Yes",
	EffectiveDateFrom_String1: "01/01/2017",
    EffectiveDateTo_String1: "01/01/2019",
	RunDateFrom_String1: "01/01/2018",
	RunDateTo_String1: "01/01/2019",
	EffectiveDateFrom_String2: "2017-01-01",
    EffectiveDateTo_String2: "2019-01-01",
	RunDateFrom_String2: "2018-01-01",
	RunDateTo_String2: "2019-01-01",
	EffectiveDateFrom_Date: null,
    EffectiveDateTo_Date: null,
	RunDateFrom_Date: null,
	RunDateTo_Date: null
  },
  {
	id:3,  
	AmountOrPercentage: "Amount",
	ChargeAmountOrPercentage: "£5",
	Frequency: "Quarterly",
	ArrearsAdvance: "Advance",
	ChargeTimingType: "Specified Date",
	ChargeTimingType_Spec_Day: "1st",
	ChargeTimingType_Spec_Month: "January",
	ChargeDate:  "1st January", 
	CurrentCharge: "Yes1",
	Used: "Yes",
  	EffectiveDateFrom_String1: "01/01/2018",
    EffectiveDateTo_String1: "",
	RunDateFrom_String1: "01/01/2019",
	RunDateTo_String1: "",
	EffectiveDateFrom_String2: "2018-01-01",
    EffectiveDateTo_String2: "",
	RunDateFrom_String2: "2019-01-01",
	RunDateTo_String2: "",
	EffectiveDateFrom_Date: null,
    EffectiveDateTo_Date: null,
	RunDateFrom_Date: null,
	RunDateTo_Date: null
  },
{
	id:4,
	AmountOrPercentage: "Percentage",
	ChargeAmountOrPercentage: "0.5%",
	Frequency: "Annual",
	ArrearsAdvance: "Arrears",
	ChargeTimingType: "Specified Date",
	ChargeTimingType_Spec_Day: "1st",
	ChargeTimingType_Spec_Month: "January",
	ChargeDate: "1st January",
	CurrentCharge: "Yes1",
	Used: "No",
  	EffectiveDateFrom_String1: "01/01/2019",
    EffectiveDateTo_String1: "",
	RunDateFrom_String1: "01/01/2019",
	RunDateTo_String1: "",
		EffectiveDateFrom_String2: "2019-01-01",
    EffectiveDateTo_String2: "",
	RunDateFrom_String2: "2019-01-01",
	RunDateTo_String2: "",
	EffectiveDateFrom_Date: null,
    EffectiveDateTo_Date: null,
	RunDateFrom_Date: null,
	RunDateTo_Date: null
  }
]

let TodaysDate = null;
let RunDateFrom_String1 = null;
let RunDateTo_String1 = null;
let EffectiveDateFrom_String1 = null;
let EffectiveDateTo_String1 = null;
let RunDateFrom_Date = null;
let RunDateTo_Date = null;
let EffectiveDateFrom_Date = null;
let EffectiveDateTo_Date = null;
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
			var dateParts = d.EffectiveDateFrom_String1.split("/");
		    EffectiveDateFrom_Date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			//Eff To
			if( d.EffectiveDateTo_String1 === "" ) {
				EffectiveDateTo_String1 ="01/01/3000"
			} else {
				EffectiveDateTo_String1 = d.EffectiveDateTo_String1
			}
			var dateParts = EffectiveDateTo_String1.split("/");
			EffectiveDateTo_Date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			//Run From
			var dateParts = d.RunDateFrom_String1.split("/");
		    RunDateFrom_Date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			//Run To
			if( d.RunDateTo_String1 === "" ) {
				RunDateTo_String1 ="01/01/3000"
			} else {
				RunDateTo_String1 = d.RunDateTo_String1
			}
			var dateParts = RunDateTo_String1.split("/");
			RunDateTo_Date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); // month is 0-based, that's why we need dataParts[1] - 1
			
			CurrentCharge = "No"			
			if (TodaysDate >= RunDateFrom_Date ) {
				if ( TodaysDate <= RunDateTo_Date ) {	
					if (TodaysDate >= EffectiveDateFrom_Date ) {
						if ( TodaysDate <= EffectiveDateTo_Date ) {
							CurrentCharge = "Yes"
						}
					}
				}
			}
			
			d.EffectiveDateFrom_Date = EffectiveDateFrom_Date
			d.EffectiveDateTo_Date = EffectiveDateTo_Date
			d.RunDateFrom_Date = RunDateFrom_Date
			d.RunDateTo_Date = RunDateTo_Date
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

		RunDateFrom_String1 = new Date(d.RunDateFrom_String1)
		EffDateFrom = new Date(d.EffectiveDateFrom_String1)
		
		if( d.RunDateTo_String1 === "" ) {
			RunDateTo_String1 = new Date("01/01/3000")
		}  else {
			RunDateTo_String1 = new Date(d.RunDateTo_String1)
		}
		
		if( d.EffectiveDateTo_String1 === "" ) {
			EffDateTo = new Date("01/01/3000")
		}  else {
			EffDateTo = new Date(d.EffectiveDateTo_String1)
		}
		
		CurrentCharge = "No"			
		if (TodaysDate >= RunDateFrom_String1 ) {
			if ( TodaysDate <= RunDateTo_String1 ) {	
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
	
	handleCallback_NewProduct = (childData) =>{	
		console.log("4", childData)
		TodaysDate = new Date();
		CurrentCharge = "No"			
		if (TodaysDate >= childData.RunDateFrom_Date ) {
			if ( TodaysDate <= RunDateTo_Date ) {	
				if (TodaysDate >= childData.EffectiveDateFrom_Date ) {
					if ( TodaysDate <= EffectiveDateTo_Date ) {
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
			if (TodaysDate >= childData.RunDateFrom_Date ) {
				if ( TodaysDate <= childData.RunDateTo_Date_Date ) {	
					if (TodaysDate >= childData.EffectiveDateFrom_Date ) {
						if ( TodaysDate <= childData.EffectiveDateTo_Date ) {
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
			  ChargeTimingType_Spec_Day: childData.ChargeTimingType_Spec_Day,
			  ChargeTimingType_Spec_Month: childData.ChargeTimingType_Spec_Month,
			  ChargeDate: childData.ChargeDate,
			  
			  CurrentCharge: CurrentCharge,
			  
			  EffectiveDateFrom_String1: childData.EffectiveDateFrom_String1,
			  EffectiveDateTo_String1: childData.EffectiveDateTo_String1,
			  RunDateFrom_String1: childData.RunDateFrom_String1,
			  RunDateTo_String1: childData.RunDateTo_String1,
			  
			  EffectiveDateFrom_String2: childData.EffectiveDateFrom_String2,
			  EffectiveDateTo_String2: childData.EffectiveDateTo_String2,
			  RunDateFrom_String2: childData.RunDateFrom_String2,
			  RunDateTo_String2: childData.RunDateTo_String2,
			  
			  RunDateFrom_Date: childData.RunDateFrom_Date,
			  RunDateTo_Date_Date: childData.RunDateTo_Date_Date,
			  EffectiveDateFrom_Date: childData.EffectiveDateFrom_Date,
			  EffectiveDateTo_Date: childData.EffectiveDateTo_Date,
			}
		  }
		  
		  return d;
		});
		this.setState(curr => ({ ...curr, tableData: newProducts }));
		this.setState({Up: "1"}); //Dummy state to force the refresh of the state and render the page
	}
	
	handleCallback_DeleteRow = (childData) =>{
		this.state.tableData.splice( childData.id - 1, 1);
		this.setState({Up: "2"}); //Dummy state to force the refresh of the state and render the page
		//console.log("Delete state A", this.state )
	}
	
	render() { 
	//console.log("Render props ", this.props )
	//console.log("Render state", this.state )
		//console.log("Index_Render", this.state)
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
			dataField: "EffectiveDateFrom_String1",
			text: "Effective Date From",
			sort: true
		  },
		  {
			dataField: "EffectiveDateTo_String1",
			text: "Effective Date To",
			sort: true
		  },
		  {
			dataField: "RunDateFrom_String1",
			text: "Run Date From",
			sort: true
		  },
		  {
			dataField: "RunDateTo_String1",
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
						<Model_Icon parentCallback = {this.handleCallback} parentCallback_Delete = {this.handleCallback_DeleteRow} buttonLabel={B_Label} Row={row}  / >
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
		<ModelButton_NewProduct parentCallback = {this.handleCallback_NewProduct}   B_Label={B_Label}  / >
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
