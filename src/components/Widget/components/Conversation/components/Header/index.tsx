import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalState } from '../../../../../../store/types';
import { setBadgeCount } from '../../../../../../store/actions';

const close = require('../../../../../../../assets/clear-button.svg') as string;

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  toggle: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
}

function Header({ title, subtitle, toggle, showCloseButton, titleAvatar }: Props) {
  const dispatch = useDispatch();
  const { showChat } = useSelector((state: GlobalState) => ({
    showChat: state.behavior.showChat
  }));
  const toggleChat = () => {
    toggle();
    if (!showChat) dispatch(setBadgeCount(0));
  }

  return (
    <div className="rcw-header">
      {showCloseButton &&
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      }
      <h4 className="rcw-title">
        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile" />}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
  );
}

export default Header;
