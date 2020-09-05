import {
  SET_PROVIDERS,
  SET_CUSTOMERS,
  SET_CONTRACTS,
  SET_OPERATIONS,
  SET_CURRENCIES,
  SET_AGREEMENTS,
  SET_STATUS_PRICE_TAG,
  SET_STATUS_ACCEPTENCE,
  SET_STATUS_BOOTING,
  SET_OWNERSHIP_FORMS,
  SET_UNITS,
  SET_GROUPS
} from "../../constants";

let initialState = {
  customers: [],
  providers: [],
  groups: [],
  ownership_forms: [],
  units: [],
  contracts: [],
  operations: [],
  currencies: [],
  agreements: [],
  statuses_price_tag: [],
  statuses_acceptence: [],
  statuses_booting: [],
};

const cosProReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS: {
      state = Object.assign({}, state, { customers: action.value });
      return state;
    }
    case SET_PROVIDERS: {
      state = Object.assign({}, state, { providers: action.value });
      return state;
    }
    case SET_CONTRACTS: {
      state = Object.assign({}, state, { contracts: action.value });
      return state;
    }
    case SET_OPERATIONS: {
      state = Object.assign({}, state, { contracts: action.value });
      return state;
    }
    case SET_CURRENCIES: {
      state = Object.assign({}, state, { contracts: action.value });
      return state;
    }
    case SET_AGREEMENTS: {
      state = Object.assign({}, state, { contracts: action.value });
      return state;
    }
    case SET_STATUS_PRICE_TAG: {
      state = Object.assign({}, state, { contracts: action.value });
      return state;
    }
    case SET_STATUS_ACCEPTENCE: {
      state = Object.assign({}, state, { contracts: action.value });
      return state;
    }
    case SET_STATUS_BOOTING: {
      state = Object.assign({}, state, { contracts: action.value });
      return state;
    }
    case SET_OWNERSHIP_FORMS: {
      state = Object.assign({}, state, { ownership_forms: action.value });
      return state;
    }
    case SET_UNITS: {
      state = Object.assign({}, state, { units: action.value });
      return state;
    }
    case SET_GROUPS: {
      state = Object.assign({}, state, { groups: action.value });
      return state;
    }
    default:
      return state;
  }
};

export default cosProReducer;
