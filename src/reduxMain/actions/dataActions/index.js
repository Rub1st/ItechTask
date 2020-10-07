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
    axios.delete(`http://localhost:3000/${path}/${obj.id}`,{
      "Content-Type": "application/x-www-form-urlencoded",
    }).then(response => dispatch(destroy(response.data)))
}

export const AddToData = (obj, path) => dispatch => {
  axios.post(`http://localhost:3000/${path}`, obj,{
    "Content-Type": "application/x-www-form-urlencoded",
  }).then((response) => dispatch(add(response.data)))
} 
