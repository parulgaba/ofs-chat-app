import React, { Component } from 'react';

import ChatListPage from './components/ChatListPage';
import CreateChat from './components/CreateChat';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="">
        <div className="container">
          <ChatListPage />
          <CreateChat />
        </div>
      </div>
    );
  }
}

export default App;
