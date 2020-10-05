import { LINK_VOTE, DELETE_lINK, ADD_LINK, SET_STORE_LINK } from "./types";

export const upVote = (link) => ({
  type: LINK_VOTE,
  link,
});

export const deletLink = (id) => ({
  type: DELETE_lINK,
  id,
});

export const addLink = (payload) => ({
  type: ADD_LINK,
  payload,
});

export const setStoreLinks = (payload) => ({
  type: SET_STORE_LINK,
  payload,
});

