import { PUSH_NOTIFICATION, REMOVE_NOTIFICATION } from "./types";

const initialState = {
  notifications: [],
};

function addNotification(state = [], action) {
  let notifications = state.slice();
  notifications = [...notifications, action.notification];
  return notifications;
}

function removeNotification(state = [], action) {
  return state.filter((notif, i) => i !== 0);
}

const toast = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_NOTIFICATION:
      return {
        ...state,
        notifications: addNotification(state.notifications, action),
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: removeNotification(state.notifications, action),
      };
    default:
      return state;
  }
};

export default toast;
