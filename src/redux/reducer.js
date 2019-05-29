import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  message: null,
  error: false,
  warning: false,
  success: false,
  duration: null
};

export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.HIDE:
    case actions.DISPLAY_ERROR:
    case actions.DISPLAY_WARNING:
    case actions.DISPLAY_SUCCESS:
    case actions.DISPLAY_INFO: {
      return state.merge(
        {
          message: action.payload.message,
          duration: action.payload.duration,
          error: action.type === actions.DISPLAY_ERROR,
          warning: action.type === actions.DISPLAY_WARNING,
          success: action.type === actions.DISPLAY_SUCCESS
        },
        { deep: true }
      );
    }
    default: {
      return state;
    }
  }
}
