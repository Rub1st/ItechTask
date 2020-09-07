import React from 'react'
import { SelectedInput, useCheckBox, useDateTime, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setCustomers,
         setProviders,
         setContracts,
         setAgreements,
         setCurrencies,
         setOperations,
         setStatusesAcceptence,
         setStatusesBooting,
         setStatusesPriceTag, 
         setCustomerWarehouses,
         setProviderWarehouses,
        setInvoiceTypes} from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";
import './style.css'

const Invoices = (props) => {

    const classes = useStyles();

    const {state} = props;
    const is_closed = useCheckBox(false);
    const is_conducted = useCheckBox(false);
    const series_and_number = useInputText('');
    const date_and_time = useDateTime({});
    const selling_on_commission = useCheckBox(false);
    const summa = useInputText('');
    const summa_ndc = useInputText(false);
    const summa_with_ndc = useInputText('');
    const record_summa = useInputText('');
    const retail_summa = useInputText('');
    const pre_assessment_summa = useInputText('');
    const write_down_summa = useInputText('');
    const note = useInputText('');
    const strings_count = useInputText('');
    const total_count = useInputText('');
    const count_all = useInputText('');
    const contract = useSelectBox({provider: {warehouses: []}, customer: {warehouses: []}})
    const operation = useSelectBox({});
    const currency = useSelectBox({});
    const agreement = useSelectBox({});
    const status_of_price_tag_printing = useSelectBox({});
    const status_of_acceptance = useSelectBox({});
    const status_of_booting_in_equipment = useSelectBox({});
    const warehouse_c = useSelectBox({});
    const warehouse_p = useSelectBox({});
    //const invoce_type = useSelectBox({});

    return (
        <>
          <MaterialTables state={state}/>
            <div className="d-flex input-panel">
                <input type="checkbox" {...is_closed}/>
                <input type="checkbox" {...is_conducted}/>
                <input {...series_and_number}/>
                <input {...date_and_time}/>
                <input type="checkbox" {...selling_on_commission}/>
                <input {...summa}/>
                <input {...summa_ndc}/>
                <input {...summa_with_ndc}/>
                <input {...record_summa}/>
                <input {...retail_summa}/>
                <input {...pre_assessment_summa}/>
                <input {...write_down_summa}/>
                <input {...note}/>
                <input {...strings_count}/>
                <input {...total_count}/>
                <input {...count_all}/>
              <SelectedInput label={'Соглашение'} classes={classes} object={agreement} collection={props.CosPro.agreements} attribute={'name'}/>
              <SelectedInput label={'Статус печати чека'} classes={classes} object={status_of_price_tag_printing} collection={props.CosPro.status_price_tags} attribute={'name'}/>
              <SelectedInput label={'Статус приемки'} classes={classes} object={status_of_acceptance} collection={props.CosPro.status_acceptences} attribute={'name'}/>
              <SelectedInput label={'Статус загрузки в оборудование'} classes={classes} object={status_of_booting_in_equipment} collection={props.CosPro.status_bootings} attribute={'name'}/>
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
                            selling_on_commission: selling_on_commission.value,
                            summa: summa.value,
                            summa_nds: summa_ndc.value,
                            summa_with_nds: summa_with_ndc.value,
                            record_summa: record_summa.value,
                            retail_summa: retail_summa.value,
                            pre_assessment_summa: pre_assessment_summa.value,
                            write_down_summa: write_down_summa.value,
                            note: note.value,
                            strings_count: strings_count.value,
                            total_count: total_count.value,
                            count_all: count_all.value,
                            contract_id: contract.value.series_and_number,
                            operation_id: operation.value.id,
                            currency_id: currency.value.id,
                            agreement_id: agreement.value.id,
                            status_of_price_tag_printing_id:
                            status_of_price_tag_printing.value.id,
                            status_of_acceptance_id: status_of_acceptance.value.id,
                            status_of_booting_in_equipment_id:
                            status_of_booting_in_equipment.value.id,
                            provider_id: contract.value.provider.id,
                            customer_id: contract.value.customer.id,
                            invoice_type_id: 1
                            // provider_warehouse_id: contract.provider.warehouse.id,
                            // customer_warehouse_id: contract.customer.warehouse.id
                        },  state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path, setData); 
                        props.setData("guides/organizations", setProviders);
                        props.setData("guides/organizations", setCustomers);
                        props.setData("warehouses/contracts", setContracts);
                        props.setData("customs/operations", setOperations);
                        props.setData("guides/currencies", setCurrencies);
                        props.setData("customs/agreements", setAgreements);
                        props.setData("customs/status_of_acceptances", setStatusesAcceptence);
                        props.setData("customs/status_of_price_tag_printings", setStatusesPriceTag);
                        props.setData("customs/status_of_booting_in_equipments", setStatusesBooting);
                        props.setData("warehouses/warehouses", setCustomerWarehouses)
                        props.setData("warehouses/warehouses", setProviderWarehouses)
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
)(Invoices);