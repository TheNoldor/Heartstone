import { createStore } from "redux";
import cards from "./Components/cards.json"; // This is json file

function Cards(state = cards) {
  // Clients is array data
  return state;
}

export const store = createStore(Cards); // This is reducers
export default store;
