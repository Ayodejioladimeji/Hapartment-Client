import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
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

    default:
      return state;
  }
};

export default reducers;
