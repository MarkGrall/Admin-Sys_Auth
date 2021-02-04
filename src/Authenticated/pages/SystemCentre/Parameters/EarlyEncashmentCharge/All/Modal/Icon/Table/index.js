import React from "react";
import { Card, CardBody,CardHeader,CardTitle, Container, DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter   } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';


const BLabel="UWP Rate"
let nameFilter;
const tableColumns = [
	  {
		dataField: "RateType",
		text: "Rate Type"	
	  },
	  {
		dataField: "UWPRate",
		text: "UWP Rate",
	  },
	  {
		dataField: "TrancheDateFrom",
		text: "Tranche Date From",
	  },
	  {
		dataField: "TrancheDateTo",
		text: "Tranche Date To",
	  },
	  
	   {
			dataField: 'TableNumber',
			text: '',
			csvExport: false,
			headerStyle: (column, colIndex) => {
				return { width: 0 ,height: 0, 'visibility': 'hidden'}
			},
			filter: textFilter({
				getFilter: (filter) => {
				  // nameFilter was assigned once the component has been mounted.
				  nameFilter = filter; 
				},
				style: {'visibility': 'hidden','height':'0px'}
			}),
			style: {'visibility': 'hidden'}	
	  },
	  {
		dataField: "ID",
		text: "ID",
		csvExport: false,
		hidden: true
	   }
	];

const TableData = [
			  {
				TableNumber:4,
				ID: "1",  
				RateType: "Terminal Bonus",
				UWPRate: "0.01",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:4,
				ID: "2",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:4,
				ID: "3",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:4,
				ID: "4",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:4,
				ID: "5",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.1",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:4,
				ID: "6",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:4,
				ID: "7",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.06",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:4,
				ID: "8",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.02",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  //////////
			  
			  

			  {
				TableNumber:3,
				ID: "10",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:3,
				ID: "11",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:3,
				ID: "12",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:3,
				ID: "14",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:3,
				ID: "15",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.06",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:3,
				ID: "16",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.02",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  
			  
			  ////////////
			  
			  {
				TableNumber:2,
				ID: "17",  
				RateType: "Terminal Bonus",
				UWPRate: "0.01",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:2,
				ID: "18",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:2,
				ID: "19",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:2,
				ID: "20",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:2,
				ID: "21",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.1",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:2,
				ID: "22",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:2,
				ID: "23",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.06",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:2,
				ID: "24",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.02",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  
			  
			  ///////////////
			  {
				TableNumber:1,
				ID: "25",  
				RateType: "Terminal Bonus",
				UWPRate: "0.01",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:1,
				ID: "26",
				RateType: "Terminal Bonus",
				UWPRate: "0.005",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:1,
				ID: "27",  
				RateType: "Terminal Bonus",
				UWPRate: "0.006",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:1,
				ID: "28",  
				RateType: "Terminal Bonus",
				UWPRate: "0.002",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  },
			  {
				TableNumber:1,
				ID: "29",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.1",
				TrancheDateFrom:"01/01/2020",
				TrancheDateTo: ""
			  },
			  {
				TableNumber:1,
				ID: "30",  
				RateType: "Market Value Adjustment",
				UWPRate: "0.05",
				TrancheDateFrom:"01/01/2019",
				TrancheDateTo: "01/01/2020"
			  },
			  {
				TableNumber:1,
				ID: "31",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.16",
				TrancheDateFrom:"01/01/2018",
				TrancheDateTo: "01/01/2019"
			  },
			  {
				TableNumber:1,
				ID: "32",     
				RateType: "Market Value Adjustment",
				UWPRate: "0.12",
				TrancheDateFrom:"01/01/2016",
				TrancheDateTo: "01/01/2018"
			  }
			  
			  
]


//-------------------

const { ExportCSVButton } = CSVExport;

const handleClick = (TableNumber) => {
	  nameFilter(TableNumber);
	};

class ExpandableRowsTable2ndTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				TableNumberState: this.props.TableNumberProp
			}
	}
	  
	componentDidMount() {
		handleClick (this.state.TableNumberState) 
	}

	componentDidUpdate() {
		//this.setState({TableNumberState: this.props.TableNumberProp})
		//alert( 'State is ' + this.state.TableNumberState  +  'Prop is ' + this.props.TableNumberProp );
		handleClick (this.props.TableNumberProp) 
	}
//Testing - ExpandableRowsTable2ndTable - state   {this.state.TableNumberState }   - Prop  {this.props.TableNumberProp}	
	render() {     
		return (
			<ToolkitProvider
				data={TableData}
				columns={tableColumns}
				keyField="TableNumber"
				exportCSV={ { onlyExportFiltered: true, exportAll: false } }
				search
			  >
				{props => (
				  <div>
					<ExportCSVButton className="btn btn-secondary mt-1 ml-1 mb-1" { ...props.csvProps }>Export</ExportCSVButton>

					<BootstrapTable
						{...props.baseProps}
						keyField="ID"
						bordered={false}
						data={TableData}
						columns={tableColumns}
						filter={ filterFactory() }
						cellEdit={ cellEditFactory({
							mode: 'click',
							blurToSave: true
					  }) }
					/>
				  </div>
				)}
			</ToolkitProvider>
		);
	};
};

class Container2ndTable extends React.Component{
    constructor(props){
        super(props);
		this.state = {
				TableNumberState: this.props.TableNumberProp
			}
    }
	//"Testing - Container2ndTable " + {this.props.TableNumberProp}	
    render(){
        return(
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
						  {BLabel} - Table Number: {this.props.TableNumberProp}
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  <ExpandableRowsTable2ndTable TableNumberProp = {this.props.TableNumberProp} />	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	





export default Container2ndTable;
