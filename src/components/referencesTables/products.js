import React from 'react'
import { SelectedInput, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setUnits } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";


const Products = (props) => {

    const classes = useStyles();

    const {state} = props;
    const full_name = useInputText('');
    const short_name = useInputText('');
    const code = useInputText('');
    const price = useInputText('');
    const cost = useInputText('');
    const rate_nds = useInputText('');
    const summa_nds = useInputText('');
    const unit = useSelectBox({});
    const p_subgroup = useSelectBox({});

    return (
        <>
            <MaterialTables state={state}/>
            <div className="d-flex">
                <input {...full_name}/>
                <input {...short_name}/>
                <input {...code}/>
                <input {...price}/>
                <input {...cost}/>
                <input {...rate_nds}/>
                <input {...summa_nds}/>
            <div>
              <SelectedInput label={'Подгруппа товара'} classes={classes} object={p_subgroup} collection={props.CosPro.p_subgroups} attribute={'name'}/>     
            </div>
            </div>
            <div>
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            full_name: full_name.value,
                            short_name: short_name.value,
                            code: code.value,
                            price: price.value,
                            cost: cost.value,
                            unit_id: props.CosPro.units.filter(el => el.name === 'gramms')[0].id,
                            rate_nds: rate_nds.value,
                            summa_nds: summa_nds.value
                        }, state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {props.setData(state.path, setData); props.setData("guides/units", setUnits)}}
                    >
                    Обновить данные
                </button>
                <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy({
                            full_name: full_name.value,
                            short_name: short_name.value,
                            code: code.value,
                            price: price.value,
                            cost: cost.value,
                            unit_id: props.CosPro.units.filter(el => el.name === 'gramms')[0].id,
                            rate_nds: rate_nds.value,
                            summa_nds: summa_nds.value
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
)(Products);