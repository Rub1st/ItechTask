import React from 'react'
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { updateData, takeData } from "../../reduxMain/reducer/id/actions";
import {  takeCustomers,
          takeProviders,
          takeContracts,
          takeAgreements,
          takeCurrencies,
          takeOperations,
          takeStatusesPriceTag,
          takeStatusesAcceptence,
          takeStatusesBooting,
          takeProviderWarehouses,
          takeCustomerWarehouses } from "../../reduxMain/reducer/cospro/actions"
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import './style.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Invoices = (props) => {

    const classes = useStyles();

    const {tableIcons, state} = props;
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
    const contract = useSelectBox({})
    const operation = useSelectBox({});
    const currency = useSelectBox({});
    const agreement = useSelectBox({});
    const status_of_price_tag_printing = useSelectBox({});
    const status_of_acceptance = useSelectBox({});
    const status_of_booting_in_equipment = useSelectBox({});
    const provider = useSelectBox({warehouses: []});
    const customer = useSelectBox({warehouses: []});
    const warehouse_c = useSelectBox({});
    const warehouse_p = useSelectBox({});

    console.log(props.CosPro.contracts)

    return (
        <>
            <MaterialTable
                icons={tableIcons}
                title={state.label}
                columns={state.table.columns}
                data={props.ID.data}
                editable={{
                    onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                    setTimeout(() => {
                        {
                        props.destroy(oldData, state.path);
                        }
                        resolve();
                    }, 600);
                    }),
                }}
            />
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
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Соглашение</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={agreement.value}
                  onChange={agreement.onChange}
                >
                  {props.CosPro.agreements.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Статус печати чека</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status_of_price_tag_printing.value}
                  onChange={status_of_price_tag_printing.onChange}
                >
                  {props.CosPro.status_price_tags.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Статус приемки</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status_of_acceptance.value}
                  onChange={status_of_acceptance.onChange}
                >
                  {props.CosPro.status_acceptences.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Статус загрузки в оборудование</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status_of_booting_in_equipment.value}
                  onChange={status_of_booting_in_equipment.onChange}
                >
                  {props.CosPro.status_bootings.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Контракт</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={contract.value}
                  onChange={contract.onChange}
                >
                  
                   {props.CosPro.contracts.map((el) => (
                    <MenuItem value={el}>{el.series_and_number}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Операция</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={operation.value}
                  onChange={operation.onChange}
                >
                  {props.CosPro.operations.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency.value}
                  onChange={currency.onChange}
                >
                  {props.CosPro.currencies.map((el) => (
                    <MenuItem value={el}>{el.full_name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Склад поставщика
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={warehouse_p.value}
                  onChange={warehouse_p.onChange}
                >
                  {provider.value.warehouses.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Склад покупателя
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={warehouse_c.value}
                  onChange={warehouse_c.onChange}
                >
                  {customer.value.warehouses.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            </div>
            <div>
            
                <button onClick={() => 
                        props.add({
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
                        },  state.path)
                    }>Добавить</button>

                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path); 
                        props.setProviders();
                        props.setCustomers();
                        props.setContracts();
                        props.setOperations();
                        props.setCurrencies();
                        props.setAgreements();
                        props.setStatusesAcceptence();
                        props.setStatusesPriceTag();
                        props.setStatusesBooting();
                        props.setCustomerWarehouses();
                        props.setProviderWarehouses();
                    }}
                    >
                    Обновить данные
                </button>

            </div>
            
        </>
    )
}

const useInputText = (initialState) => {
    const [value, setValue] = React.useState();
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return ({
        value,
        onChange: handleChange
    })
}

const useDateTime= (initialState) => {
    const [value, setValue] = React.useState();
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return ({
        value,
        onChange: handleChange
    })
}

const useCheckBox = (initialState) => {
    const [value, setValue] = React.useState();
    const handleChange = (e) => {
        setValue(e.target.checked);
    }
    return ({
        value,
        onChange: handleChange
    })
}

const useSelectBox = (initialState) => {
    const [value, setValue] = React.useState(initialState);
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange
    })
}

export default connect(
    state => ({
        ID: state.idReducer,
        CosPro: state.cosProReducer,
    }),
    dispatch => ({
        add: (data, path) => dispatch(AddToData(data, path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
        setCustomerWarehouses: (path) => dispatch(takeCustomerWarehouses(path)),
        setProviderWarehouses: (path) => dispatch(takeProviderWarehouses(path)),
        setData: (path) => dispatch(takeData(path)),
        setCustomers: () => dispatch(takeCustomers()),
        setProviders: () => dispatch(takeProviders()),
        setContracts: () => dispatch(takeContracts()),
        setOperations: () => dispatch(takeOperations()),
        setCurrencies: () => dispatch(takeCurrencies()),
        setAgreements: () => dispatch(takeAgreements()),
        setStatusesPriceTag: () => dispatch(takeStatusesPriceTag()),
        setStatusesAcceptence: () => dispatch(takeStatusesAcceptence()),
        setStatusesBooting: () => dispatch(takeStatusesBooting()),
    })
)(Invoices);