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

    case ACTIONS.DOWNLOAD_MODAL:
      return {
        ...state,
        downloadModal: payload,
      };
    case ACTIONS.NEWS_MODAL:
      return {
        ...state,
        newsModal: payload,
      };
    case ACTIONS.CONTACT_MODAL:
      return {
        ...state,
        contactModal: payload,
      };
    case ACTIONS.CHECKLOAD:
      return {
        ...state,
        checkload: payload,
      };

    default:
      return state;
  }
};

export default reducers;
