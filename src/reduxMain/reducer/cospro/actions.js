import {
  SET_CUSTOMERS,
  SET_PROVIDERS,
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
import axios from "axios";

const setProviders = (data) => ({
  type: SET_PROVIDERS,
  value: data,
});

const setCustomers = (data) => ({
  type: SET_CUSTOMERS,
  value: data,
});

const setGroups = (data) => ({
  type: SET_GROUPS,
  value: data,
});

const setContracts = (data) => ({
  type: SET_CONTRACTS,
  value: data,
});

const setOperations = (data) => ({
  type: SET_OPERATIONS,
  value: data,
});

const setCurrencies = (data) => ({
  type: SET_CURRENCIES,
  value: data,
});

const setAgreements = (data) => ({
  type: SET_AGREEMENTS,
  value: data,
});

const setStatusesPriceTag = (data) => ({
  type: SET_STATUS_PRICE_TAG,
  value: data,
});

const setStatusesAcceptence = (data) => ({
  type: SET_STATUS_ACCEPTENCE,
  value: data,
});

const setStatusesBooting = (data) => ({
  type: SET_STATUS_BOOTING,
  value: data,
});

const setOwnershipForms = (data) => ({
  type: SET_OWNERSHIP_FORMS,
  value: data,
});

const setUnits = (data) => ({
  type: SET_UNITS,
  value: data,
});

export const takeUnits = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/guides/units`).then((response) => {
    dispatch(setUnits(response.data));
  });
};

export const takeGroups = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/guides/p_groups`).then((response) => {
    dispatch(setGroups(response.data));
  });
};

export const takeProviders = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/tables/providers`).then((response) => {
    dispatch(setProviders(response.data));
  });
};

export const takeOwnershipForms = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/guides/ownership_forms`).then((response) => {
    dispatch(setOwnershipForms(response.data));
  });
};

export const takeCustomers = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/tables/customers`).then((response) => {
    dispatch(setCustomers(response.data));
  });
};

export const takeContracts = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/tables/contracts`).then((response) => {
    dispatch(setContracts(response.data));
  });
};

export const takeOperations = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/tables/operations`).then((response) => {
    dispatch(setOperations(response.data));
  });
};

export const takeCurrencies = (path) => (dispatch) => {
  axios.get(`http://localhost:3000/tables/currencies`).then((response) => {
    dispatch(setCurrencies(response.data));
  });
};

export const takeAgreements = (path) => (dispatch) => {
  axios.get(`http://localhost:4000/tables/agreements`).then((response) => {
    dispatch(setAgreements(response.data));
  });
};

export const takeStatusesPriceTag = (path) => (dispatch) => {
  axios
    .get(`http://localhost:4000/tables/price-tag-statuses`)
    .then((response) => {
      dispatch(setStatusesPriceTag(response.data));
    });
};

export const takeStatusesAcceptence = (path) => (dispatch) => {
  axios
    .get(`http://localhost:3000/tables/acceptence-statuses`)
    .then((response) => {
      dispatch(setStatusesAcceptence(response.data));
    });
};

export const takeStatusesBooting = (path) => (dispatch) => {
  axios
    .get(`http://localhost:3000/tables/booting-statuses`)
    .then((response) => {
      dispatch(setStatusesBooting(response.data));
    });
};
