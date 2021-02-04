import React from "react";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatarMG from "../../assets/img/avatars/avatarMG.jpg";
import avatarAL from "../../assets/img/avatars/avatarAL_4.jpg";

import {
  Container,
  Grid,
  TextField,
} from "@material-ui/core";

import axios from "axios";

import {
  Badge,
  Button,
  Card,
  Col,
  Input,
  ListGroupItem,
  Media,
  Row
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Phone, Video, MoreHorizontal } from "react-feather";
import { withAuth } from '@okta/okta-react';

var dt
let RoomName = "3"
const Chat = require("twilio-chat");
const styles = {
  textField: { width: "100%", borderWidth: 0, borderColor: "transparent" },
  textFieldContainer: { flex: 1, marginRight: 12 },
  
  gridItemChatList: { overflow: "auto", height: "66vh" },
  gridItemMessage: { marginTop: 12, marginBottom: 12 }
  
};

//console.log( "Temp", this.state)
//	console.log("1",message)
//	console.log("2",email)
//	console.log("3",this.props)


class ChatMessage extends React.Component {
  
  render() {
    const { message, email } = this.props;
    const isOwnMessage = message.author === email;
	
	const FnTimeNow = () => {
	dt = new Date(message.dateCreated.toISOString()).toLocaleString([], { hour: '2-digit', minute: "2-digit", hour12: true });
	return (
		dt 
	);
	}

	const FnImage = (props) => {
		switch(props.email) {
			case 'mark.grall@gmail.com':
			  return <img src={avatarMG} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
			case 'aideenleacy@gmail.com':
			  return <img src={avatarAL} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
			
			default:
			  return <img src={avatar1} className="rounded-circle mr-1" alt={props.email} width="40" height="40" /> ;
		}
	}

	const Calc_Position= isOwnMessage ? "right" : "left" ;	
    
	
	return (
	  <div className={`chat-message-${Calc_Position} pb-4`}>
		<div>
		  <FnImage email={message.author} />
		  <div className="text-muted small text-nowrap mt-2">
			<FnTimeNow />			
		  </div>
		</div>
		<div
		  className={`flex-shrink-1 bg-light rounded py-2 px-3 ${
			Calc_Position === "right" ? "mr-3" : "ml-3"
		  }`}
		>
		  <div className="font-weight-bold mb-1">{message.author}</div>
		  {message.body}
		</div>
	  </div>
    );
  }
}

//Author +  {this.props.message.author} + EMAIL - +  {this.props.email} + Body - + {message.body}

const Contacts = () => (
<Container className="p-0">
	<div className="px-4 d-none d-md-block">
		<Media className="align-items-center">
		  <Media body>
			<Input type="text" className="my-3" placeholder="Search..." />
		  </Media>
		</Media>
	</div>

	<ListGroupItem action tag="a" href="#" className="border-0">
		<Badge color="success" className="float-right">
		  5
		</Badge>
		<Media>
		  <img
			src={avatar4}
			className="rounded-circle mr-1"
			alt="Ashley Briggs"
			width="40"
			height="40"
		  />
		  <Media body className="ml-3">
			Ashley Briggs
			<div className="small">
			  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
			  Online
			</div>
		  </Media>
		</Media>
	</ListGroupItem>
	<ListGroupItem action tag="a" href="#" className="border-0">
		<Badge color="success" className="float-right">
		  2
		</Badge>
		<Media>
		  <img src={avatar2} className="rounded-circle mr-1" alt="Carl Jenkins" width="40" height="40" />
		  <Media body className="ml-3">
			Carl Jenkins
			<div className="small">
			  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
			  Online
			</div>
		  </Media>
		</Media>
	</ListGroupItem>

	<hr className="d-block d-lg-none mt-1 mb-0" />
</Container>
)

const Header = () => (
<div className="py-2 px-4 border-bottom d-none d-lg-block">
	<Media className="align-items-center py-1">
	  <div className="position-relative">
		<img
		  src={avatar3}
		  className="rounded-circle mr-1"
		  alt="Bertha Martin"
		  width="40"
		  height="40"
		/>
	  </div>
	  <Media body className="pl-3">
		<strong>Bertha Martin</strong>
		<div className="text-muted small">
		  <em>Typing...</em>
		</div>
	  </Media>
	  <div>
		<Button size="lg" color="primary" className="px-3 mr-2">
		  <Phone className="feather" />
		</Button>
		<Button
		  size="lg"
		  color="info"
		  className="mr-2 px-3 d-none d-md-inline-block"
		>
		  <Video className="feather" />
		</Button>
		<Button size="lg" color="light" className="px-3 border">
		  <MoreHorizontal className="feather" />
		</Button>
	  </div>
	</Media>
  </div>

)

const OktaChat = withAuth(class OChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
		user: null,
		email: "",
		room: ""
	};
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
	   <ChatScreen2 Room={RoomName} Email={this.state.user.email} UserName= {this.state.user.name} />
    )
	
  }
});


class ChatScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      messages: [],
      loading: false,
      channel: null,
	  UserName: this.props.UserName,
	  Email:this.props.Email,
	  Room:this.props.Room
    };
    this.scrollDiv = React.createRef();
  }
   
  getToken = async (email) => {
    const response = await axios.get(`http://localhost:5000/token/${email}`);
    const { data } = response;
    return data.token;
  };

  componentDidMount = async () => {
//	console.log( "6", this.props)	
	
	let token = "";

  //  if (!email || !room) { this.props.history.replace("/");  }

    this.setState({ loading: true });
	
    try {	
      token = await this.getToken(this.props.Email);
	} catch {
	  throw new Error("unable to get token, please reload this page");
    }
	
	const client = await Chat.Client.create(token);

    client.on("tokenAboutToExpire", async () => {
	  const token = await this.getToken(this.props.Email);
      client.updateToken(token);
    });

    client.on("tokenExpired", async () => {
	  const token = await this.getToken(this.props.Email);
      client.updateToken(token);
    });

    client.on("channelJoined", async (channel) => {
      // getting list of all messages since this is an existing channel
	  const messages = await channel.getMessages();
      this.setState({ messages: messages.items || [] });	
	  this.scrollToBottom(); 	
	});

    try {
	  const channel = await client.getChannelByUniqueName(this.props.Room);
      await this.joinChannel(channel);
      this.setState({ channel, loading: false });
    } catch {
      try {
        const channel = await client.createChannel({
          uniqueName: this.props.Room,
          friendlyName: this.props.Room,
        });
        await this.joinChannel(channel);
        this.setState({ channel, loading: false });
      } catch {
		throw new Error("unable to create channel, please reload this page");
      }
    }
	
//End of Did Mount
  };

  joinChannel = async (channel) => {
    if (channel.channelState.status !== "joined") {
      await channel.join();
    }
    
	channel.on("messageAdded", this.handleMessageAdded);
	channel.on('typingStarted', this.handleTyping );
  };

  handleTyping = async (channel) => {
	//channel.on('typingStarted', alert("Here") ) 
	console.log("Typing" , this.state);
  };

  handleMessageAdded = (message) => {
    const { messages } = this.state;
    this.setState(
      {
        messages: !!messages ? [...messages, message] : [message],
      },
	  this.scrollToBottom
    );
  };

  scrollToBottom = () => {
    const scrollHeight = this.scrollDiv.current.scrollHeight;
    const height = this.scrollDiv.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.scrollDiv.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  sendMessage = () => {
    const { text, channel } = this.state;
    if (text && String(text).trim()) {
      this.setState({ loading: true });
      channel && channel.sendMessage(text);
      this.setState({ text: "", loading: false });
    }
  };

  handleChange_Value1 = (event) => {
		this.setState({ text: event.target.value })
	}
		
  handleKeyPress = (e) => {    
	const { channel } = this.state;
	if (e.charCode === 13) {
		this.sendMessage();
	} 
	else {
	//console.log("Log", this.state.channel)
	// else send the Typing Indicator signal
	channel.typing();
	//console.log("Channel", this.state.channel)
	}
  }

  render() {
    const { text, messages, channel } = this.state;

//	console.log("Render location", location)
//	console.log("Render props", this.props)
//	console.log("Render State", this.state)
	
 return (
      <Container className="mb-0 mt-0"  >
		<Card>
			<Row noGutters>
				<Col lg={5} xl={3} className="border-right">
				  <Contacts/>
				</Col>
				<Col lg={7} xl={9}>
					<Header/>

					  <Grid item style={styles.gridItemChatList} ref={this.scrollDiv}>							
						{messages &&
							messages.map((message) => (
							
							  <ChatMessage
								key={message.index}
								message={message}
								email={this.props.Email}
							  />
							))}
					  </Grid>
					  
					  <Grid item style={styles.gridItemMessage}>
						<Grid
						  container
						  direction="row"
						  justify="center"
						  alignItems="center"
						>
						  <Grid item style={styles.textFieldContainer}>
							<TextField
							  required
							  style={styles.textField}
							  placeholder="Enter message"
							  variant="outlined"
							  multiline
							  rows={2}
							  value={text}
							  disabled={!channel}
							  onChange={(event) =>
								this.setState({ text: event.target.value })
							  }
							  onKeyPress={this.handleKeyPress}
							/>
						  </Grid>
						  <Grid item>
							<Button
								className="mr-2"
								color="primary"
								onClick={this.sendMessage}
								disabled={!channel || !text}
							>Send</Button>
						  </Grid>
						</Grid>
						
					  </Grid>
					
				</Col>
			</Row>
		</Card>
      </Container>
    );
  }
}

//---------------------------------

//export default ChatNew;
//export default ChatScreen2;
export default OktaChat;