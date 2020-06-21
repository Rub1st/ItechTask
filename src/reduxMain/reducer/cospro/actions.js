import {
    SET_CUSTOMERS,
    SET_PROVIDERS,
} from "../../constants"
  import axios from "axios";

const setProviders = (data) => ({
    type: SET_PROVIDERS,
    value: data,
  });
  
  const setCustomers = (data) => ({
    type: SET_CUSTOMERS,
    value: data,
  });
    
    export const takeProviders = (path) => (dispatch) => {
      axios.get(`http://localhost:4000/tables/providers`).then((response) => {
        dispatch(setProviders(response.data));
      });
    };
  
    export const takeCustomers = (path) => (dispatch) => {
      axios.get(`http://localhost:4000/tables/customers`).then((response) => {
        dispatch(setCustomers(response.data));
      });
    };