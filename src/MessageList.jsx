import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
    console.log('Rendering <MessageList/>');

    // This is the story all about how
    // some data got itself turned upside down
    // So take a little minute at your own workstation
    // I'll tell you how to turn arrays of data into presentation.
    
    const message = this.props.messages.map((messageDataObject, index)=> {
        return <Message 
        message={messageDataObject}
        key={index}/>;
    });
      return (
        <div>
        {message}
        </div>
      );
    }
  }

  export default MessageList;