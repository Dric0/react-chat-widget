import { createReducer } from '../../utils/createReducer';
import { BehaviorState } from '../types';

import {
  BehaviorActions,
  TOGGLE_CHAT,
  TOGGLE_INPUT_DISABLED,
  TOGGLE_MESSAGE_LOADER,
  RESET_BEHAVIOR_REDUCER,
} from '../actions/types';

const initialState = {};

const behaviorReducer = {
  [TOGGLE_CHAT]: (state: BehaviorState, { chatId }) => ({ ...state, [chatId]: { ...state[chatId], showChat: !state?.[chatId]?.showChat }}),

  [TOGGLE_INPUT_DISABLED]: (state: BehaviorState, { chatId }) => ({ ...state, [chatId]: { ...state[chatId], disabledInput: !state?.[chatId]?.disabledInput }}),

  [TOGGLE_MESSAGE_LOADER]: (state: BehaviorState, { chatId }) => ({ ...state, [chatId]: { ...state[chatId], messageLoader: !state?.[chatId]?.messageLoader }}),

  [RESET_BEHAVIOR_REDUCER]: (state: BehaviorState, { chatId }) => ({ ...state, [chatId]: { ...initialState } })
};

export default (state: BehaviorState = initialState, action: BehaviorActions) => createReducer(behaviorReducer, state, action);
