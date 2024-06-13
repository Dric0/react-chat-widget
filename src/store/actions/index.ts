import { ElementType } from 'react';

import * as actionsTypes from './types';
import { LinkParams, ImageState } from '../types';

export function toggleChat(chatId: string): actionsTypes.ToggleChat {
  return {
    type: actionsTypes.TOGGLE_CHAT,
    chatId
  };
}

export function resetBehavior(chatId: string): actionsTypes.ResetBehavior {
  return {
    type: actionsTypes.RESET_BEHAVIOR_REDUCER,
    chatId
  };
}

export function toggleInputDisabled(chatId: string): actionsTypes.ToggleInputDisabled {
  return {
    type: actionsTypes.TOGGLE_INPUT_DISABLED,
    chatId
  };
}

export function addUserMessage(chatId: string, text: string, id?: string): actionsTypes.AddUserMessage {
  return {
    type: actionsTypes.ADD_NEW_USER_MESSAGE,
    chatId,
    text,
    id
  };
}

export function addOlderMessages(
  chatId: string,
  component: ElementType,
  props: any,
  showAvatar: boolean,
  id?: string
): actionsTypes.AddOlderMessages {
  return {
    type: actionsTypes.ADD_OLDER_MESSAGES,
    chatId,
    component,
    props,
    showAvatar,
    id
  };
}

export function addResponseMessage(chatId: string, text: string, id?: string): actionsTypes.AddResponseMessage {
  return {
    type: actionsTypes.ADD_NEW_RESPONSE_MESSAGE,
    chatId,
    text,
    id
  };
}

export function toggleMsgLoader(chatId: string): actionsTypes.ToggleMsgLoader {
  return {
    type: actionsTypes.TOGGLE_MESSAGE_LOADER,
    chatId
  }
}

export function addLinkSnippet(chatId: string, link: LinkParams, id?: string): actionsTypes.AddLinkSnippet {
  return {
    type: actionsTypes.ADD_NEW_LINK_SNIPPET,
    chatId,
    link,
    id
  };
}

export function renderCustomComponent(
  chatId: string,
  component: ElementType,
  props: any,
  showAvatar: boolean,
  id?: string
): actionsTypes.RenderCustomComponent {
  return {
    type: actionsTypes.ADD_COMPONENT_MESSAGE,
    chatId,
    component,
    props,
    showAvatar,
    id
  };
}

export function dropMessages(chatId: string): actionsTypes.DropMessages {
  return {
    type: actionsTypes.DROP_MESSAGES,
    chatId
  };
}

export function hideAvatar(chatId: string, index: number): actionsTypes.HideAvatar {
  return {
    type: actionsTypes.HIDE_AVATAR,
    chatId,
    index
  };
}

export function setQuickButtons(chatId: string, buttons: Array<{ label: string, value: string | number }>): actionsTypes.SetQuickButtons {
  return {
    type: actionsTypes.SET_QUICK_BUTTONS,
    chatId,
    buttons
  }
}

export function deleteMessages(chatId: string, count: number, id?: string): actionsTypes.DeleteMessages {
  return {
    type: actionsTypes.DELETE_MESSAGES,
    chatId,
    count,
    id
  }
}

export function setBadgeCount(chatId: string, count: number): actionsTypes.SetBadgeCount {
  return {
    type: actionsTypes.SET_BADGE_COUNT,
    chatId,
    count
  }
}

export function markAllMessagesRead(chatId: string): actionsTypes.MarkAllMessagesRead {
  return {
    type: actionsTypes.MARK_ALL_READ,
    chatId
  }
}

export function openFullscreenPreview(payload: ImageState): actionsTypes.FullscreenPreviewActions {
  return {
    type: actionsTypes.OPEN_FULLSCREEN_PREVIEW,
    payload
  };
}

export function closeFullscreenPreview(): actionsTypes.FullscreenPreviewActions {
  return {
    type: actionsTypes.CLOSE_FULLSCREEN_PREVIEW
  };
}
