import {
    SET_ID_TOP_BAR,
    SET_ID_LEFT_BAR,
    SET_ID_LEFT_FIELD,
    UPDATE_TABLE_DATA,
    SET_DATA
} from "../../constants";
import axios from 'axios'
import TopNavbarItems from "../../../itemsOfTopNavbar";


let initialState = {
    data: [],
    idTop: 0,
    idLeftField: 0,
    idLeft: 0,
};

const idReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ID_TOP_BAR: {
        state = Object.assign({}, state, {
          idTop: action.value,
          idLeftField: 0,
          idLeft: 0,
          data: []
        });
        return state;
      }
      case SET_ID_LEFT_BAR: {
        state = Object.assign({}, state, { idLeft: action.value, data: [] });
        return state;
      }
      case SET_ID_LEFT_FIELD: {
        state = Object.assign({}, state, { idLeftField: action.value, data: [] });
        return state;
      }
      case UPDATE_TABLE_DATA: {
        let path =
          TopNavbarItems[initialState.idTop].mainList[initialState.idLeftField]
            .childrenList[initialState.idLeft].path;
  
        let obj = { path: path, data: action.value.data };
        axios.post(`http://localhost:3000/${path}`, obj, {
          "Content-Type": "application/x-www-form-urlencoded",
        });
        return state;
      }
      case SET_DATA: {
        return Object.assign({}, state, { data: action.value });
      }
      default:
        return state;
    }
}

export default idReducer;
