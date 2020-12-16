import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';

let products = [
  {
	id: "12",
	name: "Item 12",
	price: "12.5",
	inStock: false
  },
   {
	id: "13",
	name: "Item 13",
	price: "13.5",
	inStock: false
  },
  {
	id: "14",
	name: "Item 14",
	price: "14.5",
	inStock: false
  }
]

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products, count: 0 };
  }

  toggleInStock = () => {
    let newProducts = [...this.state.products];
    newProducts = newProducts.map((d) => {
      if (d.id === "13") {
        return {
          ...d,
          inStock: !d.inStock
        };
      }
      return d;
    });
    this.setState(curr => ({ ...curr, products: newProducts }));
  };

  render() {
    const columns = [
      {
        dataField: 'id',
        text: 'Product ID',
        formatter: (cell, row, rowIndex, extraData) => (
          <div>
            <span>ID: {row.id}</span>
            <br />
            <span>state: {extraData}</span>
          </div>
        ),
        formatExtraData: this.state.count
      },
      {
        dataField: 'name',
        text: 'Product Name'
      },
      {
        dataField: 'price',
        text: 'Product Price'
      },
      {
        dataField: 'inStock',
        text: 'In Stock',
        formatter: (cellContent, row) => (
          <div className="checkbox disabled">
            <label>
              <input type="checkbox" checked={ row.inStock } disabled />
            </label>
          </div>
        )
      },
      {
        dataField: 'df1',
        isDummyField: true,
        text: 'Action 1',
        formatter: (cellContent, row) => {
          if (row.inStock) {
            return (
              
                <span > Available</span>
              
            );
          }
          return (
           
              <span className="label label-danger"> Backordered</span>
            
          );
        }
      },
      {
        dataField: 'df2',
        isDummyField: true,
        text: 'Action 2',
        formatter: (cellContent, row) => {
          if (row.inStock) {
            return (
              
                <span className="label label-success"> Available</span>
              
            );
          }
          return (
            
              <span className="label label-danger"> Backordered</span>
            
          );
        }
      }
    ];

    return (
      <div>
        <h3>Action 1 and Action 2 are dummy column</h3>
        <button onClick={ this.toggleInStock } className="btn btn-primary">
          Toggle item 13 stock status
        </button>
        <button
          className="btn btn-success"
          onClick={ () => this.setState(() => ({ count: this.state.count + 1 })) }
        >
          Click me to Increase counter
        </button>
        <BootstrapTable
          keyField="id"
          data={ this.state.products }
          columns={ columns }
        />
      
      </div>
    );
  }
}
//  <Code>{ sourceCode }</Code>
export default ProductList;