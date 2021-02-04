import React from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import {
  CardBody,
  Card,
  CardHeader,
  CardTitle,
  Table
} from "reactstrap";

import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";


const ContextualClasses = () => (
  <Card>

    <Table>
      <thead>
        <tr >
          <th style={{ width: "80%" }}>Asset</th>
          <th style={{ width: "20%" }}>Allocation percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-primary" >
          <td align="left">Equity</td>
          <td>45%</td>
        </tr>
        <tr>
          <td>Global Low Volatility Shares</td>
          <td align="left">40%</td>
        </tr>
		<tr>
          <td>Global High Volatility Shares</td>
          <td align="left">60%</td>
        </tr>
        
		<tr className="table-warning">
          <td align="left">Property</td>
          <td>21%</td>
        </tr>
		
		<tr className="table-danger">
          <td align="left">Cash</td>
          <td>9%</td>
        </tr>
		
		<tr className="table-dark">
          <td align="left">Bond</td>
          <td >25%</td>
        </tr>
        <tr>
          <td>Corporate Bonds</td>
          <td align="left">30%</td>
        </tr>
		<tr>
          <td>Goverment Bonds</td>
          <td align="left">70%</td>
        </tr>
		
      </tbody>
    </Table>
  </Card>
);


const PieChart = ({ theme }) => {
  const data = {
    labels: ["Equity", "Property", "Cash", "Bond"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          theme.primary,
          theme.warning,
          theme.danger,
          theme.dark
        ],
        borderColor: "transparent"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };

  return (
    <Card className="flex-fill w-100">
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          Asset Allocation
        </CardTitle>
      </CardHeader>
      <CardBody className="d-flex">
        <Col md="6">
		<div className="align-self-center w-100">
          <div className="py-3">
            <div className="chart chart-xs">
              <Pie data={data} options={options} />
            </div>
          </div>

          <Table className="mb-0">
            <thead>
              <tr>
                <th>Asset type</th>
                <th className="text-right">Allocation</th>
                <th className="text-right">Yearly change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">
                  <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                  Equity
                </td>
                <td className="text-right">£260</td>
                <td className="text-right text-success">+10%</td>
              </tr>
              <tr>
                <td className="text-left">
                  <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                  Property
                </td>
                <td className="text-right">£125 </td>
                <td className="text-right text-success">+13%</td>
              </tr>
              <tr>
                <td className="text-left">
                  <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                  Cash
                </td>
                <td className="text-right">$54</td>
                <td className="text-right text-danger">-18%</td>
              </tr>
              <tr>
                <td className="text-left">
                  <FontAwesomeIcon icon={faSquare} className="text-dark" />{" "}
                  Bond
                </td>
                <td className="text-right">$146</td>
                <td className="text-right text-success">+5%</td>
              </tr>
            </tbody>
          </Table>
        </div>
		</Col>
		
		<Col md="6">
			<ContextualClasses/>
		
		</Col>
	  </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(PieChart);
