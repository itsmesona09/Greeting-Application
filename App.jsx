import { useEffect, useState } from 'react'
import React from 'react';
import './App.css'

class Customise extends React.Component {
  state = {
    color: 'black',
    recepientname: 'None',
    sendername: 'None',
    message: 'None',
    backgroundColor: 'white',
  };

  changeColor = () => {
    const textColor = document.getElementById('colorvalue').value;
    this.setState({
      color: textColor,
    });
  };

  changeRecepientName = () => {
    const newRecepient = document.getElementById('recepientvalue').value;
    this.setState({
      recepientname: newRecepient,
    });
  };

  changeSenderName = () => {
    const newSender = document.getElementById('sendervalue').value;
    this.setState({
      sendername: newSender,
    });
  };

  changeMessage = () => {
    const newtextMessage = document.getElementById('messagevalue').value;
    this.setState({
      message: newtextMessage,
    });
  };

  changeBackgroundColor = () => {
    const newbackgroundColor = document.getElementById('backgroundcolorvalue').value;
    this.setState({
      backgroundColor: newbackgroundColor,
    });
  };

  sendGreeting = () =>{
    alert(`Sent successfully to ${this.state.recepientname}`);
    setTimeout(()=>{
      window.location.reload();
    },200);
  }

  render() {
    return (
      <div className="customize-container">
        <div className="input-section">
          <label className='label-selection'>
            <p>Color</p>
            <input type="text" id="colorvalue" onChange={this.changeColor} />
          </label>
          <label className='label-selection'>
          <p>Background Color</p>
            <input type="text" id="backgroundcolorvalue" onChange={this.changeBackgroundColor} />
          </label>
          <label className='label-selection'>
          <p>Recepient Name</p>
            <input type="text" id="recepientvalue" onChange={this.changeRecepientName} />
          </label>
          <label className='label-selection'>
          <p>Sender Name</p>
            <input type="text" id="sendervalue" onChange={this.changeSenderName} />
          </label>
          <label className='label-selection'>
          <p>Message</p>
            <input type="text" id="messagevalue" onChange={this.changeMessage} />
          </label>
        </div>
        <div className="greeting-card-section">
          <Greeting
            color={this.state.color}
            backgroundColor={this.state.backgroundColor}
            recepientname={this.state.recepientname}
            sendername={this.state.sendername}
            message={this.state.message}
          />
        </div>
        <div class="button-click">
          <button onClick={this.sendGreeting}>Send</button>
        </div>
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const messageStyle = {
      color: this.props.color,
      backgroundColor: this.props.backgroundColor,
    };
    return (
      <div className="greeting-card" style={messageStyle}>
        <p class='recep-card'>Dear {this.props.recepientname}!</p>
        <div class='mess-card'>
          <p>{this.props.message}</p>
        </div>
        <p class='sender-card'>Yours truly {this.props.sendername}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Customise />
    </div>
  );
}

export default App