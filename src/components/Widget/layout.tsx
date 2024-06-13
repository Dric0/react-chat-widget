import React,{ useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { GlobalState } from 'src/store/types';
import { AnyFunction } from 'src/utils/types';
import { openFullscreenPreview } from '@actions';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import FullScreenPreview from './components/FullScreenPreview';

import './style.scss';

type Props = {
  title: string;
  titleAvatar?: string;
  subtitle: string;
  onSendMessage: AnyFunction;
  onToggleConversation: AnyFunction;
  senderPlaceHolder: string;
  onQuickButtonClicked: AnyFunction;
  profileAvatar?: string;
  showCloseButton: boolean;
  fullScreenMode: boolean;
  autofocus: boolean;
  customLauncher?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  chatId: string;
  launcherOpenLabel: string;
  launcherCloseLabel: string;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  imagePreview?: boolean;
  zoomStep?: number;
  customCloseButton?: AnyFunction;
  onChatFocus?: AnyFunction;
  onChatScroll?: AnyFunction;
  avoidScrollToBottom?: boolean;
  dataSource?: Array<any>;
  inlineMode?: boolean;
}

function WidgetLayout({
  title,
  titleAvatar,
  subtitle,
  onSendMessage,
  onToggleConversation,
  senderPlaceHolder,
  onQuickButtonClicked,
  profileAvatar,
  showCloseButton,
  fullScreenMode,
  autofocus,
  customLauncher,
  onTextInputChange,
  chatId,
  launcherOpenLabel,
  launcherCloseLabel,
  sendButtonAlt,
  showTimeStamp,
  imagePreview,
  zoomStep,
  customCloseButton,
  onChatFocus,
  onChatScroll,
  avoidScrollToBottom,
  dataSource,
  inlineMode,
}: Props) {
  const dispatch = useDispatch();
  const { dissableInput, showChat, visible } = useSelector((state: GlobalState) => ({
    showChat: state.behavior?.[chatId]?.showChat || false,
    dissableInput: state.behavior?.[chatId]?.disabledInput || false,
    visible: state.preview.visible,
  }));

  useSelector((state: GlobalState) => {
    console.log(state);
  });

  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(showChat) {
      messageRef.current = document.getElementById('messages') as HTMLDivElement;
    }
    return () => {
      messageRef.current = null;
    }
  }, [showChat])
  
  const eventHandle = evt => {
    if(evt.target && evt.target.className === 'rcw-message-img') {
      const { src, alt, naturalWidth, naturalHeight } = (evt.target as HTMLImageElement);
      const obj = {
        src: src,
        alt: alt,
        width: naturalWidth,
        height: naturalHeight,
      };
      dispatch(openFullscreenPreview(obj))
    }
  }

  /**
   * Previewer needs to prevent body scroll behavior when fullScreenMode is true
   */
  useEffect(() => {
    const target = messageRef?.current;
    if(imagePreview && showChat) {
      target?.addEventListener('click', eventHandle, false);
    }

    return () => {
      target?.removeEventListener('click', eventHandle);
    }
  }, [imagePreview, showChat]);

  useEffect(() => {
    document.body.setAttribute('style', `overflow: ${visible || fullScreenMode ? 'hidden' : 'auto'}`)
  }, [fullScreenMode, visible])

  // console.log('inlineMode', inlineMode);
  console.log('showChat', inlineMode ? 'segundo comp' : 'primeiro comp', showChat);

  useEffect(() => {
    setTimeout(() => {
      if (inlineMode) {
        onToggleConversation();
      }
    }, 5000);
  }, []);

  return (
    <div
      className={cn('rcw-widget-container', {
        'rcw-full-screen': fullScreenMode,
        'rcw-previewer': imagePreview,
        'hide-chat': !showChat && !inlineMode,
        'show-chat': showChat || inlineMode,
        'inline-mode': inlineMode
        })
      }
    >
      {showChat || inlineMode ? (
        <Conversation
          title={title}
          subtitle={subtitle}
          sendMessage={onSendMessage}
          senderPlaceHolder={senderPlaceHolder}
          profileAvatar={profileAvatar}
          toggleChat={onToggleConversation}
          showCloseButton={showCloseButton}
          disabledInput={dissableInput}
          autofocus={autofocus}
          titleAvatar={titleAvatar}
          className={showChat || inlineMode ? 'active' : 'hidden'}
          onQuickButtonClicked={onQuickButtonClicked}
          onTextInputChange={onTextInputChange}
          sendButtonAlt={sendButtonAlt}
          showTimeStamp={showTimeStamp}
          customCloseButton={customCloseButton}
          onChatFocus={onChatFocus}
          onChatScroll={onChatScroll}
          chatId={chatId}
          avoidScrollToBottom={avoidScrollToBottom}
          dataSource={dataSource}
          inlineMode={inlineMode}
        />
      ) : null}
      {customLauncher ?
        customLauncher(onToggleConversation) :
        !fullScreenMode && !inlineMode &&
        <Launcher
          toggle={onToggleConversation}
          chatId={chatId}
          openLabel={launcherOpenLabel}
          closeLabel={launcherCloseLabel}
        />
      }
      {
        imagePreview && <FullScreenPreview fullScreenMode={fullScreenMode} zoomStep={zoomStep} />
      }
    </div>
  );
}

export default WidgetLayout;
