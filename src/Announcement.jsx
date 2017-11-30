import React, {Component} from 'react';

class Announcement extends Component {
    render() {
    console.log('Rendering <Message/>');
      return (
        <div className="message announcement">
          <span className="message-username">Announcement</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
      );
    }
  }
  export default Announcement;