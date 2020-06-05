import {
  SET_ID_TOP_BAR,
  SET_ID_LEFT_BAR,
  SET_ID_LEFT_FIELD,
  UPDATE_TABLE_DATA,
  SET_DATA,
  SET_PROVIDERS,
  SET_CUSTOMERS,
  DESTROY,
  ADD
} from "../constants";
import TopNavbarItems from "../../itemsOfTopNavbar.js";
import axios from "axios";

let initialState = {
  data: [],
  idTop: 0,
  idLeftField: 0,
  idLeft: 0,
  customers: [],
  providers: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID_TOP_BAR: {
      state = Object.assign({}, state, {
        idTop: action.value,
        idLeftField: 0,
        idLeft: 0,
      });
      return Object.assign({}, state, {
        idTop: action.value,
        idLeftField: 0,
        idLeft: 0,
      });
    }
    case SET_ID_LEFT_BAR: {
      state = Object.assign({}, state, { idLeft: action.value, data: [] });
      return state;
    }
    case SET_ID_LEFT_FIELD: {
      state = Object.assign({}, state, { idLeftField: action.value, data: [] });
      return state;
    }
    case SET_CUSTOMERS: {
      state = Object.assign({}, state, {customers: action.value})
      return state;
    }
    case SET_PROVIDERS: {
      state = Object.assign({}, state, {providers: action.value})
      return state;
    }
    case UPDATE_TABLE_DATA: {
      let path =
        TopNavbarItems[initialState.idTop].mainList[initialState.idLeftField]
          .childrenList[initialState.idLeft].path;

      let obj = { path: path, data: action.value.data };
      axios.post(`http://localhost:4000/${path}`, obj, {
        "Content-Type": "application/x-www-form-urlencoded",
      });
      return state;
    }
    case DESTROY: {

    }
    case ADD:{
      console.log(action.value)
    }
    case SET_DATA: {
      return Object.assign({}, state, { data: action.value });
    }
    default:
      return state;
  }
};

export default Reducer;
