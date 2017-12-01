import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state= {
        currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: [],
        users: 0
    };
    this.newChat = this.newChat.bind(this);
    this.socket = null;
    this.nameChange = this.nameChange.bind(this);
  }

  //Creates a new chat message to go into the chat window, sends information to the websocket server.
  newChat = function(name, value){
    const newMessage = {username: name, content: value, type: "typemessage"};
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.socket.send(JSON.stringify(newMessage));
  }

  //Sends the old username and the updated username to the websocket server.
  nameChange = function(old, current){
    const newName = {oldUsername: old, username: current, type: "typenamechange"}
    this.socket.send(JSON.stringify(newName));
  }

  //Handles the connection to server as well as sorts the information coming from the websocket server
  //displaying the messages that are filtered based on the switch function.
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function(event){
    }

    this.socket.addEventListener('message', (msg) => {
      const newMessageObject = JSON.parse(msg.data);
      switch(newMessageObject.type){
        case "typemessage":
          this.setState({messages: this.state.messages.concat(newMessageObject)})
          break;
        case "typenamechange":
          this.setState({messages: this.state.messages.concat(newMessageObject)})
        break;
        case "userCount":
        this.setState({users: newMessageObject.number})
      }
    });
  }

  //Renders the html with our modules that display updated code through the virtual DOM.
  render() {
    return (
      <div>
        <Navbar users={this.state.users}/>
        <main className="messages">
          <MessageList messages={this.state.messages}/>
        </main>
        <ChatBar username={this.state.currentUser.name} newChat={this.newChat} nameChange={this.nameChange}/>
      </div>
    );
  }
}
export default App;
