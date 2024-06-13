import React from 'react';
import cn from 'classnames';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';

import { AnyFunction } from '../../../../utils/types';

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  senderPlaceHolder: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  className: string;
  sendMessage: AnyFunction;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  customCloseButton?: AnyFunction;
  onChatFocus?: (event: any) => void;
  onChatScroll?: (event: any) => void;
  chatId: string;
  avoidScrollToBottom?: boolean;
  dataSource?: Array<any>;
  inlineMode?: boolean;
};

function Conversation({
  title,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  disabledInput,
  autofocus,
  className,
  sendMessage,
  toggleChat,
  profileAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  customCloseButton,
  onChatFocus,
  onChatScroll,
  chatId,
  avoidScrollToBottom,
  dataSource,
  inlineMode,
}: Props) {
  return (
    <div
      className={cn('rcw-conversation-container', className)}
      aria-live="polite"
      role="presentation"
      onClick={onChatFocus}
    >
      <Header
        chatId={chatId}
        title={title}
        subtitle={subtitle}
        toggle={toggleChat}
        showCloseButton={showCloseButton}
        titleAvatar={titleAvatar}
        customCloseButton={customCloseButton}
      />
      <Messages
        profileAvatar={profileAvatar}
        showTimeStamp={showTimeStamp}
        onChatScroll={onChatScroll}
        chatId={chatId}
        avoidScrollToBottom={avoidScrollToBottom}
        dataSource={dataSource}
        inlineMode={inlineMode}
      />
      <QuickButtons chatId={chatId} onQuickButtonClicked={onQuickButtonClicked} />
      <Sender
        chatId={chatId}
        sendMessage={sendMessage}
        placeholder={senderPlaceHolder}
        disabledInput={disabledInput}
        autofocus={autofocus}
        onTextInputChange={onTextInputChange}
        buttonAlt={sendButtonAlt}
      />
    </div>
  );
}

export default Conversation;
