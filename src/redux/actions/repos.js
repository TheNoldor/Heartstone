import axios from "axios";
import { createStore } from "redux";

import { BASE_URL } from "../../config";
import { API_HOST } from "../../config";
import { API_KEY } from "../../config";

import { setRepos } from "../reducers/reposReducer";

export const getCards = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      url: BASE_URL,
      headers: {
        "X-RapidAPI-Host": API_HOST,
        "X-RapidAPI-Key": API_KEY,
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
    console.log(`${options.url}`);
  };
};

export const store = createStore(getCards);
export default store;
