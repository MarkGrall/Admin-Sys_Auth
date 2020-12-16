import React, { useState, Component }  from "react";


import FixedPolicyCharge from "./Fixed Policy Charge/index";

class AllCharges extends React.Component {
    constructor(props, context) {
    super(props, context);
	this.state = { 
		};

    }
	
	
	render() { 


	return (
      <div>
		<FixedPolicyCharge />
      </div>
    );
  };
}
	




export default AllCharges;
