import React from 'react'
import { SelectedInput, useCheckBox, useDateTime, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setContracts,
         setCurrencies,
         setOperations,
         setInvoiceTypes,
         setProviderWarehouses,
         setCustomerWarehouses, setInvoices
        } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";
import './style.css'

const ActOfDiscrepancies = (props) => {

    const classes = useStyles();

    const {state} = props;
    const is_closed = useCheckBox(false);
    const is_conducted = useCheckBox(false);
    const series_and_number = useInputText('');
    const date_and_time = useDateTime({});
    const strings_count = useInputText('');
    const total_count = useInputText('');
    const summa_nds = useInputText('');
    const summa_with_nds = useInputText('');
    const note = useInputText('');
    const summa = useInputText('');
    const invoice = useSelectBox({});
    const operation = useSelectBox({});
    const currency = useSelectBox({});
    const warehouse_c = useSelectBox({});
    const warehouse_p = useSelectBox({});
    //const invoce_type = useSelectBox({});

    //props.setData("utils/invoice_types", setInvoiceTypes);
    console.log(props.CosPro.invoce_types)

    return (
        <>
          <MaterialTables state={state}/>
            <div className="d-flex input-panel">
                <input type="checkbox" {...is_closed}/>
                <input type="checkbox" {...is_conducted}/>
                <input {...series_and_number}/>
                <input {...date_and_time}/>
                <input {...summa_nds}/>
                <input {...summa_with_nds}/>
                <input {...note}/>
                <input {...strings_count}/>
                <input {...total_count}/>
              <SelectedInput label={'ТТН'} classes={classes} object={invoice} collection={props.CosPro.invoices} attribute={'series_and_number'}/>
              <SelectedInput label={'Операция'} classes={classes} object={operation} collection={props.CosPro.operations} attribute={'name'}/>
              <SelectedInput label={'Валюта'} classes={classes} object={currency} collection={props.CosPro.currencies} attribute={'full_name'}/>
              <SelectedInput label={'Склад поставщика'} classes={classes} object={warehouse_p} collection={props.CosPro.warehouses} attribute={'address'}/>
              <SelectedInput label={'Склад покупателя'} classes={classes} object={warehouse_c} collection={props.CosPro.warehouses} attribute={'address'}/>
            </div>
            <div>         
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            is_closed: is_closed.value,
                            is_conducted: is_conducted.value,
                            series_and_number: series_and_number.value,
                            date_and_time: date_and_time.value,
                            summa: summa.value,
                            summa_nds: summa_nds.value,
                            summa_with_nds: summa_with_nds.value,
                            note: note.value,
                            strings_count: strings_count.value,
                            total_count: total_count.value,
                            invoice_type_id: 2,
                            invoice_id: invoice.value.id,
                            operation_id: operation.value.id,
                            currency_id: currency.value.id,
                            provider_warehouse_id: warehouse_p.value.id,
                            customer_warehouse_id: warehouse_c.value.id
                        },  state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path, setData); 
                        props.setData("customs/invoices", setInvoices);
                        props.setData("customs/operations", setOperations);
                        props.setData("guides/currencies", setCurrencies);
                        props.setData("warehouses/warehouses", setCustomerWarehouses);
                        props.setData("warehouses/warehouses", setProviderWarehouses);
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
)(ActOfDiscrepancies);