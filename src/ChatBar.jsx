import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            username: "Anonymous"
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
    }

    handleKeyPress = function(event) {
        if(event.key === 'Enter'){
            this.props.newChat(this.state.username, event.target.value );  
            event.target.value="" 
        }
    }

    changeUsername = function(event) {
        if(event.key === 'Enter'){
            this.props.newFunction(this.state.username, event.target.value) 
            this.setState({username: event.target.value})      
        };
    }



    render() {
      return (
        <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.state.username} onKeyPress={this.changeUsername} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress} />
        </footer>
      );
    }
    
  }
  export default ChatBar;