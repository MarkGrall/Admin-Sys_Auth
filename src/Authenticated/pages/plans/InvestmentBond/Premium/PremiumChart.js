import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const MixedChart = ({ theme }) => {
  const data = [
    {
      name: "Monthly Payment",
      type: "column",
      data: [1000, 1000, 0, 2000, 1000, 1000, 1000, 1000, 1000,1000, 1000]
    },
    {
      name: "Cumulative Payment",
      type: "line",
      data: [1000, 2000, 2000, 4000,5000, 6000, 7000, 8000, 9000, 10000, 11000]
    }
  ];

  const options = {
    chart: {
      stacked: false
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003"
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      title: {
        text: "Amount"
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(y) {
          if (typeof y !== "undefined") {
            return "£" + y.toFixed(0) ;
          }
          return y;
        }
      }
    },
    colors: [
      theme.primary,
      theme.success,
      theme.warning,
      theme.danger,
      theme.info
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Payment History</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Chart options={options} series={data} type="line" height="350" />
        </div>
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(MixedChart);
