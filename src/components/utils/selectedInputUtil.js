import React from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const selectedInput = ({classes,object,attribute,collection,label}) => {
    return(
        <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={object.value}
                  onChange={object.onChange}
                >
                  {collection.map((el) => (
                    <MenuItem value={el}>{el[`${attribute}`]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
        </div>
    )
}

export default selectedInput;