import React from 'react'

import Error from "../error_notification"

import { SelectedInput, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setInvoiceProducts } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";
import './style.css'


const Costs = (props) => {

    const classes = useStyles();

    const {state} = props;

    const wholesale_percent = useInputText('');
    const commercial_percent = useInputText('');
    const nds_percent = useInputText('');
    const invoice_products = useSelectBox({});

    const cost = useSelectBox({});

    return (
        <>
            <MaterialTables state={state}/>
            {
                props.Error.errors ? <Error path={state.path} message={props.Error.errors}/> : null
            }
            <div className="d-flex input-panel">
                <input type="number" placeholder="процент товарной надбавки" {...commercial_percent}/>
                <input type="number" placeholder="процент оптовой надбавки" {...wholesale_percent}/>
                <SelectedInput label={'Продукт'} classes={classes} object={invoice_products} collection={props.CosPro.invoice_products} attribute={'full_name'}/>
            </div>
            <div>
                <button className={'btn btn-info btn-position'} onClick={() =>
                        props.add({
                          wholesale_percent: wholesale_percent.value,
                          commercial_percent: commercial_percent.value,
                          invoice_product_id: invoice_products.value.id,
                        },  state.path)

                    }>Добавить</button>
               <button
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.set(state.path, setData);
                        props.set("guides/invoice_products", setInvoiceProducts);
                        invoice_products.onChange({target: { value: {}}})
                    }}
                    >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Цена товара'} classes={classes} object={cost} collection={props.ID.data.map(el => ({...el, full_name: el.invoice_product.full_name}))} attribute={'full_name'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() =>
                        props.destroy(cost.value, state.path)
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
        set: (path, setter) => dispatch(takeData(path, setter)),
    })
)(Costs);
