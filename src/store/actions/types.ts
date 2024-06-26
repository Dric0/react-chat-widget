import { ElementType } from 'react';

import { LinkParams, FullscreenPreviewState } from '../types';

export const TOGGLE_CHAT = 'BEHAVIOR/TOGGLE_CHAT';
export const RESET_BEHAVIOR_REDUCER = 'BEHAVIOR/RESET_BEHAVIOR_REDUCER';
export const TOGGLE_INPUT_DISABLED = 'BEHAVIOR/TOGGLE_INPUT_DISABLED';
export const TOGGLE_MESSAGE_LOADER = 'BEHAVIOR/TOGGLE_MSG_LOADER';
export const SET_BADGE_COUNT = 'BEHAVIOR/SET_BADGE_COUNT';
export const ADD_NEW_USER_MESSAGE = 'MESSAGES/ADD_NEW_USER_MESSAGE';
export const ADD_OLDER_MESSAGES = 'MESSAGES/ADD_OLDER_MESSAGES';
export const ADD_NEW_RESPONSE_MESSAGE = 'MESSAGES/ADD_NEW_RESPONSE_MESSAGE';
export const ADD_NEW_LINK_SNIPPET = 'MESSAGES/ADD_NEW_LINK_SNIPPET';
export const ADD_COMPONENT_MESSAGE = 'MESSAGES/ADD_COMPONENT_MESSAGE';
export const DROP_MESSAGES = 'MESSAGES/DROP_MESSAGES';
export const HIDE_AVATAR = 'MESSAGES/HIDE_AVATAR';
export const DELETE_MESSAGES = 'MESSAGES/DELETE_MESSAGES';
export const MARK_ALL_READ = 'MESSAGES/MARK_ALL_READ';
export const SET_QUICK_BUTTONS = 'SET_QUICK_BUTTONS';
export const OPEN_FULLSCREEN_PREVIEW = 'FULLSCREEN/OPEN_PREVIEW';
export const CLOSE_FULLSCREEN_PREVIEW = 'FULLSCREEN/CLOSE_PREVIEW';

export interface ToggleChat {
  type: typeof TOGGLE_CHAT;
  chatId: string;
}

export interface ResetBehavior {
  type: typeof RESET_BEHAVIOR_REDUCER;
  chatId: string;
}

export interface ToggleInputDisabled {
  type: typeof TOGGLE_INPUT_DISABLED;
  chatId: string;
}

export interface AddUserMessage {
  type: typeof ADD_NEW_USER_MESSAGE;
  chatId: string;
  text: string;
  id?: string;
}

export interface AddOlderMessages {
  type: typeof ADD_OLDER_MESSAGES;
  chatId: string;
  component: ElementType;
  props: any;
  showAvatar: boolean;
  id?: string;
}

export interface AddResponseMessage {
  type: typeof ADD_NEW_RESPONSE_MESSAGE;
  chatId: string;
  text: string;
  id?: string;
}

export interface ToggleMsgLoader {
  type: typeof TOGGLE_MESSAGE_LOADER;
  chatId: string;
}

export interface AddLinkSnippet {
  type: typeof ADD_NEW_LINK_SNIPPET;
  chatId: string;
  link: LinkParams;
  id?: string;
}

export interface RenderCustomComponent {
  type: typeof ADD_COMPONENT_MESSAGE;
  chatId: string;
  component: ElementType;
  props: any;
  showAvatar: boolean;
  id?: string;
}

export interface DropMessages {
  type: typeof DROP_MESSAGES;
  chatId: string;
}

export interface HideAvatar {
  type: typeof HIDE_AVATAR;
  chatId: string;
  index: number;
}

export interface DeleteMessages {
  type: typeof DELETE_MESSAGES;
  chatId: string;
  count: number;
  id?: string;
}

export interface SetQuickButtons {
  type: typeof SET_QUICK_BUTTONS;
  chatId: string;
  buttons: Array<{ label: string, value: string | number }>;
}

export interface SetBadgeCount {
  type: typeof SET_BADGE_COUNT;
  chatId: string;
  count: number;
}

export interface MarkAllMessagesRead {
  type: typeof MARK_ALL_READ;
  chatId: string;
}

export type BehaviorActions = ToggleChat | ToggleInputDisabled | ToggleMsgLoader | ResetBehavior;

export type MessagesActions = AddUserMessage | AddOlderMessages | AddResponseMessage | AddLinkSnippet | RenderCustomComponent
                              | DropMessages | HideAvatar | DeleteMessages | MarkAllMessagesRead | SetBadgeCount;

export type QuickButtonsActions = SetQuickButtons;

export interface openFullscreenPreview {
  type: typeof OPEN_FULLSCREEN_PREVIEW;
  payload: FullscreenPreviewState
}

export interface closeFullscreenPreview {
  type: typeof CLOSE_FULLSCREEN_PREVIEW;
}

export type FullscreenPreviewActions = openFullscreenPreview | closeFullscreenPreview;