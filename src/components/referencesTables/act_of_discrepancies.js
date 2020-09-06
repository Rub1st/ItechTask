import React from 'react'
import { SelectedInput, useCheckBox, useDateTime, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setContracts,
         setCurrencies,
         setOperations,
         setInvoiceTypes
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
    const summa_ndc = useInputText(false);
    const summa_with_ndc = useInputText('');
    const note = useInputText('');
    const contract = useSelectBox({});
    const operation = useSelectBox({});
    const currency = useSelectBox({});
    const invoce_type = useSelectBox({});

    return (
        <>
          <MaterialTables state={state}/>
            <div className="d-flex input-panel">
                <input type="checkbox" {...is_closed}/>
                <input type="checkbox" {...is_conducted}/>
                <input {...series_and_number}/>
                <input {...date_and_time}/>
                <input {...summa_ndc}/>
                <input {...summa_with_ndc}/>
                <input {...note}/>
                <input {...strings_count}/>
                <input {...total_count}/>
              <SelectedInput label={'Направление документа'} classes={classes} object={invoce_type} collection={props.CosPro.invoce_types} attribute={'name'}/>
              <SelectedInput label={'Контракт'} classes={classes} object={contract} collection={props.CosPro.contracts} attribute={'series_and_number'}/>
              <SelectedInput label={'Операция'} classes={classes} object={operation} collection={props.CosPro.operations} attribute={'name'}/>
              <SelectedInput label={'Валюта'} classes={classes} object={currency} collection={props.CosPro.currencies} attribute={'full_name'}/>
              <SelectedInput label={'Склад поставщика'} classes={classes} object={warehouse_p} collection={props.CosPro.warehouses} attribute={'address'}/>
              <SelectedInput label={'Склад покупателя'} classes={classes} object={warehouse_c} collection={props.CosPro.warehouses} attribute={'address'}/>
            </div>
            <div>         
                <button onClick={() => 
                        props.add({
                            is_closed: is_closed.value,
                            is_conducted: is_conducted.value,
                            series_and_number: series_and_number.value,
                            date_and_time: date_and_time.value,
                            summa: summa.value,
                            summa_ndc: summa_ndc.value,
                            note: note.value,
                            strings_count: strings_count.value,
                            total_count: total_count.value,
                            invoce_type_id: invoce_type.value.id,
                            contract_id: contract.value.series_and_number,
                            operation_id: operation.value.id,
                            currency_id: currency.value.id,
                            provider_id: contract.value.provider.id,
                            customer_id: contract.value.customer.id,
                        },  state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path, setData); 
                        props.setData("warehouses/contracts", setContracts);
                        props.setData("customs/operations", setOperations);
                        props.setData("guides/currencies", setCurrencies);
                        props.setData("utils/invoice_types", setInvoiceTypes);
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