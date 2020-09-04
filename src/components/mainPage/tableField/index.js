import React, { forwardRef } from "react";
import "./style.css";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { destroyData, AddToData } from "../../../reduxMain/actions/dataActions";
import { updateData, takeData } from "../../../reduxMain/reducer/id/actions";
import {
  takeCustomers,
  takeProviders,
  takeContracts,
  takeAgreements,
  takeCurrencies,
  takeOperations,
  takeStatusesPriceTag,
  takeStatusesAcceptence,
  takeStatusesBooting,
} from "../../../reduxMain/reducer/cospro/actions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Organizations from "../../referencesTables";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function MaterialTableDemo(props) {
  const [state, setState] = React.useState(props.data);
  const classes = useStyles();
  const [customer, setCustomer] = React.useState({ warehouses: [] });
  const [provider, setProvider] = React.useState({ warehouses: [] });
  const [pWarehouse, setPWarehouse] = React.useState({});
  const [cWarehouse, setCWarehouse] = React.useState({});
  const [contract, setContract] = React.useState({});
  const [operation, setOperation] = React.useState({});
  const [currency, setCurrency] = React.useState({});
  const [agreement, setAgreement] = React.useState({});
  const [status_of_price_tag_printing, setStatusPriceTag] = React.useState({});
  const [status_of_acceptence, setStatusAcceptence] = React.useState({});
  const [status_of_booting_in_equipment, setStatusBooting] = React.useState({});

  const handleChangeProvider = (event) => {
    setProvider(event.target.value);
  };

  const handleChangeCustomer = (event) => {
    setCustomer(event.target.value);
  };

  const handleChangeContract = (event) => {
    setContract(event.target.value);
  };

  const handleChangeOperation = (event) => {
    setOperation(event.target.value);
  };

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const handleChangeAgreement = (event) => {
    setAgreement(event.target.value);
  };

  const handleChangeStatusPriceTag = (event) => {
    setStatusPriceTag(event.target.value);
  };

  const handleChangeStatusAcceptence = (event) => {
    setStatusAcceptence(event.target.value);
  };

  const handleChangeStatusBooting = (event) => {
    setStatusBooting(event.target.value);
  };

  const handleChangePWarehouse = (event) => {
    setPWarehouse(event.target.value);
  };

  const handleChangeCWarehouse = (event) => {
    setCWarehouse(event.target.value);
  };
  React.useEffect(() => {
    setState(props.data);
  }, [props.data.table]);

  return (
    <div className="position">
      {props.ID.idTop === 0 &&
        props.ID.idLeftField === 0 &&
        props.ID.idLeft === 0 ? <Organizations tableIcons={tableIcons} state={state}/> : (
        <>
          <MaterialTable
            icons={tableIcons}
            title={state.label}
            columns={state.table.columns}
            data={props.ID.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      props.add(newData, state.path);
                    }
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      props.destroy(oldData, state.path);
                      props.add(newData, state.path);
                    }
                    resolve();
                  }, 1000);
                }),
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
          <button
          className="btn btn-success btn-position"
          onClick={() => props.setData(state.path)}
        >
          Отправить
        </button>
        <button
          className="btn btn-dark btn-position"
          onClick={() => {
            props.setData(state.path);
            /* props.setProviders();
              props.setCustomers();
              props.setContracts();
              props.setOperations();
              props.setCurrencies();
              props.setAgreements();
              props.setStatusesAcceptence();
              props.setStatusesPriceTag();
               props.setStatusesBooting(); */
          }}
        >
          Обновить данные
        </button>
          </>)
      }
      <div className="d-flex">
        {props.ID.idTop === 1 &&
        props.ID.idLeftField === 0 &&
        props.ID.idLeft === 0 ? (
          <>
            <button
              className="btn btn-info btn-position"
              onClick={() => {
                props.add(
                  {
                    contract_series_and_number: contract.series_and_number,
                    operation_name: operation.name,
                    currency_name: currency.full_name,
                    agreement_name: agreement.name,
                    status_of_price_tag_printing_name:
                      status_of_price_tag_printing.name,
                    status_of_acceptance_name: status_of_acceptence.name,
                    status_of_booting_in_equipment_name:
                      status_of_booting_in_equipment.name,
                  },
                  state.path
                );
              }}
            >
              Оформить ТТН
            </button>
          </>
        ) : null}
      </div>
      <div className="d-flex">
        {props.ID.idTop === 1 &&
        props.ID.idLeftField === 1 &&
        props.ID.idLeft === 2 ? (
          <>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Контракт</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={contract}
                  onChange={handleChangeContract}
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
                  value={pWarehouse}
                  onChange={handleChangePWarehouse}
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
                  value={cWarehouse}
                  onChange={handleChangeCWarehouse}
                >
                  {customer.warehouses.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </>
        ) : null}
      </div>
      <div className="d-flex">
        {props.ID.idTop === 2 &&
        props.ID.idLeftField === 1 &&
        props.ID.idLeft === 0 ? (
          <>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Поставщик</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={provider}
                  onChange={handleChangeProvider}
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
                  value={customer}
                  onChange={handleChangeCustomer}
                >
                  {props.CosPro.customers.map((el) => (
                    <MenuItem value={el}>{el.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <button
              className="btn btn-info btn-position"
              style={{ marginRight: "250px" }}
              onClick={() => {
                props.add(
                  {
                    customer: customer.name,
                    provider: provider.name,
                    customerAddress: customer.address,
                    providerAddress: provider.address,
                  },
                  state.path
                );
              }}
            >
              Оформить договор
            </button>
          </>
        ) : null}
      </div>
      {state.table1 ? (
        <>
          <MaterialTable
            icons={tableIcons}
            title={props.data.label}
            columns={state.table1.columns}
            data={props.ID.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      props.add(newData, state.path);
                    }
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      props.destroy(oldData, state.path);
                      props.add(newData, state.path);
                    }
                    resolve();
                  }, 1000);
                }),
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
        </>
      ) : null}
    </div>
  );
}

export default connect(
  (state) => ({
    ID: state.idReducer,
    CosPro: state.cosProReducer,
  }),
  (dispatch) => ({
    updateData: (table) => dispatch(updateData(table)),
    setData: (path) => dispatch(takeData(path)),
    add: (data, path) => dispatch(AddToData(data, path)),
    destroy: (data, path) => dispatch(destroyData(data, path)),
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
)(MaterialTableDemo);

/*
<Inputs type="select" name="Контракт" attribute={"series_and_number"} collection={props.CosPro.contracts}/>
            <Inputs type="select" name="Операция" attribute={"name"} collection={props.CosPro.operations}/>
            <Inputs type="select" name="Валюта" attribute={"full_name"} collection={props.CosPro.currencies}/>
            <Inputs type="select" name="Соглашение" attribute={"name"} collection={props.CosPro.agreements}/>
            <Inputs type="select" name="Статус печати чека" attribute={"name"} collection={props.CosPro.statuses_price_tag}/>
            <Inputs type="select" name="Статус приемки" attribute={"name"} collection={props.CosPro.statuses_acceptence}/>
            <Inputs type="select" name="Статус загрузки в оборудование" attribute={"name"} collection={props.CosPro.status_of_booting_in_equipment}/> 
*/