import {SET_ERRORS, CLOSE_ERROR} from "../../constants"

export const setErrors = (data) => ({
  type: SET_ERRORS,
  value: data
})

export const closeError = () => ({
  type: CLOSE_ERROR,
  data: null
})

