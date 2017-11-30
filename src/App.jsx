import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state= {
        currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: []
    };
    this.newChat = this.newChat.bind(this);
    this.socket = null;
    this.newFunction = this.newFunction.bind(this);
  }

  newChat = function(name, value){
    const newMessage = {username: name, content: value, type: "typemessage"};
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.socket.send(JSON.stringify(newMessage));
  }

  newFunction = function(old, current){
    const newName = {oldUsername: old, username: current, type: "typenamechange"}
    this.socket.send(JSON.stringify(newName));
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function(event){
      console.log("Connected to Server")
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
      }
    });

    
    
    // console.log('componentDidMount <App />');
    // setTimeout(() => {
    //   console.log('Simulating incoming message');
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <main className="messages">
          <MessageList messages={this.state.messages}/>
        </main>
        <ChatBar username={this.state.currentUser.name} newChat={this.newChat} newFunction={this.newFunction}/>
      </div>
    );
  }
}
export default App;
