import { Action, ActionTypes, State } from "../classes";

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
