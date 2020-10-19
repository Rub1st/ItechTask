import {SET_ERRORS, CLOSE_ERROR} from "../../constants"


let initialState = {
    error: []
};

const ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ERRORS: {
        let value = definedValue(action.value)
        state = Object.assign({}, state, { errors: value })
        return state;
      }
      case CLOSE_ERROR: {
        state = Object.assign({}, state, { errors: action.value })
        return state;
      }
      default:
        return state;
    }
}

const definedValue = (data) => {
  switch(data.status) {
    case 404:
      return "Error 404, not found"
    case 500:
      return "Что-то не так с сервером, обратитесь к преподавателю"
    default: 
      return data.data.errors[0]
  }
}

export default ErrorReducer;