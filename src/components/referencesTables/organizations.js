import React from 'react'
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { updateData, takeData } from "../../reduxMain/reducer/id/actions";
import { takeOwnershipForms } from "../../reduxMain/reducer/cospro/actions"
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

const Organizations = (props) => {

    const classes = useStyles();

    const {tableIcons, state} = props;
    const full_name = useInputText('');
    const short_name = useInputText('');
    const unp = useInputText('');
    const legal_address = useInputText('');
    const phone_or_fax = useInputText('');
    const email = useInputText('');
    const is_provider = useCheckBox(false);
    const is_company = useCheckBox(false);
    const is_buyer = useCheckBox(false);
    const ownership_form = useSelectBox({});

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
                <input {...unp}/>
                <input {...legal_address}/>
                <input {...phone_or_fax}/>
                <input {...email}/>
                <input type="checkbox" {...is_provider}/>
                <input type="checkbox" {...is_company}/>
                <input type="checkbox" {...is_buyer}/>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Форма собственности</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ownership_form.value}
                  onChange={ownership_form.onChange}
                >
                  {props.CosPro.ownership_forms.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
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
                            unp: unp.value,
                            legal_address: legal_address.value,
                            phone_or_fax: phone_or_fax.value,
                            ownership_form_id: ownership_form.value.id,
                            email: email.value,
                            is_provider: is_provider.value,
                            is_company: is_company.value,
                            is_buyer: is_buyer.value
                        }, state.path)
                    }>Добавить</button>

                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {props.setData(state.path); props.setOwnershipForms(state.path)}}
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
        setOwnershipForms: (path) => dispatch(takeOwnershipForms(path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        setData: (path) => dispatch(takeData(path)),
    })
)(Organizations);