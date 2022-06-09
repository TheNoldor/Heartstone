import { configureStore } from "@reduxjs/toolkit";
//import { applyMiddleware, createStore } from "redux";
//import thunk from "redux-thunk";

import reposReducer from "./redux/reducers/reposReducer";

//const store = createStore(reposReducer, applyMiddleware(thunk));
const store = configureStore({
  reducer: reposReducer,
});

export default store;
