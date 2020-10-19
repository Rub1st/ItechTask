import {
  SET_ORGANIZATIONS,
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
  SET_GROUPS,
  SET_TYPE_OF_PAYMENT,
  SET_TYPE_OF_CONTRACT,
  SET_TYPE_OF_EXCHANGE,
  SET_INVOICE_TYPES,
  SET_PROVIDER_WAREHOUSES,
  SET_CUSTOMER_WAREHOUSES,
  SET_RATES_NDS,
  SET_SUBGROUPS,
  SET_INVOICES,
  SET_ACTS,
  SET_INVOICE_PRODUCTS,
  SET_ERRORS,
  CLOSE_ERROR
} from "../../constants";

let initialState = {
  organizations: [],
  customers: [],
  providers: [],
  p_groups: [],
  ownership_forms: [],
  units: [],
  contracts: [],
  operations: [],
  currencies: [],
  agreements: [],
  status_price_tags: [],
  status_acceptences: [],
  status_bootings: [],
  type_of_contracts: [],
  type_of_exchanges: [],
  type_of_payments: [],
  warehouses: [],
  invoice_types: [],
  rates_vats: [],
  p_subgroups: [],
  invoices: [],
  acts: [],
  invoice_products: [],
  errors: null
};

const cosProReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS: {
      state = Object.assign({}, state, { errors: action.value })
      return state;
    }
    case CLOSE_ERROR: {
      state = Object.assign({}, state, { errors: action.value })
      return state;
    }
    case SET_ORGANIZATIONS: {
      state = Object.assign({}, state, { organizations: action.value, errors: null });
      return state;
    }
    case SET_CUSTOMERS: {
      state = Object.assign({}, state, { customers: action.value.filter(el => el.is_buyer === true), errors: null });
      return state;
    }
    case SET_PROVIDERS: {
      state = Object.assign({}, state, { providers: action.value.filter(el => el.is_provider === true), errors: null });
      return state;
    }
    case SET_CONTRACTS: {
      state = Object.assign({}, state, { contracts: action.value, errors: null });
      return state;
    }
    case SET_OPERATIONS: {
      state = Object.assign({}, state, { operations: action.value, errors: null });
      return state;
    }
    case SET_CURRENCIES: {
      state = Object.assign({}, state, { currencies: action.value, errors: null });
      return state;
    }
    case SET_AGREEMENTS: {
      state = Object.assign({}, state, { agreements: action.value, errors: null });
      return state;
    }
    case SET_STATUS_PRICE_TAG: {
      state = Object.assign({}, state, { status_price_tags: action.value, errors: null });
      return state;
    }
    case SET_STATUS_ACCEPTENCE: {
      state = Object.assign({}, state, { status_acceptences: action.value, errors: null });
      return state;
    }
    case SET_STATUS_BOOTING: {
      state = Object.assign({}, state, { status_bootings: action.value, errors: null });
      return state;
    }
    case SET_OWNERSHIP_FORMS: {
      state = Object.assign({}, state, { ownership_forms: action.value, errors: null });
      return state;
    }
    case SET_UNITS: {
      state = Object.assign({}, state, { units: action.value, errors: null });
      return state;
    }
    case SET_GROUPS: {
      state = Object.assign({}, state, { p_groups: action.value, errors: null });
      return state;
    }
    case SET_TYPE_OF_EXCHANGE: {
      state = Object.assign({}, state, { type_of_exchanges: action.value, errors: null });
      return state;
    }
    case SET_TYPE_OF_PAYMENT: {
      state = Object.assign({}, state, { type_of_payments: action.value, errors: null });
      return state;
    }
    case SET_TYPE_OF_CONTRACT: {
      state = Object.assign({}, state, { type_of_contracts: action.value, errors: null });
      return state;
    }
    case SET_INVOICE_TYPES: {
      state = Object.assign({}, state, { invoice_types: action.value, errors: null });
      return state;
    }
    case SET_PROVIDER_WAREHOUSES: {
      state = Object.assign({}, state, {warehouses: action.value, errors: null });
      return state;
    }
    case SET_CUSTOMER_WAREHOUSES: {
      state = Object.assign({}, state, {warehouses: action.value, errors: null });
      return state;
    }
    case SET_RATES_NDS: {
      state = Object.assign({}, state, {rates_vats: action.value, errors: null });
      return state;
    }
    case SET_SUBGROUPS: {
      state = Object.assign({}, state, {p_subgroups: action.value, errors: null });
      return state;
    }
    case SET_INVOICES: {
      state = Object.assign({}, state, {invoices: action.value, errors: null });
      return state;
    }
    case SET_ACTS: {
      state = Object.assign({}, state, {acts: action.value, errors: null });
      return state;
    }
    case SET_INVOICE_PRODUCTS: {
      state = Object.assign({}, state, {invoice_products: action.value, errors: null });
      return state;
    }
    default:
      return state;
  }
};

export default cosProReducer;
