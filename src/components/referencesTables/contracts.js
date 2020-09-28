import React from 'react'
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
    const currency = useSelectBox({});
    const type_of_exchange = useSelectBox({});
    const type_of_payment = useSelectBox({});
    const type_of_contract = useSelectBox({});
    const provider = useSelectBox({});
    const customer = useSelectBox({});

    return (
        <>
            <MaterialTables state={state}/>

            <div className="d-flex input-panel">
                <input {...series_and_number}/>
                <input {...valid_from}/>
                <input {...valid_for}/>
                <input {...note}/>
              <SelectedInput label={'Поставщик'} classes={classes} object={provider} collection={props.CosPro.providers} attribute={'full_name'}/>
              <SelectedInput label={'Покупатель'} classes={classes} object={customer} collection={props.CosPro.customers} attribute={'full_name'}/>
              <SelectedInput label={'Тип оплаты'} classes={classes} object={type_of_payment} collection={props.CosPro.type_of_payments} attribute={'name'}/>     
              <SelectedInput label={'Тип обмена'} classes={classes} object={type_of_exchange} collection={props.CosPro.type_of_exchanges} attribute={'name'}/>     
              <SelectedInput label={'Тип договора'} classes={classes} object={type_of_contract} collection={props.CosPro.type_of_contracts} attribute={'name'}/>     
            </div>
            <div>
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            series_and_number: series_and_number.value,
                            valid_for: valid_for.value,
                            valid_from: valid_from.value,
                            currency_id: props.CosPro.currencies.filter(el => el.short_name == "Br")[0].id,
                            type_of_payment_id: type_of_payment.value.id,
                            type_of_exchange_id: type_of_exchange.value.id,
                            type_of_contract_id: type_of_contract.value.id,
                            provider_id: provider.value.id,
                            customer_id: customer.value.id,
                            note: note.value,
                        },  state.path)

                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path, setData); 
                        props.setData("guides/organizations", setProviders);
                        props.setData("guides/organizations", setCustomers);
                        props.setData("guides/currencies", setCurrencies);
                        props.setData("warehouses/type_of_payments", setTypeOfPayments);
                        props.setData("warehouses/type_of_exchanges", setTypeOfExchanges);
                        props.setData("warehouses/type_of_contracts", setTypeOfContracts);
                    }}
                    >
                    Обновить данные
                </button>
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
)(Contracts);


//<SelectedInput label={'Валюта'} classes={classes} object={currency} collection={props.CosPro.currencies} attribute={'full_name'}/>     
