import React from 'react'

import Error from "../error_notification"

import { SelectedInput, useDateTime, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setCustomers,
         setProviders,
         setTypeOfExchanges,
         setTypeOfContracts,
         setTypeOfPayments,
         setCurrencies} from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";
import './style.css'

const Contracts = (props) => {

    const classes = useStyles();

    const {state} = props;

    const series_and_number = useInputText('');
    const valid_from = useDateTime({});
    const valid_for = useDateTime({});
    const note = useInputText('');
    const type_of_exchange = useSelectBox({});
    const type_of_payment = useSelectBox({});
    const type_of_contract = useSelectBox({});
    const provider = useSelectBox({});
    const customer = useSelectBox({});

    const contract = useSelectBox({})

    const updateData = () => {
        props.set(state.path, setData); 
        props.set("guides/organizations", setProviders);
        props.set("guides/organizations", setCustomers);
        props.set("guides/currencies", setCurrencies);
        props.set("warehouses/type_of_payments", setTypeOfPayments);
        props.set("warehouses/type_of_exchanges", setTypeOfExchanges);
        props.set("warehouses/type_of_contracts", setTypeOfContracts);
        provider.onChange({target: { value: {}}})
        customer.onChange({target: { value: {}}})
        type_of_payment.onChange({target: { value: {}}})
        type_of_exchange.onChange({target: { value: {}}})
        type_of_contract.onChange({target: { value: {}}})
    }

    const addData = () => {
        props.add({
            series_and_number: series_and_number.value,
            valid_for: valid_for.value,
            valid_from: valid_from.value,
            currency_id: props.CosPro.currencies.filter(el => el.short_name === "Br")[0].id,
            type_of_payment_id: type_of_payment.value.id,
            type_of_exchange_id: type_of_exchange.value.id,
            type_of_contract_id: type_of_contract.value.id,
            provider_id: provider.value.id,
            customer_id: customer.value.id,
            note: note.value,
        },  state.path)
    }

    return (
        <>
            <MaterialTables state={state}/>
            {
                props.Error.errors ? <Error path={state.path} message={props.Error.errors}/> : null
            }
            <div className="d-flex input-panel">
                <input type="number" placeholder="Серия/номер" {...series_and_number}/>
                <div>
                    <div className="placeholder">Действует с</div>
                    <input type="date" placeholder="Действует с" {...valid_from}/>
                </div>
                <div>
                    <div className="placeholder">Действует по</div>
                    <input type="date" placeholder="Действует по" {...valid_for}/>
                </div>
                <input placeholder="Примечание" {...note}/>
              <SelectedInput label={'Поставщик'} classes={classes} object={provider} collection={props.CosPro.providers} attribute={'full_name'}/>
              <SelectedInput label={'Покупатель'} classes={classes} object={customer} collection={props.CosPro.customers} attribute={'full_name'}/>
              <SelectedInput label={'Тип оплаты'} classes={classes} object={type_of_payment} collection={props.CosPro.type_of_payments} attribute={'name'}/>     
              <SelectedInput label={'Тип обмена'} classes={classes} object={type_of_exchange} collection={props.CosPro.type_of_exchanges} attribute={'name'}/>     
              <SelectedInput label={'Тип договора'} classes={classes} object={type_of_contract} collection={props.CosPro.type_of_contracts} attribute={'name'}/>     
            </div>
            <div>
                <button className={'btn btn-info btn-position'} 
                    onClick={ () => {
                        updateData();
                        addData();
                }}>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={updateData}
                >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Договор'} classes={classes} object={contract} collection={props.ID.data} attribute={'series_and_number'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy(contract.value, state.path)
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
        Erorr: state.errorReducer
    }),
    dispatch => ({
        add: (data, path) => dispatch(AddToData(data, path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        set: (path, setter) => dispatch(takeData(path, setter)),
    })
)(Contracts);


//<SelectedInput label={'Валюта'} classes={classes} object={currency} collection={props.CosPro.currencies} attribute={'full_name'}/>     
