import {
  SET_ID_TOP_BAR,
  SET_ID_LEFT_BAR,
  SET_ID_LEFT_FIELD,
  UPDATE_TABLE_DATA,
} from "../../constants";

export const setIdTopBar = (newId) => ({
  type: SET_ID_TOP_BAR,
  value: newId,
});

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
