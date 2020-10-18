import { makeStyles } from "@material-ui/core/styles";

export const useStyles = 
  makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export const checkEmail = (value) => {
  const reg = new RegExp(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|ru|by)\b/);
  return reg.test(value)
}

export const checkPhone = (value) => {
  if (value) {
    const reg = new RegExp(/\d{0,}/);
    console.log(reg.test(value))
    return reg.test(value);
  }
  return false 
}
