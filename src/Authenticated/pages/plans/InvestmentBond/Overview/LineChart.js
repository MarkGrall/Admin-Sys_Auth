import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

import { Badge, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const LineChart = ({ theme }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Policy Value (£)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.primary,
        data: [
          65000,
          69000,
          71000,
          73000,
          76000,
          80000,
          75000,
          86000,
          82000,
          94000,
          96000,
          100000
        ]
      },
      {
        label: "Cummulative Premium Paid",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.tertiary,
        borderDash: [4, 4],
        data: [
          70000,
          71000,
          72000,
          73000,
          74000,
          75000,
          76000,
          77000,
          78000,
          79000,
          80000,
          81000
        ]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false
    },
    hover: {
      intersect: true
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 5000
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff"
          }
        }
      ]
    }
  };

  return (
    <Card className="flex-fill w-100">
      <CardHeader>
        <Badge color="primary" className="float-right">
          Monthly
        </Badge>
        <CardTitle tag="h5" className="mb-0">
          Plan Value
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart chart-lg">
          <Line data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(LineChart);
