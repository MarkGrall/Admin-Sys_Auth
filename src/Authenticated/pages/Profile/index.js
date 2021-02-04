import React from "react";
import { Button,Card,CardBody,CardTitle, Container, Input, Row, Col, Table } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import avatarAL from "../../assets/img/avatars/avatarAL_4.jpg";
import avatarMG from "../../assets/img/avatars/avatarMG.jpg";
import avatar1 from "../../assets/img/avatars/avatar.jpg";

import { withAuth } from '@okta/okta-react';

const PersonalDetailsData = [
 { ClientID: 12345678, FirstName: "Mark", Surname: "Grall", Gender: "Male", DOB: "08/06/1987"}
] 

const AddressDetailsData = [
 { Line1: "216 The Links, Line3", Line2: "Elm Park", Line3: "Merrion Road", Line4: "Dublin 4", Postcode: "D04WV34", Country: "Ireland"}
] 

const ContactDetailsData = [
 { Email: "markgrall@hotmail.com", Mobile: "085-1460224", Home: "01-1234567"}
] 

let ContactDetailsData_0 = ContactDetailsData[0]
let PersonalDetailsData_0 = PersonalDetailsData[0]


class Details extends React.Component {
  constructor(props) {
		super(props);
		this.state = { 
			
		};
	}
  
  render() {
    return (
	<Container fluid className="p-0">
 	<Row>
		<Col >
		<Card className="card-margin">
			<CardBody>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> Client ID </th>
					<td>{PersonalDetailsData_0.ClientID}</td>
				  </tr>
				  <tr>
					<th> First Name </th>
					<td> {this.props.user.given_name}</td>
				  </tr>
				  <tr>
					<th>Surname </th>
					<td> {this.props.user.family_name}  </td>
				  </tr>
				  <tr>
					<th>Gender </th>
					<td>{PersonalDetailsData_0.Gender} </td>
				  </tr>
				  <tr>
					<th>Date of Birth </th>
					<td>{PersonalDetailsData_0.DOB} </td>
				  </tr>
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
	</Row>
	</Container>
	)
}}	

const FnImage = (props) => {
		switch(props.email) {
			case 'mark.grall@gmail.com':
			  return <img src={avatarMG} className="img-fluid rounded-circle mb-2" alt={props.email} width="128" height="128" /> ;
			case 'aideenleacy@gmail.com':
			  return <img src={avatarAL} className="img-fluid rounded-circle mb-2" alt={props.email} width="128" height="128" /> ;
			
			default:
			  return <img src={avatar1} className="img-fluid rounded-circle mb-2" alt={props.email} width="128" height="128" /> ;
		}
}


const ProfilePicture = (props) => {
   return (
  <Card>
    <CardBody className="text-center">
      <div className="text-center">
	  <FnImage email={props.user.email} />

      <CardTitle tag="h5" className="mb-0">
        {props.user.name}
      </CardTitle>
      <div className="text-muted mb-2">Actuary</div>
	  <div className="mt-2">
		<Button color="primary">
		  <FontAwesomeIcon icon={faUpload} /> Change Picture
		</Button>
	  </div>
	  <small>
		For best results, use an image at least 128px by 128px in .jpg
		format
	  </small>
	  </div>	
    </CardBody>
  </Card>
)};

class AddressDetails extends React.Component {
  render() {
    return <Container fluid className="p-0">
 	<Row>
	{		
		AddressDetailsData.map((Address, index) => {
		return( 
		<Col >
		<Card className="card-margin">
			<CardBody>
				<h3 className="h3 mb-3 ml-2">Address</h3>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> Line 1 </th>
					<td><Input name="Email" placeholder={Address.Line1} /> </td>
				  </tr>
				  <tr>
					<th> Line 2 </th>
					<td> <Input name="Email" placeholder={Address.Line2} /></td>
				  </tr>
				  <tr>
					<th>Line 3 </th>
					<td> <Input name="Email" placeholder={Address.Line3} /> </td>
				  </tr>
				  <tr>
					<th>City</th>
					<td> <Input name="Email" placeholder={Address.Line4} /></td>
				  </tr>
				  <tr>
					<th>Postcode </th>
					<td><Input name="Email" placeholder={Address.Postcode} /> </td>
				  </tr>
				  
				  <tr>
					<th>Country</th>
					<td><Input name="Email" placeholder={Address.Country} />  </td>
				  </tr>
				  
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
		  </Col>
		  )
		})	
	}
	</Row>
	</Container>
}}	

class ContactDetails extends React.Component {
    constructor(props) {
		super(props);
		this.state = { 
			
		};
	}
  
  render() {
    return (
	<Container fluid className="p-0">
 	<Row>
		<Col >
		<Card className="card-margin">
			<CardBody>
				<h3 className="h3 mb-3 ml-2">Contact</h3>
			  <Table size="sm" className="m-0">
				<tbody>
				  <tr>
					<th> Email </th>
					<td> <Input name="Email" placeholder={this.props.user.email} />  </td>
				  </tr>
				  <tr>
					<th> Mobile Phone Number </th>
					<td> <Input name="Mobile_PhoneNumber" placeholder={ContactDetailsData_0.Mobile} /> </td>
				  </tr>
				  <tr>
					<th>Home Phone Number </th>
					<td><Input name="Home_PhoneNumber" placeholder={ContactDetailsData_0.Home} />  </td>
				  </tr>
				  
				</tbody>
			  </Table>
			  <hr />

			</CardBody>
		  </Card>
	     </Col>
	</Row>
	</Container>
	)
}}	

//		{props.user.name}
		
//<UserInfo />
const PersonalDetails = (props) => {
	return (
	<Container fluid className="p-0">	
		<Card>
			<CardBody>
				<h3 className="h3 mb-3 ml-2">Personal Details</h3>
				<Row>
					<Col>
						<ProfilePicture user={props.user}/>
					</Col>
					<Col>
					  <Details user={props.user}/>
					</Col>	
				</Row>
			</CardBody>
		</Card>
	</Container>
	)
        
};


const Personal = withAuth(class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser() {
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    if (!this.state.user) return null;
    return (
	   <Container fluid className="p-0">	
			<PersonalDetails user={this.state.user}/>
				<Row>
					<Col>
						<AddressDetails/>
					</Col>
					<Col>
					  <ContactDetails user={this.state.user}/>
					</Col>	
				</Row>
		</Container>	
    )
  }
});

//{this.state.user.name}
//			{this.state.user.given_name}
	//		{this.state.user.family_name}
		//	{this.state.user.email}





export default Personal;
