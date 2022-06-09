import { configureStore } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";

import { BASE_URL } from "../../config";
import { API_HOST } from "../../config";
import { API_KEY } from "../../config";

import { setRepos } from "../reducers/reposReducer";

export const getCards = () => {
  return async (dispatch: (arg0: { type: any }) => void) => {
    try {
      const options: AxiosRequestConfig<any> = {
        url: BASE_URL,
        method: "GET",
        headers: {
          "X-RapidAPI-Host": API_HOST,
          "X-RapidAPI-Key": API_KEY,
        },
      };

      axios
        .request(options)
        .then(function (cards) {
          console.log(cards.data);
          dispatch(setRepos(cards.data));
        })

        .catch(function (error) {
          console.error(error);
        });
      console.log(`${BASE_URL}`);
      console.log(`${API_HOST}`);
      console.log(`${API_KEY}`);
      return { Response };
    } catch (err: any) {
      return { err };
    }
  };
};

const store = configureStore({
  reducer: getCards,
});
export default store;
