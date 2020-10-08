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
    const summa_nds = useInputText(false);
    const summa_with_nds = useInputText('');
    const record_summa = useInputText('');
    const retail_summa = useInputText('');
    const pre_assessment_summa = useInputText('');
    const write_down_summa = useInputText('');
    const note = useInputText('');
    const strings_count = useInputText('');
    const total_count = useInputText('');
    const contract = useSelectBox({})
    const operation = useSelectBox({});
    const agreement = useSelectBox({});
    const status_of_price_tag_printing = useSelectBox({});
    const status_of_acceptance = useSelectBox({});
    const status_of_booting_in_equipment = useSelectBox({});

    const invoice = useSelectBox({})

    return (
        <>
          <MaterialTables state={state}/>
            <div className="d-flex input-panel">
                <input type="checkbox" {...is_closed}/>
                <input type="checkbox" {...is_conducted}/>
                <input type="number" placeholder="Серия/номер" {...series_and_number}/>
                <input type="date" placeholder="Дата/время" {...date_and_time}/>
                <input type="checkbox" {...selling_on_commission}/>
                <input type="number" placeholder="Сумма" {...summa}/>
                <input type="number" placeholder="Сумма НДС" {...summa_nds}/>
                <input type="number" placeholder="Сумма с НДС" {...summa_with_nds}/>
                <input type="number" placeholder="Сумма (учетная)" {...record_summa}/>
                <input type="number" placeholder="Сумма розничная" {...retail_summa}/>
                <input type="number" placeholder="Сумма дооценки" {...pre_assessment_summa}/>
                <input type="number" placeholder="Сумма списания" {...write_down_summa}/>
                <input placeholder="Примечание" {...note}/>
                <input type="number" placeholder="Кол-во строк" {...strings_count}/>
                <input type="number" placeholder="Кол-во всего" {...total_count}/>
              <SelectedInput label={'Соглашение'} classes={classes} object={agreement} collection={props.CosPro.agreements} attribute={'name'}/>
              <SelectedInput label={'Статус печати чека'} classes={classes} object={status_of_price_tag_printing} collection={props.CosPro.status_price_tags} attribute={'name'}/>
              <SelectedInput label={'Статус приемки'} classes={classes} object={status_of_acceptance} collection={props.CosPro.status_acceptences} attribute={'name'}/>
              <SelectedInput label={'Статус загрузки в оборудование'} classes={classes} object={status_of_booting_in_equipment} collection={props.CosPro.status_bootings} attribute={'name'}/>
              <SelectedInput label={'Договор'} classes={classes} object={contract} collection={props.CosPro.contracts} attribute={'series_and_number'}/>
              <SelectedInput label={'Операция'} classes={classes} object={operation} collection={props.CosPro.operations} attribute={'name'}/>
            </div>
            <div>         
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            is_closed: is_closed.value,
                            is_conducted: is_conducted.value,
                            series_and_number: series_and_number.value,
                            date_and_time: date_and_time.value,
                            selling_on_commission: selling_on_commission.value,
                            summa: summa.value,
                            summa_nds: summa_nds.value,
                            summa_with_nds: summa_with_nds.value,
                            record_summa: record_summa.value,
                            retail_summa: retail_summa.value,
                            pre_assessment_summa: pre_assessment_summa.value,
                            write_down_summa: write_down_summa.value,
                            note: note.value,
                            strings_count: strings_count.value,
                            total_count: total_count.value,
                            contract_id: contract.value.id,
                            operation_id: operation.value.id,
                            currency_id: props.CosPro.currencies.filter(el => el.short_name === "Br")[0].id,
                            agreement_id: agreement.value.id,
                            status_of_price_tag_printing_id:
                            status_of_price_tag_printing.value.id,
                            status_of_acceptance_id: status_of_acceptance.value.id,
                            status_of_booting_in_equipment_id:
                            status_of_booting_in_equipment.value.id,
                            invoice_type_id: 1
                        },  state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.set(state.path, setData); 
                        props.set("guides/organizations", setProviders);
                        props.set("guides/organizations", setCustomers);
                        props.set("warehouses/contracts", setContracts);
                        props.set("customs/operations", setOperations);
                        props.set("guides/currencies", setCurrencies);
                        props.set("customs/agreements", setAgreements);
                        props.set("customs/status_of_acceptances", setStatusesAcceptence);
                        props.set("customs/status_of_price_tag_printings", setStatusesPriceTag);
                        props.set("customs/status_of_booting_in_equipments", setStatusesBooting);
                        props.set("utils/invoice_types", setInvoiceTypes);
                    }}
                    >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Накладная'} classes={classes} object={invoice} collection={props.ID.data} attribute={'series_and_number'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy(invoice.value, state.path)
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
    }),
    dispatch => ({
        add: (data, path) => dispatch(AddToData(data, path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        set: (path, setter) => dispatch(takeData(path, setter)),
    })
)(Invoices);