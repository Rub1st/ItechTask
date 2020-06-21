import {
    SET_PROVIDERS,
    SET_CUSTOMERS,
} from "../../constants";

let initialState = {
    customers: [],
    providers: []
};

const cosProReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CUSTOMERS: {
        state = Object.assign({}, state, {customers: action.value})
        return state;
      }
      case SET_PROVIDERS: {
        state = Object.assign({}, state, {providers: action.value})
        return state;
      }
      default:
        return state;
    }
  };
  
  export default cosProReducer;