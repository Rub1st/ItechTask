import {
  SET_ID_TOP_BAR,
  SET_ID_LEFT_BAR,
  SET_ID_LEFT_FIELD,
  UPDATE_TABLE_DATA,
  SET_DATA,
  ADD
} from "../../constants";
import axios from "axios";

export const setIdTopBar = (newId) => ({
  type: SET_ID_TOP_BAR,
  value: newId,
});

const setData = (data) => ({
  type: SET_DATA,
  value: data,
});

export const takeData = (path) => (dispatch) => {
  axios.get(`http://localhost:4000/${path}`).then((response) => {
    dispatch(setData(response.data));
  });
};


const add = (data) => ({
  type: ADD,
  value: data,
});

export const AddToData = (obj, path) => dispatch => {
  axios.post(`http://localhost:4000/${path}/create`, obj, {
    "Content-Type": "application/x-www-form-urlencoded",
  }).then((response) => dispatch(add(response.data)))
}

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
