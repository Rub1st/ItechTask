import React from 'react'

import Error from "../error_notification"

import { SelectedInput, useCheckBox, useDateTime, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData, updateData } from '../../reduxMain/reducer/id/actions.js'
import { setCurrencies,
         setOperations,
         setProviderWarehouses,
         setCustomerWarehouses, setInvoices,
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
    const summa_nds = useInputText('');
    const summa_with_nds = useInputText('');
    const note = useInputText('');
    const invoice = useSelectBox({});
    const operation = useSelectBox({});
    const warehouse_c = useSelectBox({});
    const warehouse_p = useSelectBox({});

    const act = useSelectBox({})

    const addAct = () => {
        props.add({
            is_closed: is_closed.value,
            is_conducted: is_conducted.value,
            series_and_number: series_and_number.value,
            date_and_time: date_and_time.value,
            strings_count: strings_count.value,
            total_count: total_count.value,
            summa_nds: summa_nds.value,
            summa_with_nds: summa_with_nds.value,
            note: note.value,
            invoice_type_id: props.CosPro.invoice_types.filter(el => el.name === "возврат")[0].id,
            invoice_id: invoice.value.id,
            operation_id: operation.value.id,
            currency_id: props.CosPro.currencies.filter(el => el.short_name === "Br")[0].id,
            provider_warehouse_id: warehouse_p.value.id,
            customer_warehouse_id: warehouse_c.value.id
        },  state.path)
    }

    const updateData = () => {
        props.set(state.path, setData);
        props.set("customs/invoices", setInvoices);
        props.set("customs/operations", setOperations);
        props.set("guides/currencies", setCurrencies);
        props.set("warehouses/warehouses", setCustomerWarehouses);
        props.set("warehouses/warehouses", setProviderWarehouses);
        props.set("utils/invoice_types", setInvoiceTypes);
        invoice.onChange({target: { value: {}}})
        operation.onChange({target: { value: {}}})
        warehouse_p.onChange({target: { value: {}}})
        warehouse_c.onChange({target: { value: {}}})
    }

    return (
        <>
          <MaterialTables state={state}/>
          {
            props.Error.errors ? <Error path={state.path} message={props.Error.errors}/> : null
          }
            <div className="d-flex input-panel" onSubmit={addAct}>
                <input label={"Закрыт"} type="checkbox" {...is_closed}/>
                <input type="checkbox" {...is_conducted}/>
                <input type="number" placeholder="Серия/номер" {...series_and_number}/>
                <input type="date" placeholder="Дата и время" {...date_and_time}/>
                <input type="number" placeholder="Сумма НДС" {...summa_nds}/>
                <input type="number" placeholder="Сумма с НДС" {...summa_with_nds}/>
                <input placeholder="Примечание" {...note}/>
                <input type="number" placeholder="Кол-во строк" {...strings_count}/>
                <input type="number" placeholder="Кол-во всего" {...total_count}/>
                <SelectedInput label={'ТТН'} classes={classes} object={invoice} collection={props.CosPro.invoices} attribute={'series_and_number'}/>
                <SelectedInput label={'Операция'} classes={classes} object={operation} collection={props.CosPro.operations} attribute={'name'}/>
                <SelectedInput label={'Склад поставщика'} classes={classes} object={warehouse_p} collection={props.CosPro.warehouses.filter(el => el.organization.is_buyer === true)} attribute={'address'}/>
                <SelectedInput label={'Склад покупателя'} classes={classes} object={warehouse_c} collection={props.CosPro.warehouses.filter(el => el.organization.is_provider === true)} attribute={'address'}/>
            </div>
            <div>
                <button className={'btn btn-info btn-position'} onClick={() => {
                    updateData();
                    addAct();
                    }}>Добавить</button>
                <button
                    className="btn btn-success btn-position"
                    onClick={updateData}
                    >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Акт расхождения'} classes={classes} object={act} collection={props.ID.data} attribute={'series_and_number'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() =>
                        props.destroy(act.value, state.path)
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
)(ActOfDiscrepancies);