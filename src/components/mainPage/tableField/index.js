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
import { updateData, takeData, destroyData, AddToData, takeCustomers, takeProviders } from "../../../reduxMain/actions/dataActions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  const [customer, setCustomer] = React.useState({});
  const [provider, setProvider] = React.useState({});
  const [customers, setCustomers] = React.useState([]);

  const handleChangeProvider = (event) => {
    setProvider(event.target.value);
  };

  const handleChangeCustomer = (event) => {
    setCustomer(event.target.value);
  };

   React.useEffect(() => {
     setState(props.data);
   },[props.data.table]);

  return (
    <div className="position">
      <MaterialTable
        icons={tableIcons}
        title={props.data.label}
        columns={state.table.columns}
        data={props.ID.data}
        editable={{
          onRowAdd: (newData) => 
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  props.add(newData, state.path)
                }
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  props.destroy(oldData, state.path)
                  props.add(newData, state.path);
                }
                resolve()
              }, 1000)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                {
                  props.destroy(oldData, state.path)
                }
                resolve();
              }, 600);
            }),
        }}
      />
      <div className="d-flex">
        {props.ID.idTop === 3 &&
        props.ID.idLeftField === 12 &&
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
                  { 
                    props.ID.providers.map(el => (<MenuItem value={el}>{el.name}</MenuItem>))                    
                  }
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
                  {
                    props.ID.customers.map(el => (<MenuItem value={el}>{el.name}</MenuItem>))
                  }                  
                </Select>
              </FormControl>
            </div>

            <button
              className="btn btn-info btn-position"
              style={{ marginRight: "550px" }}
              onClick={() => {
                props.add({
                  customer: customer.name,
                  provider: provider.name,
                  customerAddress: customer.address,
                  providerAddress: provider.address
                }, state.path);
              }}
            >
              Оформить договор
            </button>
          </>
        ) : null}

        <button
          className="btn btn-success btn-position"
          onClick={() => props.setData(state.path)}
        >
          Отправить
        </button>
        <button onClick={() => { 
          props.setData(state.path);
          props.setProviders(); 
          props.setCustomers();
          } }>Click</button>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    ID: state
  }),
  (dispatch) => ({
    updateData: (table) => dispatch(updateData(table)),
    setData: (path) => dispatch(takeData(path)),
    add: (data, path) => dispatch(AddToData(data, path)),
    destroy: (data, path) => dispatch(destroyData(data, path)),
    setCustomers: () => dispatch(takeCustomers()),
    setProviders: () => dispatch(takeProviders())
  })
)(MaterialTableDemo);
