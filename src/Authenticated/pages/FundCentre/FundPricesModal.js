import React from "react";

import { Col,  Row } from "reactstrap";

import WorldMap from "./WorldMap";
import Line from "./Line";
import Pie from "./Pie";
import { Target,RefreshCw, ArrowUpCircle,BarChart2 } from "react-feather";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

const colors = [
  {
    name: "Primary",
    value: "primary"
  },
  {
    name: "Success",
    value: "success"
  },
  {
    name: "Danger",
    value: "danger"
  },
  {
    name: "Warning",
    value: "warning"
  }
];
const Funds = [
  {
    FundID: "12356430",
	name: "Emerging Market Equity Income Fund",
    FundDescription: "This fund is a mix of assets such as bonds, shares, property and cash. It also features several risk management strategies. This is a low risk fund which aims to have a small allocation to higher risk assets such as shares and property. The fund manager monitors and rebalances the fund regularly and may change the mix over time.",
	value: "£  585 million",
	InvestmentStyle: "  Active",
	Objective:"  To achieve cash +4%",
	Risk: 3
  },
  {
    FundID: "12356431",
	name: "High Yield Income Fund",
    FundDescription: "This fund aims to give good growth by investing in the Irish and international shares that the Consensus Fund invests in. By taking the average investment that all the managers make, the Consensus Equity Fund avoids the risks associated with relying on the decisions of just one fund manager. Managing assets in this way aims to remove the risk associated with some managers making poor decisions.",
	value: "  £498 million",
	InvestmentStyle: "  Passive",
	Objective:"Track with the consumer price index",
	Risk: 4
  },
  {
    FundID: "12356432",
	name: "Managed Fund 1",
    FundDescription: "This fund aims to deliver above average performance by actively investing in a range of assets. This fund currently invests in a mix of equities, bonds, property, cash and other assets and allocations may be made to externally managed funds. The fund may also use derivatives to achieve its investment objective, reduce risk or to manage the fund more efficiently and may also feature several risk management strategies. ILIM may change the fund mix and risk management strategies over time.",
	value: "  £385 million",
	InvestmentStyle: "  Passive",
	Objective:"  Track the S&P 500",
	Risk: 5
  }
];

class FundModals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle = index => {
    this.setState(state => ({
      [index]: !state[index]
    }));
  };

  componentWillMount() {
    colors.forEach((color, index) => {
      this.setState(() => ({
        [index]: false
      }));
    });
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle tag="h5">Fund Modals</CardTitle>
          <h6 className="card-subtitle text-muted">

          </h6>
        </CardHeader>
        <CardBody className="text-center">

          {Funds.map((fund, index) => (
            <React.Fragment key={index}>
              <Button
                color="primary"
                onClick={() => this.toggle(index)}
                className="mr-1"
              >
			  {fund.name}
              </Button>
              <Modal
                isOpen={this.state[index]}
                toggle={() => this.toggle(index)}
                size="lg"
              >
                <ModalHeader toggle={() => this.toggle(index)}>
                  {fund.name}
                </ModalHeader>
                <ModalBody className="text-center m-3">
					<Row>
					  <Col md="6">
						<Card>
							<CardHeader>
							  <CardTitle tag="h5" className="mb-0">Fund Facts</CardTitle>
							</CardHeader>
							<CardBody>
								 <Row>
									<Target  size={18} />   <strong>  Objective</strong>   {fund.Objective}
								 </Row>
								 <Row>
									<RefreshCw className="align-Left" size={18} />
									{" "}
									 <strong>  Investment style</strong>
									{fund.InvestmentStyle}
								 </Row>
								 <Row>
									<ArrowUpCircle className="align-Left" size={18} />
									{" "}
									 <strong>  Cash</strong>
									{fund.value}
								 </Row>
								 <Row>
									<BarChart2 className="align-Left" size={18} />
									{" "}
									 <strong>  Risk Level</strong>
									{fund.Risk}
								 </Row>
							</CardBody>
						</Card>	
					  </Col>
					  <Col md="6">
						<Card>
							<CardHeader>
							  <CardTitle tag="h5" className="mb-0">Fund Description</CardTitle>
							</CardHeader>
							<CardBody>
								 {fund.FundDescription}
							</CardBody>
						</Card>	
					  </Col>
					</Row>
					<Row>					
						<Pie />
					</Row>
					<Row>
						<Col md="12">
							<Line  />
							<WorldMap />
						</Col>
					</Row>
					
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => this.toggle(index)}>
                    Close
                  </Button>{" "}
                </ModalFooter>
              </Modal>
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    );
  }
}



export default FundModals;
