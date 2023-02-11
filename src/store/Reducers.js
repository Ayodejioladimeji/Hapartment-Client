import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ALL_LISTINGS:
      return {
        ...state,
        allListings: payload,
      };
    case ACTIONS.GET_LISTINGS:
      return {
        ...state,
        listings: payload,
      };

    case ACTIONS.LOADING:
      return {
        ...state,
        loading: payload,
      };

    case ACTIONS.OPENMODAL:
      return {
        ...state,
        isOpen: payload,
      };
    case ACTIONS.NEWSMODAL:
      return {
        ...state,
        newsModal: payload,
      };

    default:
      return state;
  }
};

export default reducers;
