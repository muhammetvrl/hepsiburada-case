import { PUSH_NOTIFICATION, REMOVE_NOTIFICATION } from "./types";

export const pushNotification = (notification) => ({
  type: PUSH_NOTIFICATION,
  notification,
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION,
});
