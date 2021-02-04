import React  from "react";
import {Card, CardBody,Container
  } from "reactstrap";
import BootstrapTable  from "react-bootstrap-table-next";

import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter   } from 'react-bootstrap-table2-filter';


let nameFilter;
let DefaultSelected = "3";

const tableColumns2ndTable = [
	  {
		dataField: "Event",
		text: "Event"	
	  },
	  {
		dataField: "Order",
		text: "Order",
	  },
	  {
		dataField: "TableNumber",
		text: "Table Number",
		hidden: true
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

const TableData1 = [
			  {
				Event: "Policy Start - 1",
				Order: "1",
				TableNumber:1,
				ID: "1"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:1,
				ID: "2"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:1,
				ID: "3"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:1,
				ID: "4"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:1,
				ID: "5"
			  },
				{
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:1,
				ID: "6"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:1,
				ID: "7"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:1,
				ID: "8"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:1,
				ID: "9"
			  },
			  
			  {
				Event: "Policy Start - 2",
				Order: "1",
				TableNumber:2,
				ID: "11"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:2,
				ID: "12"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:2,
				ID: "13"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:2,
				ID: "14"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:2,
				ID: "15"
			  },
			  {
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:2,
				ID: "26"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:2,
				ID: "27"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:2,
				ID: "28"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:2,
				ID: "29"
			  },
			  
			  {
				Event: "Policy Start - 3",
				Order: "1",
				TableNumber:3,
				ID: "31"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:3,
				ID: "32"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:3,
				ID: "33"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:3,
				ID: "34"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:3,
				ID: "35"
			  },
			  {
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:3,
				ID: "36"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:3,
				ID: "37"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:3,
				ID: "38"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:3,
				ID: "39"
			  },
			  
			  
			  {
				Event: "Policy Start - 4",
				Order: "1",
				TableNumber:4,
				ID: "41"
			  },
			  {
				Event: "Policy Anniversary",
				Order: "2",
				TableNumber:4,
				ID: "42"
			  },
				{
				Event: "Single Premium",
				Order: "3",
				TableNumber:4,
				ID: "43"
			  },
				{
				Event: "Regular Premium",
				Order: "4",
				TableNumber:4,
				ID: "44"
			  },
				{
				Event: "Fixed Policy Charge",
				Order: "5",
				TableNumber:4,
				ID: "45"
			  },
			  {
				Event: "Early Encashment Charge",
				Order: "6",
				TableNumber:4,
				ID: "46"
			  },
				{
				Event: "Partial Surrender",
				Order: "7",
				TableNumber:4,
				ID: "47"
			  },
				{
				Event: "Full Surrender",
				Order: "8",
				TableNumber:4,
				ID: "48"
			  },
				{
				Event: "Death",
				Order: "9",
				TableNumber:4,
				ID: "49"
			  }
			  
			  
]


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
        data={TableData1}
        columns={tableColumns2ndTable}
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
                bordered={true}
				data={TableData1}
				columns={tableColumns2ndTable}
				filter={ filterFactory() }
              />
          </div>
        )}
      </ToolkitProvider>
  );
 };
};




const CurrentTable = () => (
  <Container fluid className="p-0">
	<Card className="card-margin">

		<CardBody>
		<ExpandableRowsTable2ndTable TableNumberProp = {DefaultSelected} />	
			
		</CardBody>
	</Card>
  </Container>
);


export default CurrentTable;
