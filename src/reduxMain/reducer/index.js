import {
  SET_ID_TOP_BAR,
  SET_ID_LEFT_BAR,
  SET_ID_LEFT_FIELD,
  UPDATE_TABLE_DATA,
  SET_DATA,
} from "../constants";
import TopNavbarItems from "../../itemsOfTopNavbar.js";
import axios from "axios";

let initialState = {
  data: {},
  idTop: 0,
  idLeftField: 0,
  idLeft: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID_TOP_BAR: {
      initialState = Object.assign({}, state, {
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
      initialState = Object.assign({}, state, { idLeft: action.value });
      return initialState;
    }
    case SET_ID_LEFT_FIELD: {
      initialState = Object.assign({}, state, { idLeftField: action.value });
      return initialState;
    }
    case UPDATE_TABLE_DATA: {
      let path =
        TopNavbarItems[initialState.idTop].mainList[initialState.idLeftField]
          .childrenList[initialState.idLeft].path;

      let obj = { path: path, data: action.value.data };
      axios.post(`http://localhost:4000/${path}`, obj, {
        "Content-Type": "application/x-www-form-urlencoded",
      });
      return initialState;
    }
    case SET_DATA: {
      initialState = Object.assign({}, state, { data: action.value });
      return Object.assign({}, state, { data: action.value });
    }
    default:
      return state;
  }
};

export default Reducer;
