import React  from "react";
import { Card, CardBody,CardHeader,CardTitle, Container
  } from "reactstrap";



import BootstrapTable  from "react-bootstrap-table-next";

import ToolkitProvider  from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter   } from 'react-bootstrap-table2-filter';


let nameFilter;
let DefaultSelected = "4";
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


const handleClick_Update = (TableNumber) => {
	 // alert(TableNumber)
	  nameFilter(TableNumber);
	};

class ExpandableRowsTable2ndTable extends React.Component {
	  
	componentDidMount() {
		handleClick_Update (DefaultSelected) 
	}
	  
  render() {   

		const MyExportCSV = props => {
			const handleClick = () => {
			  props.onExport();
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
        return(
			<Container fluid className="p-0">
				<Card className="card-margin">
					<CardHeader>
					   <CardTitle id="HeaderID" tag="h3" className="mb-1" >
						
						  {this.props.TableType_Label} Table 
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  <ExpandableRowsTable2ndTable parentCallback = {this.handleCallback} />	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	

export default CurrentTable;
