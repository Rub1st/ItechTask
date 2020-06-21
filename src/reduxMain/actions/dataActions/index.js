import {
  ADD,
  DESTROY
} from "../../constants";
import axios from "axios";

const add = (data) => ({
  type: ADD,
  value: data,
});

const destroy =  (data) => ({
  type: DESTROY,
  value: data
})

export const destroyData = (obj, path) => dispatch => {
    axios.post(`http://localhost:4000/${path}/destroy`, obj, {
      "Content-Type": "application/x-www-form-urlencoded",
    }).then(response => dispatch(destroy(response.data)))
}

export const AddToData = (obj, path) => dispatch => {
  axios.post(`http://localhost:4000/${path}/create`, obj,{
    "Content-Type": "application/x-www-form-urlencoded",
  }).then((response) => dispatch(add(response.data)))
} 

