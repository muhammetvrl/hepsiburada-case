import { combineReducers } from "redux";
import lists from "./list/reducer";
import toast from "./toast/reducer";

const reducer = combineReducers({
  lists,
  toast
});

export default reducer;
