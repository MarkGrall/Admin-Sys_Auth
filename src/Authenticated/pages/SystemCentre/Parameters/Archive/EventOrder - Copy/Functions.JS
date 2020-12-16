import React from "react";
import { Card,CardBody, Container, Row, Col,
Nav, NavItem, NavLink,TabContent,TabPane
 } from "reactstrap";


import TableEventOrder from "./Table/index";

const TableSpecCont = (props) => {
  const {
    TabName_1
  } = props;
  <Container fluid className="p-0">
	<TableEventOrder TabName_1={TabName_1} />
  </Container>
};




export default TableSpecCont;



		 function fnButtonLabel({ text, status }) {
  switch (status) {
    case 'Label':
      return 
		<FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>;
    case 'Button':
      return
		<Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>;
    default:
      return null;
  }
}




function fnButtonLabel({ Button_Icon,buttonLabel,toggle }) {
  return (
    <div>
      {buttonLabel}
	  {(() => {
        switch (Button_Icon) {
		    case "Label":
			  return 	<FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>
			case "Button":
			  return <Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>
			default:
			  return "Test";
        }
      })()}
	  {buttonLabel}
    </div>
  );
}


function fnButtonLabel2(ButtonLabel) {
  if (ButtonLabel = 'Button') {
    return <Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>;
  } else {
    return <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>;
  }
}

function fnButtonLabel({ Button_Icon,buttonLabel,toggle }) {
  return (
    <div>
      {(() => {
        switch (Button_Icon) {
		    case 'Label':
			  return 
				<Button_Icon toggle={toggle}/>
				<FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>;
			case 'Button':
			  return
				<Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>;
			default:
			  return null;
        }
      })()}
    </div>
  );
}

function fnButtonLabel({ Button_Icon,buttonLabel,toggle }) {
  return (
    <div>
      {(() => {
        switch (Button_Icon) {
		    case 'Label':
			  return 
				<Button_Icon toggle={toggle}/>
			case 'Button':
			  return
				<Button_Modal buttonLabel={buttonLabel} toggle={toggle}/>
			default:
			  return null;
        }
      })()}
    </div>
  );
}


const Button_Icon = (props) => {
  const {
    toggle
  } = props;
  return (
  <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle}>   </FontAwesomeIcon>
  );
}

const Button_Modal = (props) => {
  const {
    buttonLabel,
    toggle
  } = props;
  return (
  <Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>
  );
}
import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import TabsWithTextLabel_2 from "./TabsWithTextLabel_2"


function fnButtonLabel({ Button_Icon,buttonLabel,toggle }) {
  return (
    <div>
	  {(() => {
        switch (Button_Icon) {
		    case "Label":
			  return <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>
			case "Button":
			  return <Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>
			default:
			  return "Test";
        }
      })()}
    </div>
  );
}

const ModalButton = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
		"Test"
		<fnButtonLabel Button_Icon="Button" buttonLabel={buttonLabel} toggle={toggle} />
     	  
	  <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody>
			<CardBody>
			  <TabsWithTextLabel_2 className="tab-primary" TabName_1={buttonLabel} TabName_2="Date Parameters" />	
			</CardBody>
        </ModalBody>
        <ModalFooter>	
		  <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalButton;


