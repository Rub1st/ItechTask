import {
    SET_ID_TOP_BAR,
    SET_ID_LEFT_BAR,
    SET_ID_LEFT_FIELD,
    UPDATE_TABLE_DATA,
    SET_DATA
  } from "../../constants";
import axios from "axios";


export const takeData = (path, setter) => (dispatch) => {
    axios.get(`http://localhost:3000/${path}`).then((response) => {
      dispatch(setter(response.data));
    });
  };
  
  export const updateData = (table) => ({
    type: UPDATE_TABLE_DATA,
    value: table,
  });
  
  export const setIdLeftBar = (newId) => ({
    type: SET_ID_LEFT_BAR,
    value: newId,
  });
  
  export const setIdLeftField = (newId) => ({
    type: SET_ID_LEFT_FIELD,
    value: newId,
  });
  
  export const setIdTopBar = (newId) => ({
    type: SET_ID_TOP_BAR,
    value: newId,
  });
  
  export const setData = (data) => ({
    type: SET_DATA,
    value: data,
  });