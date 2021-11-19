import { createReducer } from '../../utils/createReducer';
import { BehaviorState } from '../types';

import {
  BehaviorActions,
  TOGGLE_CHAT,
  TOGGLE_INPUT_DISABLED,
  TOGGLE_MESSAGE_LOADER,
  RESET_BEHAVIOR_REDUCER,
} from '../actions/types';

const initialState = {
  showChat: false,
  disabledInput: false,
  messageLoader: false
};

const behaviorReducer = {
  [TOGGLE_CHAT]: (state: BehaviorState) => ({ ...state, showChat: !state.showChat}),

  [TOGGLE_INPUT_DISABLED]: (state: BehaviorState) => ({ ...state, disabledInput: !state.disabledInput }),

  [TOGGLE_MESSAGE_LOADER]: (state: BehaviorState) => ({ ...state, messageLoader: !state.messageLoader }),

  [RESET_BEHAVIOR_REDUCER]: (state: BehaviorState) => ({ ...initialState })
};

export default (state: BehaviorState = initialState, action: BehaviorActions) => createReducer(behaviorReducer, state, action);
