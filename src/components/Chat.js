import React from 'react';
import './Chatbox.css';

import {
  createFragmentContainer,
  graphql
} from 'react-relay';

const Chat = ({message}) => (
  <div className="chat-box">
      <div>{message.from}</div>
      <div className="msg-wrapper">
        <div className="msg-content">
          {message.content}
        </div>
      </div>
  </div>
);

export default createFragmentContainer(Chat, graphql`
fragment Chat_message on Chat {
  id
  content
  createdAt
  from
}
`)
