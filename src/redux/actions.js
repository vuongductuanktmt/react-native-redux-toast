export const actions = {
  DISPLAY_ERROR: '@@TOAST/DISPLAY_ERROR',
  DISPLAY_WARNING: '@@TOAST/DISPLAY_WARNING',
  DISPLAY_SUCCESS: '@@TOAST/DISPLAY_SUCCESS',
  DISPLAY_INFO: '@@TOAST/DISPLAY_INFO',
  HIDE: '@@TOAST/HIDE'
};

const toastAction = (message, position, duration, type) => ({
  type,
  payload: {
    message,
    duration,
    position
  }
});

export const actionCreators = {
  hide() {
    return {
      type: actions.HIDE,
      payload: {}
    };
  },
  displayError(message, position = 'bottom', duration = 4000) {
    return toastAction(message, position, duration, actions.DISPLAY_ERROR);
  },
  displayWarning(message, position = 'bottom', duration = 4000) {
    return toastAction(message, position, duration, actions.DISPLAY_WARNING);
  },
  displaySuccess(message, position = 'bottom', duration = 4000) {
    return toastAction(message, position, duration, actions.DISPLAY_SUCCESS);
  },
  displayInfo(message, position = 'bottom', duration = 4000) {
    return toastAction(message, position, duration, actions.DISPLAY_INFO);
  }
};
