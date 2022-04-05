import { createStore } from "redux";

import cards from "./components/cards.json";

function Cards(state = cards) {
  return state;
}

export const store = createStore(Cards);
export default store;
