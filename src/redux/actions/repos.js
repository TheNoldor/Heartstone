import axios from "axios";
import { createStore } from "redux";

import { setRepos } from "../reducers/reposReducer";

export const getCards = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic",
      headers: {
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "7b2c1e2a16msh2fd7511ba8ce59ap154106jsn702f02457372",
      },
    };

    axios
      .request(options)
      .then(function (cards) {
        dispatch(setRepos(cards.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};

export const store = createStore(getCards);
export default store;
