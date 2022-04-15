const SET_REPOS = "SET_REPOS";

const defaultState = {
  cards: [],
  loading: false,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        cards: action.payload.cards,
      };
    default:
      return state;
  }
}

export const setRepos = (repos) => ({
  type: SET_REPOS,
  payload: Object.values(repos),
});
