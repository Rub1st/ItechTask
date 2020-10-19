import React from 'react'

import Error from "../error_notification"

import { SelectedInput, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setOrganizations } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";

const Warehouses = (props) => {

    const classes = useStyles();

    const {state} = props;
    const address = useInputText('');
    const organization = useSelectBox({});
    const warehouse = useSelectBox({});

    return (
        <>
            <MaterialTables isAdd={false} state={state}/>
            {
                props.Error.errors ? <Error path={state.path} message={props.Error.errors}/> : null
            }
            <div className="d-flex">
                <input placeholder="Адрес" {...address}/>
              <SelectedInput label={'Организация'} classes={classes} object={organization} collection={props.CosPro.organizations} attribute={'full_name'}/>
            </div>
            <div>
            
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            address: address.value,
                            organization_id: organization.value.id,
                        }, state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.set(state.path, setData); 
                        props.set("guides/organizations", setOrganizations);
                        organization.onChange({target: { value: {}}})
                    }}
                    >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Склад'} classes={classes} object={warehouse} collection={props.ID.data} attribute={'address'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy(warehouse.value, state.path)
                    }>Удалить</button>
                </div>
            </div>
            
        </>
    )
}

export default connect(
    state => ({
        ID: state.idReducer,
        CosPro: state.cosProReducer,
        Error: state.errorReducer
    }),
    dispatch => ({
        add: (data, path) => dispatch(AddToData(data, path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        set: (path, setter) => dispatch(takeData(path,setter)),
    })
)(Warehouses);