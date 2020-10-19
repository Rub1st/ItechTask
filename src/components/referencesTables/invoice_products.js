import React from 'react'

import Error from "../error_notification"

import { SelectedInput, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setCustomers,
         setProviders,
         setRatesNDS,
         setUnits,
         setSubGroups, setInvoices
        } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";
import './style.css'


const InvoiceProducts = (props) => {

    const classes = useStyles();

    const {state} = props;

    const full_name = useInputText('');
    const short_name = useInputText('');
    const code = useInputText('');
    const price = useInputText('');
    const summa_nds = useInputText('');
    const cost = useInputText('');
    const rate_nds = useSelectBox({});
    const unit = useSelectBox({});
    const p_subgroup = useSelectBox({});
    const invoice = useSelectBox({});
    const provider = useSelectBox({});
    const customer = useSelectBox({});

    const invoice_product = useSelectBox({});

    return (
        <>
            <MaterialTables state={state}/>
            {
                props.Error.errors ? <Error path={state.path} message={props.Error.errors}/> : null
            }
            <div className="d-flex input-panel">
                <input placeholder="Полное имя" {...full_name}/>
                <input placeholder="Короткое имя" {...short_name}/>
                <input type="number" placeholder="Код" {...code}/>
                <input type="number" placeholder="Цена" {...price}/>
                <input type="number" placeholder="Сумма НДС" {...summa_nds}/>
                <input type="number" placeholder="Стоимость" {...cost}/>
              <SelectedInput label={'Поставщик'} classes={classes} object={provider} collection={props.CosPro.providers} attribute={'full_name'}/>
              <SelectedInput label={'Покупатель'} classes={classes} object={customer} collection={props.CosPro.customers} attribute={'full_name'}/>
              <SelectedInput label={'Рейтинги НДС'} classes={classes} object={rate_nds} collection={props.CosPro.rates_vats} attribute={'rate'}/>     
              <SelectedInput label={'Ед. измерения'} classes={classes} object={unit} collection={props.CosPro.units} attribute={'short_name'}/>     
              <SelectedInput label={'Подгруппа товара'} classes={classes} object={p_subgroup} collection={props.CosPro.p_subgroups} attribute={'name'}/>     
              <SelectedInput label={'ТТН'} classes={classes} object={invoice} collection={props.CosPro.invoices} attribute={'series_and_number'}/>     
            </div>
            <div>
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            full_name: full_name.value,
                            short_name: short_name.value,
                            code: code.value,
                            price: price.value,
                            summa_nds: summa_nds.value,
                            cost: cost.value,
                            rate_vat_id: rate_nds.value.id,
                            provider_id: provider.value.id,
                            customer_id: customer.value.id,
                            unit_id: unit.value.id,
                            p_subgroup_id: p_subgroup.value.id,
                            invoice_id: invoice.value.id
                        },  state.path)

                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path, setData); 
                        props.setData("guides/organizations", setProviders);
                        props.setData("guides/organizations", setCustomers);
                        props.setData("guides/units", setUnits);
                        props.setData("customs/invoices", setInvoices);
                        props.setData("guides/p_subgroups", setSubGroups);
                        props.setData("guides/rate_vats", setRatesNDS);
                        provider.onChange({target: { value: {}}})
                        customer.onChange({target: { value: {}}})
                        rate_nds.onChange({target: { value: {}}})
                        unit.onChange({target: { value: {}}})
                        p_subgroup.onChange({target: { value: {}}})
                        invoice.onChange({target: { value: {}}})
                    }}
                    >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Товар прихода'} classes={classes} object={invoice_product} collection={props.ID.data} attribute={'full_name'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy(invoice_product.value, state.path)
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
        setData: (path, setter) => dispatch(takeData(path, setter)),
    })
)(InvoiceProducts);
