import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";

import TabsWithTextLabel_2 from "./TabsWithTextLabel_2"

const ModalButton = (props) => {
  const {
    buttonLabel,
    className,
	isButton,
	Row
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
	  <FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle} >  {buttonLabel}  </FontAwesomeIcon>
 
	  <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody>
			<CardBody>
			  <TabsWithTextLabel_2 className="tab-primary" TabName_1={buttonLabel} TabName_2="Date Parameters" Row={Row}  />	
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
