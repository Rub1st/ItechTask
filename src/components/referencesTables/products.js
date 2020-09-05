import React from 'react'
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { updateData, takeData } from "../../reduxMain/reducer/id/actions";
import { takeUnits } from "../../reduxMain/reducer/cospro/actions"
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Products = (props) => {

    const classes = useStyles();

    const {tableIcons, state} = props;
    const full_name = useInputText('');
    const short_name = useInputText('');
    const code = useInputText('');
    const price = useInputText('');
    const cost = useInputText('');
    const rate_nds = useCheckBox(false);
    const summa_nds = useCheckBox(false);
    const unit = useSelectBox({});

    return (
        <>
            <MaterialTable
                icons={tableIcons}
                title={state.label}
                columns={state.table.columns}
                data={props.ID.data}
                editable={{
                    onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                    setTimeout(() => {
                        {
                        props.destroy(oldData, state.path);
                        }
                        resolve();
                    }, 600);
                    }),
                }}
            />
            <div className="d-flex">
                <input {...full_name}/>
                <input {...short_name}/>
                <input {...code}/>
                <input {...price}/>
                <input {...cost}/>
                <input {...rate_nds}/>
                <input {...summa_nds}/>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Единица измерения</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={unit.value}
                  onChange={unit.onChange}
                >
                  {props.CosPro.units.map((el) => (
                    <MenuItem value={el}>{el.full_name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

            </div>
            </div>
            <div>
            
                <button onClick={() => 
                        props.add({
                            full_name: full_name.value,
                            short_name: short_name.value,
                            code: code.value,
                            price: price.value,
                            cost: cost.value,
                            unit_id: unit.value.id,
                            rate_nds: rate_nds.value,
                            summa_nds: summa_nds.value
                        }, state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {props.setData(state.path); props.getUnits(state.path)}}
                    >
                    Обновить данные
                </button>
            </div>
            
        </>
    )
}

const useInputText = (initialState) => {
    const [value, setValue] = React.useState();
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return ({
        value,
        onChange: handleChange
    })
}

const useCheckBox = (initialState) => {
    const [value, setValue] = React.useState();
    const handleChange = (e) => {
        setValue(e.target.checked);
    }
    return ({
        value,
        onChange: handleChange
    })
}

const useSelectBox = (initialState) => {
    const [value, setValue] = React.useState();
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange
    })
}

export default connect(
    state => ({
        ID: state.idReducer,
        CosPro: state.cosProReducer,
    }),
    dispatch => ({
        add: (data, path) => dispatch(AddToData(data, path)),
        getUnits: (path) => dispatch(takeUnits(path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        setData: (path) => dispatch(takeData(path)),
    })
)(Products);