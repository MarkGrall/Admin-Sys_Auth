import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown  ,FormGroup,
  Input, Label
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";


import BootstrapTable  from "react-bootstrap-table-next";

import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';

import paginationFactory from "react-bootstrap-table2-paginator";

import {  MinusCircle, PlusCircle } from "react-feather";

const B_Label="Early Encashment Charge"
let nameFilter;
let DefaultSelected = "4";
const tableColumns = [
	  {
		dataField: "Year",
		text: "Year"	
	  },
	  {
		dataField: "EarlyEncashmentCharge",
		text: "Early Encashment Charge",
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
				Year:1,
				EarlyEncashmentCharge: "5%"  
			  },
			  {
				TableNumber:4,
				ID: "2",
				Year:2,
				EarlyEncashmentCharge: "5%" 
			  },
			  {
				TableNumber:4,
				ID: "3",
				Year:3,
				EarlyEncashmentCharge: "5%" 
			  },
			  {
				TableNumber:4,
				ID: "4",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:4,
				ID: "5",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:4,
				ID: "6",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  },


////
			  {
				TableNumber:3,
				ID: "7",
				Year:1,
				EarlyEncashmentCharge: "4%"  
			  },
			  {
				TableNumber:3,
				ID: "8",
				Year:2,
				EarlyEncashmentCharge: "4%" 
			  },
			  {
				TableNumber:3,
				ID: "9",
				Year:3,
				EarlyEncashmentCharge: "4%" 
			  },
			  {
				TableNumber:3,
				ID: "10",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:3,
				ID: "11",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:3,
				ID: "12",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  },


			  {
				TableNumber:2,
				ID: "13",
				Year:1,
				EarlyEncashmentCharge: "3%"  
			  },
			  {
				TableNumber:2,
				ID: "14",
				Year:2,
				EarlyEncashmentCharge: "3%" 
			  },
			  {
				TableNumber:2,
				ID: "15",
				Year:3,
				EarlyEncashmentCharge: "3%" 
			  },
			  {
				TableNumber:2,
				ID: "16",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:2,
				ID: "17",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:2,
				ID: "18",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  },


			  {
				TableNumber:1,
				ID: "19",
				Year:1,
				EarlyEncashmentCharge: "2%"  
			  },
			  {
				TableNumber:1,
				ID: "20",
				Year:2,
				EarlyEncashmentCharge: "2%" 
			  },
			  {
				TableNumber:1,
				ID: "21",
				Year:3,
				EarlyEncashmentCharge: "2%" 
			  },
			  {
				TableNumber:1,
				ID: "22",
				Year:4,
				EarlyEncashmentCharge: "3%" 
			  },
			   {
				TableNumber:1,
				ID: "23",
				Year:5,
				EarlyEncashmentCharge: "1%" 
			  },
			   {
				TableNumber:1,
				ID: "24",
				Year:"6+",
				EarlyEncashmentCharge: "0%" 
			  }			  
			  
			  
			  
]


const handleClick_Update = (TableNumber) => {
	 // alert(TableNumber)
	  nameFilter(TableNumber);
	};

class ExpandableRowsTable_2ndTable extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	  
	componentDidMount() {
		handleClick_Update (DefaultSelected) 
	}
	  
  render() {   

		const MyExportCSV = props => {
			const handleClick = () => {
			  props.onExport();
			};
			const handleClick_1 = (TableNumber) => {
			 // alert(TableNumber)
			  nameFilter(TableNumber);
			};
			return (
			  <div>
				<button className="btn btn-secondary mt-0 mb-1 mr-2" onClick={handleClick}>
				  Export
				</button>
			  </div>
			);
		};

    return (
	<ToolkitProvider
        data={TableData}
        columns={tableColumns}
		keyField="ID"
		exportCSV={ { onlyExportFiltered: true, exportAll: false } }
		search
      >
        {props => (
          <div>
			  <MyExportCSV {...props.csvProps} />
			  
			<BootstrapTable
                {...props.baseProps}
				bootstrap4

                keyField="ID"
                bordered={false}
				data={TableData}
				columns={tableColumns}
				filter={ filterFactory() }
              />
          </div>
        )}
      </ToolkitProvider>
  );
 };
};





class CurrentTable extends React.Component{
    constructor(props){
        super(props);
		this.state = { 
			data: null
		};
    }
	
	handleCallback = (childData) =>{
        this.setState({data: childData})
	//alert( this.state.data.value )
    }
	//"Testing - Container_2ndTable " + {this.props.TableNumber_Prop}	
	//{this.props.data.value}
	// {this.props.TableType_Label} Table - Rate Type:{this.props.opt} - Table Number: 
    render(){
		const {data} = this.state;
        return(
			<Container fluid className="p-0">
				<Card className="card-margin">
					<CardHeader>
					   <CardTitle id="HeaderID" tag="h3" className="mb-1" >
						
						  {this.props.TableType_Label} Table 
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  <ExpandableRowsTable_2ndTable parentCallback = {this.handleCallback} />	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	

export default CurrentTable;
