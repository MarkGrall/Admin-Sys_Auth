import React, { useState } from "react";
import {  CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import TabsWithTextLabel2 from "./TabsWithTextLabel_Button"

const ModalButton = (props) => {
  const {
    buttonLabel,
    className,
	TableNumber
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
	 
	  <Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>
 
	  <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody>
			<CardBody>
			  <TabsWithTextLabel2 className="tab-primary" TabName_1={buttonLabel} TabName_2="Date Parameters" TableNumber={TableNumber}   />	
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
