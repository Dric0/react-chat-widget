import React, { Component } from 'react';

import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet, isWidgetOpened, resetBehavior } from '../index';
import { addUserMessage } from '..';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
    addLinkSnippet({ link: 'https://google.com', title: 'Google' });
    addResponseMessage('![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)');
    addResponseMessage('![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)');
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === 'fruits') {
        setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  handleSubmit = (msgText: string) => {
    if(msgText.length < 80) {
      addUserMessage("Uh oh, please write a bit more.");
      return false;
    }
    return true;
  }

  customCloseButton = (handleToggle) => {
    return (
      <button className="rcw-close-button" onClick={handleToggle}>
        X
      </button>
    );
  }

  render() {
    return (
      <div>
        <button style={{position: 'absolute', right: 40, bottom: 150}}>test</button>
        <Widget
          title="Bienvenido"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
          customCloseButton={this.customCloseButton}
          onChatScroll={(scrollHeight, scrollTop, clientHeight) => {
            console.log('scrollHeight', scrollHeight);
            console.log('scrollTop', scrollTop);
            console.log('clientHeight', clientHeight);
          }}
        />
      </div>
    );
  }
}
