import { LINK_VOTE, DELETE_lINK, ADD_LINK, SET_STORE_LINK } from "./types";
// import uuid from "react-uuid";

const initialState = [
  // {
  //   id:uuid()
  //   points: 10,
  //   linkName: "Test 2",
  //   linkUrl: "https://www.producthunt.com",
  // },
  // {
  //   id:uuid()
  //   points: 8,
  //   linkName: "Test 3",
  //   linkUrl: "https://www.producthunt.com",
  // },
  // {
  //   id:uuid()
  //   points: 12,
  //   linkName: "Test 4",
  //   linkUrl: "https://www.producthunt.com",
  // },
];

const lists = (state = initialState, action) => {
  switch (action.type) {
    case LINK_VOTE:
      return [...updateVote(state, action)];
    case DELETE_lINK:
      let deleteLink = [...state];
      const filterLink = deleteLink.filter((item) => item.id !== action.id);
      localStorage.setItem("links", JSON.stringify(filterLink));
      return filterLink;
    case ADD_LINK:
      return addLink(state, action);
    case SET_STORE_LINK:
      return [...action.payload];
    default:
      return state;
  }
};

function updateVote(state, action) {
  let updateState = [...state];
  const index = updateState.findIndex((item) => item.id === action.link.id);
  if (index > -1) {
    const newState = { ...updateState[index], ...action.link };
    updateState.splice(index, 1, newState);
    localStorage.setItem("links", JSON.stringify(updateState));
    return updateState;
  }
}

function addLink(state, action) {
  let newState = [...state];
  newState.unshift(action.payload);
  localStorage.setItem("links", JSON.stringify(newState));
  return newState;
}

export default lists;
