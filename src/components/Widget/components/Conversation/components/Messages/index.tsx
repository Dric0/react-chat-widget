import React, { useEffect, useRef, useState, ElementRef, ImgHTMLAttributes, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import format from 'date-fns/format';

import { scrollToBottom } from '../../../../../../utils/messages';
import { Message, Link, CustomCompMessage, GlobalState } from '../../../../../../store/types';
import { setBadgeCount, markAllMessagesRead } from '@actions';

import Loader from './components/Loader';
import './styles.scss';
import { AnyFunction } from 'src/utils/types';

type Props = {
  showTimeStamp: boolean,
  profileAvatar?: string;
  onChatScroll?: AnyFunction;
  chatId: string;
  avoidScrollToBottom?: boolean;
  dataSource?: Array<any>;
  inlineMode?: boolean;
}

function Messages({
  profileAvatar,
  showTimeStamp,
  onChatScroll,
  chatId,
  avoidScrollToBottom,
  dataSource,
  inlineMode,
}: Props) {
  const dispatch = useDispatch();
  const { messages, typing, showChat, badgeCount } = useSelector((state: GlobalState) => ({
    messages: state.messages?.[chatId]?.messages || [],
    badgeCount: state.messages?.[chatId]?.badgeCount || 0,
    typing: state.behavior?.[chatId]?.messageLoader || false,
    showChat: state.behavior?.[chatId]?.showChat || false
  }));

  const messageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // @ts-ignore
    if (!avoidScrollToBottom) {
      scrollToBottom(messageRef.current);
    }
    if (!inlineMode) {
      if (showChat && badgeCount) dispatch(markAllMessagesRead(chatId));
      else dispatch(setBadgeCount(chatId, messages.filter((message) => message.unread).length));
    }
  }, [dataSource, messages, badgeCount, showChat, inlineMode]);
    
  const getComponentToRender = (message: Message | Link | CustomCompMessage) => {
    const ComponentToRender = message.component;
    if (message.type === 'component') {
      return <ComponentToRender {...message.props} />;
    }
    return <ComponentToRender message={message} showTimeStamp={showTimeStamp} />;
  };

  // TODO: Fix this function or change to move the avatar to last message from response
  // const shouldRenderAvatar = (message: Message, index: number) => {
  //   const previousMessage = messages[index - 1];
  //   if (message.showAvatar && previousMessage.showAvatar) {
  //     dispatch(hideAvatar(index));
  //   }
  // }

  const handleScroll = (e) => {
    if (onChatScroll) {
      onChatScroll(
        e.target.scrollHeight,
        e.target.scrollTop,
        e.target.clientHeight,
      );
    }
  };

  if (dataSource) {
    return (
      <div id="messages" className="rcw-messages-container" ref={messageRef} onScroll={handleScroll}>
        <Loader typing={typing} />
        {dataSource.map((message, index) =>
          <div className="rcw-message" key={`${index}-${format(message.timestamp, 'hh:mm')}`}>
            {profileAvatar &&
              message.showAvatar &&
              <img src={profileAvatar} className="rcw-avatar" alt="profile" />
            }
            {getComponentToRender(message)}
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="messages" className="rcw-messages-container" ref={messageRef} onScroll={handleScroll}>
      {messages?.map((message, index) =>
        <div className="rcw-message" key={`${index}-${format(message.timestamp, 'hh:mm')}`}>
          {profileAvatar &&
            message.showAvatar &&
            <img src={profileAvatar} className="rcw-avatar" alt="profile" />
          }
          {getComponentToRender(message)}
        </div>
      )}
      <Loader typing={typing} />
    </div>
  );
}

export default Messages;
