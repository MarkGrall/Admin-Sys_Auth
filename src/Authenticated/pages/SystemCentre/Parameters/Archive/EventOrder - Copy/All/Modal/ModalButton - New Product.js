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
    className,
	isButton
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
	 {isButton ? (
			<Button className="btn btn-primary ml-2" color="primary" onClick={toggle}> New {buttonLabel} </Button>
		  ) : (
			<FontAwesomeIcon icon={faPencilAlt} className="  fa-1x text-primary mr-0 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>
	  )}
 
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
