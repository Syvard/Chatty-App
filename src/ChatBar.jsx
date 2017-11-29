import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            username: ""
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
    }

    handleKeyPress = function(event) {
        if(event.key === 'Enter'){
            console.log(event.target.value) 
            this.props.newChat(this.state.username, event.target.value );  
            event.target.value="" 
        }
    }

    changeUsername = function(event) {
        if(event.key === 'Enter'){
            this.setState({username: event.target.value})
           
        };
    }



    render() {
    console.log('Rendering <ChatBar/>');
      return (
        <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={this.changeUsername} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress} />
        </footer>
      );
    }
    
  }
  export default ChatBar;