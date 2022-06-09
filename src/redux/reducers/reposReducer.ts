const SET_REPOS = "SET_REPOS";

export type ICard = {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  rarity: string;
  cost: number;
  attack: number;
  health: number;
  text: string;
  flavor: string;
  artist: string;
  collectible: boolean;
  race: string;
  playerClass: string;
  img: string;
  imgGold: string;
  locale: string;
};

export type CardsStoreTypes = {
  cards: ICard[];
  loading: boolean;
};

const defaultState: CardsStoreTypes = {
  cards: [],
  loading: false,
};

export default function reposReducer(
  state = defaultState,
  action: { type: any; payload: any }
) {
  console.log("reduce");
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

export const setRepos = (cards: object) => ({
  type: SET_REPOS,
  payload: Object.values(cards),
});

//export type RootState = ReturnType<typeof reposReducer>;
