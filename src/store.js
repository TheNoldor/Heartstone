import { createStore } from "redux";

import reposReducer from "./reducers/reposReducer";

export const store = createStore(reposReducer);
export default store;
