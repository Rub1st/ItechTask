import {
  SET_ORGANIZATIONS,
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
  SET_GROUPS,
  SET_PROVIDER_WAREHOUSES,
  SET_CUSTOMER_WAREHOUSES,
  SET_TYPE_OF_CONTRACT,
  SET_TYPE_OF_EXCHANGE,
  SET_TYPE_OF_PAYMENT,
  SET_INVOICE_TYPES,
  SET_RATES_NDS,
  SET_SUBGROUPS,
  SET_INVOICES,
  SET_ACTS,
  SET_INVOICE_PRODUCTS,
  SET_ERRORS
} from "../../constants";

export const setProviders = (data) => ({
  type: SET_PROVIDERS,
  value: data,
});

export const setInvoices = (data) => ({
  type: SET_INVOICES,
  value: data
})

export const setInvoiceProducts = (data) => ({
  type: SET_INVOICE_PRODUCTS,
  value: data
})

export const setActs = (data) => ({
  type: SET_ACTS,
  value: data
})

export const setSubGroups = (data) => ({
  type: SET_SUBGROUPS,
  value: data
})

export const setRatesNDS = (data) => ({
  type: SET_RATES_NDS,
  value: data
})

export const setTypeOfContracts = (data) => ({
  type: SET_TYPE_OF_CONTRACT,
  value: data,
});

export const setTypeOfPayments = (data) => ({
  type: SET_TYPE_OF_PAYMENT,
  value: data,
});

export const setTypeOfExchanges = (data) => ({
  type: SET_TYPE_OF_EXCHANGE,
  value: data,
});

export const setProviderWarehouses = (data) => ({
  type: SET_PROVIDER_WAREHOUSES,
  value: data,
});

export const setCustomerWarehouses = (data) => ({
  type: SET_CUSTOMER_WAREHOUSES,
  value: data,
});

export const setCustomers = (data) => ({
  type: SET_CUSTOMERS,
  value: data,
});

export const setGroups = (data) => ({
  type: SET_GROUPS,
  value: data,
});

export const setContracts = (data) => ({
  type: SET_CONTRACTS,
  value: data,
});

export const setOperations = (data) => ({
  type: SET_OPERATIONS,
  value: data,
});

export const setCurrencies = (data) => ({
  type: SET_CURRENCIES,
  value: data,
});

export const setAgreements = (data) => ({
  type: SET_AGREEMENTS,
  value: data,
});

export const setStatusesPriceTag = (data) => ({
  type: SET_STATUS_PRICE_TAG,
  value: data,
});

export const setStatusesAcceptence = (data) => ({
  type: SET_STATUS_ACCEPTENCE,
  value: data,
});

export const setStatusesBooting = (data) => ({
  type: SET_STATUS_BOOTING,
  value: data,
});

export const setOwnershipForms = (data) => ({
  type: SET_OWNERSHIP_FORMS,
  value: data,
});

export const setUnits = (data) => ({
  type: SET_UNITS,
  value: data,
});

export const setOrganizations = (data) => ({
  type: SET_ORGANIZATIONS,
  value: data
})

export const setInvoiceTypes = (data) => ({
  type: SET_INVOICE_TYPES,
  value: data
})

