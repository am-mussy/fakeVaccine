import { createStore } from "redux";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(userReducer, composeWithDevTools());
