import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalState } from '../../../../../../store/types';
import { AnyFunction } from 'src/utils/types';
import { setBadgeCount } from '../../../../../../store/actions';

const close = require('../../../../../../../assets/clear-button.svg') as string;

import './style.scss';

type Props = {
  chatId: string;
  title: string;
  subtitle: string;
  toggle: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
  customCloseButton?: AnyFunction;
}

function Header({ chatId, title, subtitle, toggle, showCloseButton, titleAvatar, customCloseButton }: Props) {
  const dispatch = useDispatch();
  const { showChat } = useSelector((state: GlobalState) => ({
    showChat: state.behavior?.[chatId]?.showChat || false,
  }));
  const toggleChat = () => {
    toggle();
    if (!showChat) dispatch(setBadgeCount(chatId, 0));
  }

  const renderCloseButton = () => {
    if (showCloseButton) {
      if (customCloseButton) {
        return customCloseButton(toggleChat);
      }
      return (
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      );
    }
    return null;
  }

  return (
    <div className="rcw-header">
      {renderCloseButton()}
      <h4 className="rcw-title">
        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile" />}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
  );
}

export default Header;
