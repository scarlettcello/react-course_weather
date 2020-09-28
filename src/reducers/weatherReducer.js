import { FETCH_WEATHER } from "../action";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER :
      return [ ...state, action.payload];   
    default:
      return state;   
  }
};