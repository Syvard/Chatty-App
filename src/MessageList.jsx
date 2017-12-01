import React, {Component} from 'react';
import Message from './Message.jsx';
import Announcement from './Announcement.jsx';

class MessageList extends Component {
    render() {
    console.log('Rendering <MessageList/>');

    // This is the story all about how
    // some data got itself turned upside down
    // So take a little minute at your own workstation
    // I'll tell you how to turn arrays of data into presentation.

    // const announcement = this.props.messages.map((messageDataObject.message => {
    //   return <NameChange
    //   message={messageDataObject.message}/>;
    // });

    
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