import React, { Component } from 'react';

import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  toggleMsgLoader,
  addLinkSnippet,
  isWidgetOpened,
  resetBehavior,
  renderCustomComponent,
  addOlderMessages,
  deleteMessages,
} from '../index';
import { addUserMessage } from '..';

const CustomOwnMessage = (props) => {
  const {
    text,
    timestamp,
  } = props;

  return (
    <div className="rcw-client">
      <div className="rcw-message-text">
        <p>{text}</p>
      </div>
      <span className="rcw-timestamp">
        {timestamp}
      </span>
    </div>
  );
};

export default class App extends Component {
  state = {
    dataSource: [],
  }

  componentDidMount() {
    addResponseMessage('normal', 'Welcome to this awesome chat!');
    addLinkSnippet('normal', { link: 'https://google.com', title: 'Google' });
    addResponseMessage('normal', '![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)');
    addResponseMessage('normal', '![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)');
    addOlderMessages(
      'normal',
      CustomOwnMessage,
      {
        text: '1',
      },
    );
    addOlderMessages(
      'normal',
      CustomOwnMessage,
      {
        text: '2',
      },
    );
    this.setState({
      dataSource: this.getDataSource(),
    });
    setTimeout(() => {
      deleteMessages('inline', 0);
    }, 5000);
    // toggleMsgLoader();
    // setTimeout(() => {
    //   this.setState({
    //     dataSource: [...this.getDataSource(), {
    //       component: CustomOwnMessage,
    //       props: {
    //         text: '3',
    //         id: '3',
    //         timestamp: '2022-04-05T19:01:05-03:00',
    //       },
    //       type: 'component',
    //       timestamp: new Date(),
    //       unread: true
    //     },],
    //   });
    //   toggleMsgLoader();
    // }, 5000);
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader('normal');
    setTimeout(() => {
      toggleMsgLoader('normal');
      if (newMessage === 'fruits') {
        setQuickButtons('normal', [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage('normal', newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage('normal', 'Selected ' + e);
    setQuickButtons('normal', []);
  }

  handleSubmit = (msgText: string) => {
    if(msgText.length < 80) {
      addUserMessage('normal', "Uh oh, please write a bit more.");
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

  getDataSource = () => {
    const arr = [
      {
        component: CustomOwnMessage,
        props: {
          text: '1',
          id: '1',
          timestamp: '2022-04-05T18:59:51-03:00',
        },
        type: 'component',
        timestamp: new Date(),
        unread: true
      },
      {
        component: CustomOwnMessage,
        props: {
          text: '2',
          id: '2',
          timestamp: '2022-04-05T19:01:05-03:00',
        },
        type: 'component',
        timestamp: new Date(),
        unread: true
      },
      {
        component: CustomOwnMessage,
        props: {
          text: '2',
          id: '2',
          timestamp: '2022-04-05T19:01:05-03:00',
        },
        type: 'component',
        timestamp: new Date(),
        unread: true
      },
      {
        component: CustomOwnMessage,
        props: {
          text: '2',
          id: '2',
          timestamp: '2022-04-05T19:01:05-03:00',
        },
        type: 'component',
        timestamp: new Date(),
        unread: true
      },
      {
        component: CustomOwnMessage,
        props: {
          text: '2',
          id: '2',
          timestamp: '2022-04-05T19:01:05-03:00',
        },
        type: 'component',
        timestamp: new Date(),
        unread: true
      },
    ];
    return arr;
  }

  render() {
    return (
      <div>
        <button style={{position: 'absolute', right: 40, bottom: 150}}>test</button>
        <Widget
          chatId="normal"
          title="Bienvenido"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
          customCloseButton={this.customCloseButton}
          // dataSource={this.state.dataSource}
        />
        <Widget
          chatId="inline"
          title="Bienvenido 2"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
          customCloseButton={this.customCloseButton}
          dataSource={this.state.dataSource}
          inlineMode
        />
      </div>
    );
  }
}
