import React from 'react'
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { updateData, takeData } from "../../reduxMain/reducer/id/actions";
import { takeCustomers,
    takeProviders,
    takeContracts,
    takeAgreements,
    takeCurrencies,
    takeOperations,
    takeStatusesPriceTag,
    takeStatusesAcceptence,
    takeStatusesBooting, } from "../../reduxMain/reducer/cospro/actions"
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

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
    const date_and_time = useDateTime(Date.now.getDate());
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
    const operation = useSelectBox({});
    const currency = useSelectBox({});
    const agreement = useSelectBox({});
    const status_of_price_tag_printing = useSelectBox({});
    const status_of_acceptance = useSelectBox({});
    const status_of_booting_in_equipment = useSelectBox({});
    const contract_series_and = useSelectBox({});
    const provider = useSelectBox({});
    const customer = useSelectBox({});
    const warehouse_c = useSelectBox({});
    const warehouse_p = useSelectBox({});


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
            <div className="d-flex">
                <input type="checkbox" {...is_closed}/>
                <input type="checkbox" {...is_conducted}/>
                <input {...series_and_number}/>
                <input {...legal_address}/>
                <input {...date_and_time}/>
                <input {...selling_on_commission}/>
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
                  {props.CosPro.statuses_price_tag.map((el) => (
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
                  {props.CosPro.statuses_acceptence.map((el) => (
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
                  {props.CosPro.statuses_booting.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Поставщик</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={provider.value}
                  onChange={provider.onChange}
                >
                  {props.CosPro.providers.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Покупатель
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={customer.value}
                  onChange={customer.onChange}
                >
                  {props.CosPro.customers.map((el) => (
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
                  value={contract_series_and.value}
                  onChange={contract_series_and.onChange}
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
                  value={operation}
                  onChange={handleChangeOperation}
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
                  value={currency}
                  onChange={handleChangeCurrency}
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
                  {provider.warehouses.map((el) => (
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
                  {customer.warehouses.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            </div>
            <div>
            
                <button onClick={() => 
                        props.add({
                            contract_series_and_number: contract.series_and_number,
                            operation_name: operation.name,
                            currency_name: currency.full_name,
                            agreement_name: agreement.name,
                            status_of_price_tag_printing_name:
                            status_of_price_tag_printing.name,
                            status_of_acceptance_name: status_of_acceptence.name,
                            status_of_booting_in_equipment_name:
                            status_of_booting_in_equipment.name,
                        }, state.path)
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
    const [value, setValue] = React.useState();
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
        getOwnershipForms: (path) => dispatch(takeOwnershipForms(path)),
        destroy: (data, path) => dispatch(destroyData(data, path)),
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