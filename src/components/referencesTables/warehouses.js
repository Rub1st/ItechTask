import React from 'react'
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { updateData, takeData } from "../../reduxMain/reducer/id/actions";
import { takeOrganizations } from "../../reduxMain/reducer/cospro/actions"
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

const Warehouses = (props) => {

    const classes = useStyles();

    const {tableIcons, state} = props;
    const address = useInputText('');
    const organization = useSelectBox({});

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
                <input {...address}/>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Организация</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={organization.value}
                  onChange={organization.onChange}
                >
                  {props.CosPro.organizations.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

            </div>
            </div>
            <div>
            
                <button onClick={() => 
                        props.add({
                            address: address.value,
                            organization_id: organization.value.id,
                        }, state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path); 
                        props.setOrganizations(state.path)
                    }}
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
        setOrganizations: (path) => dispatch(takeOrganizations(path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        setData: (path) => dispatch(takeData(path)),
    })
)(Subgroups);