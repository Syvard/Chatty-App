import React, {Component} from 'react';
import Message from './Message.jsx';
import Announcement from './Announcement.jsx';

class MessageList extends Component {
    render() {
      
    // v leaving this in here because Joel gave me hilarious help then wrote this.
    // This is the story all about how
    // some data got itself turned upside down
    // So take a little minute at your own workstation
    // I'll tell you how to turn arrays of data into presentation.
    
    const message = this.props.messages.map((messageDataObject, index)=> {
      switch(messageDataObject.type){
        case 'typemessage':
          return <Message 
          message={messageDataObject}
          key={index}/>;
          break;

        case 'typenamechange':
          return <Announcement
          message={messageDataObject}
          key={index}/>;
          break;
      }
    });
      return (
        <div>
        {message}
        </div>
      );
    }
  }

  export default MessageList;