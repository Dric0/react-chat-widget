import { MessagesState } from '../types';

import { createReducer } from '../../utils/createReducer';
import { createNewMessage, createLinkSnippet, createComponentMessage } from '../../utils/messages';
import { MESSAGE_SENDER } from '../../constants';
import {
  MessagesActions,
  ADD_NEW_USER_MESSAGE,
  ADD_OLDER_MESSAGES,
  ADD_NEW_RESPONSE_MESSAGE,
  ADD_NEW_LINK_SNIPPET,
  ADD_COMPONENT_MESSAGE,
  DROP_MESSAGES,
  HIDE_AVATAR,
  DELETE_MESSAGES,
  MARK_ALL_READ,
  SET_BADGE_COUNT
} from '../actions/types';

const initialState = {};

const messagesReducer = {
  [ADD_NEW_USER_MESSAGE]: (state: MessagesState, { chatId, text, id }) =>
    ({ ...state, [chatId]: { ...state[chatId], messages: [...(state[chatId]?.messages || []), createNewMessage(text, MESSAGE_SENDER.CLIENT, id)] }}),

  [ADD_OLDER_MESSAGES]: (state: MessagesState, { chatId, component, props, showAvatar, id }) =>
    ({ ...state, [chatId]: { ...state[chatId], messages: [createComponentMessage(component, props, showAvatar, id), ...(state[chatId]?.messages || [])] }}),
    
  [ADD_NEW_RESPONSE_MESSAGE]: (state: MessagesState, { chatId, text, id }) => 
    ({ ...state, [chatId]: { ...state[chatId], messages: [...(state[chatId]?.messages || []), createNewMessage(text, MESSAGE_SENDER.RESPONSE, id)], badgeCount: (state[chatId]?.badgeCount || 0) + 1 }}),

  [ADD_NEW_LINK_SNIPPET]: (state: MessagesState, { chatId, link, id }) =>
    ({ ...state, [chatId]: { ...state[chatId], messages: [...(state[chatId]?.messages || []), createLinkSnippet(link, id)] }}),

  [ADD_COMPONENT_MESSAGE]: (state: MessagesState, { chatId, component, props, showAvatar, id }) =>
    ({ ...state, [chatId]: { ...state[chatId], messages: [...(state[chatId]?.messages || []), createComponentMessage(component, props, showAvatar, id)] }}),

  [DROP_MESSAGES]: (state: MessagesState, { chatId }) => ({ ...state, [chatId]: { ...state[chatId], messages: [] }}),

  [HIDE_AVATAR]: (state: MessagesState, { chatId, index }) => (state[chatId]?.messages || [])[index].showAvatar = false,

  [DELETE_MESSAGES]: (state: MessagesState, { chatId, count, id }) =>
    ({
      ...state,
      [chatId]: {
        ...state[chatId],
        messages: id ?
          (state[chatId]?.messages || []).filter(message => message.customId !== id) :
          (state[chatId]?.messages || []).splice((state[chatId]?.messages || []).length - 1, count)
      },
    }),

  [SET_BADGE_COUNT]: (state: MessagesState, { chatId, count }) => ({ ...state, [chatId]: { ...state[chatId], badgeCount: count }}),

  [MARK_ALL_READ]: (state: MessagesState, { chatId }) =>
    ({ ...state, [chatId]: { ...state[chatId], messages: (state[chatId]?.messages || []).map(message => ({ ...message, unread: false})), badgeCount: 0 }})
}

export default (state = initialState, action: MessagesActions) => createReducer(messagesReducer, state, action);
