import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleChat, addUserMessage } from '../../store/actions';
import { AnyFunction } from '../../utils/types';

import WidgetLayout from './layout';

type Props = {
  title: string;
  titleAvatar?: string;
  subtitle: string;
  senderPlaceHolder: string;
  profileAvatar?: string;
  showCloseButton: boolean;
  fullScreenMode: boolean;
  autofocus: boolean;
  customLauncher?: AnyFunction;
  handleNewUserMessage: AnyFunction;
  handleQuickButtonClicked?: AnyFunction;
  handleTextInputChange?: (event: any) => void;
  chatId: string;
  launcherOpenLabel: string;
  launcherCloseLabel: string;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  imagePreview?: boolean;
  zoomStep?: number;
  handleSubmit?: AnyFunction;
  ignoreNewUserMessage?: boolean;
  customCloseButton?: AnyFunction;
  onChatFocus?: AnyFunction;
  onChatScroll?: AnyFunction;
  avoidScrollToBottom?: boolean;
  dataSource?: Array<any>;
  inlineMode?: boolean;
}

function Widget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  profileAvatar,
  showCloseButton,
  fullScreenMode,
  autofocus,
  customLauncher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  handleTextInputChange,
  chatId,
  launcherOpenLabel,
  launcherCloseLabel,
  sendButtonAlt,
  showTimeStamp,
  imagePreview,
  zoomStep,
  handleSubmit,
  ignoreNewUserMessage,
  customCloseButton,
  onChatFocus,
  onChatScroll,
  avoidScrollToBottom,
  dataSource,
  inlineMode,
}: Props) {
  const dispatch = useDispatch();

  const toggleConversation = () => {
    dispatch(toggleChat(chatId));
  }

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    
    if (!userInput.trim()) {      
      return;      
    }
    
    handleSubmit?.(userInput);
    if (!ignoreNewUserMessage) {
      dispatch(addUserMessage(chatId, userInput));
    }
    handleNewUserMessage(userInput);
    event.target.message.value = '';
  }

  const onQuickButtonClicked = (event, value) => {
    event.preventDefault();
    handleQuickButtonClicked?.(value)
  }

  return (
    <WidgetLayout
      onToggleConversation={toggleConversation}
      onSendMessage={handleMessageSubmit}
      onQuickButtonClicked={onQuickButtonClicked}
      title={title}
      titleAvatar={titleAvatar}
      subtitle={subtitle}
      senderPlaceHolder={senderPlaceHolder}
      profileAvatar={profileAvatar}
      showCloseButton={showCloseButton}
      fullScreenMode={fullScreenMode}
      autofocus={autofocus}
      customLauncher={customLauncher}
      onTextInputChange={handleTextInputChange}
      chatId={chatId}
      launcherOpenLabel={launcherOpenLabel}
      launcherCloseLabel={launcherCloseLabel}
      sendButtonAlt={sendButtonAlt}
      showTimeStamp={showTimeStamp}
      imagePreview={imagePreview}
      zoomStep={zoomStep}
      customCloseButton={customCloseButton}
      onChatFocus={onChatFocus}
      onChatScroll={onChatScroll}
      avoidScrollToBottom={avoidScrollToBottom}
      dataSource={dataSource}
      inlineMode={inlineMode}
    />
  );
}

export default Widget;
