import React, { Component } from 'react';
import CreateChatMutation from '../mutations/CreateChatMutation';
import './Chatbox.css';

class CreateChat extends Component {

  state = {
    from: 'Anonymous chatbot',
    content: ''
  };

  render() {
    return (
      <div className="input-wrapper">
        <input
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
            type="text"
            placeholder="Start typing..."
            onKeyPress={this.createChat}
        />
      </div>
    )

  }

  createChat = (e) => {
    if (e.key === 'Enter') {
      const { from, content } = this.state;
      CreateChatMutation(from, content, () => {
          console.log(`Mutation completed`);
          this.setState({content: ''});
      })
    }
  }

}

export default CreateChat;
