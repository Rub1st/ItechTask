import React from 'react'
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

    return (
        <>
            <MaterialTables isAdd={false} state={state}/>
            <div className="d-flex">
                <input {...address}/>
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
                        props.setData(state.path, setData); 
                        props.setData("guides/organizations", setOrganizations);
                    }}
                    >
                    Обновить данные
                </button>
                <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy({
                            address: address.value,
                            organization_id: organization.value.id,
                        }, state.path)
                    }>Удалить</button>
            </div>
            
        </>
    )
}

export default connect(
    state => ({
        ID: state.idReducer,
        CosPro: state.cosProReducer,
    }),
    dispatch => ({
        add: (data, path) => dispatch(AddToData(data, path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        setData: (path, setter) => dispatch(takeData(path,setter)),
    })
)(Warehouses);