import React from 'react'
import { SelectedInput, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setGroups } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";

const Subgroups = (props) => {

    const classes = useStyles();

    const {state} = props;
    const name = useInputText('');
    const group = useSelectBox({});

    return (
        <>
            <MaterialTables isAdd={false} state={state}/>
            <div className="d-flex">
                <input placeholder="Наименование" {...name}/>
              <SelectedInput label={'Группа'} classes={classes} object={group} collection={props.CosPro.groups} attribute={'name'}/>
            </div>
            <div>
            
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            name: name.value,
                            p_group_id: group.value.id,
                        }, state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path, setData);
                        props.setData("guides/p_groups", setGroups);
                    }}>
                    Обновить данные
                </button>
                <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy({
                            name: name.value,
                            p_group_id: group.value.id,
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
        setData: (path, setter) => dispatch(takeData(path, setter)),
    })
)(Subgroups);