import React, { Component } from 'react';
import MessageStore from '../stores/MessageStore';


import socket from '../socket-init';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      socket,
      messages: MessageStore.getAllMessages(),
    };
    this.sendMsg = this.sendMsg.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    MessageStore.startListening(this.onChange);
  }

  componentWillUnmount() {
    MessageStore.stopListening(this.onChange);
  }

  onChange() {
    this.setState({ messages: MessageStore.getAllMessages() });
  }

  sendMsg() {
    const message = this.refs.msg.value;
    this.state.socket.emit('click', { message });
  }

  render() {
    const { messages } = this.state;
    console.log('messages:', messages)
    return (
      <div className="container">
        <input type="text" ref="msg" />
        <button className="btn" onClick={this.sendMsg}>send</button>
        {messages.map((obj, i) =>(
          <p key={i}>{obj.message}</p>
        ))}
      </div>
    );
  }
}
