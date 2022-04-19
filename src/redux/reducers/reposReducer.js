const SET_REPOS = "SET_REPOS";

const defaultState = {
  cards: [],
  loading: false,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        cards: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export const setRepos = (cards) => ({
  type: SET_REPOS,
  payload: Object.values(cards),
});
