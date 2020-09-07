import React from "react";
import "./style.css";
import {MaterialTables} from '../../utils'
import { connect } from "react-redux";
import { destroyData, AddToData } from "../../../reduxMain/actions/dataActions";
import { updateData, takeData } from "../../../reduxMain/reducer/id/actions";
import { setData } from '../../../reduxMain/reducer/id/actions.js'
import {Invoices, Organizations, Products, Subgroups, Warehouses, Contracts, ActOfDiscrepancies} from "../../referencesTables";


function MaterialTableDemo(props) {
  const [state, setState] = React.useState(props.data);

  const checkIdes = (first,second,thrid) => props.ID.idTop === first && props.ID.idLeftField === second && props.ID.idLeft === thrid

  React.useEffect(() => {
    setState(props.data);
  }, [props.data.table]);

  return (
    <div className="position">
      {
        checkIdes(1,1,1) ? <ActOfDiscrepancies state={state}/> :

        checkIdes(2,1,0) ? <Contracts state={state}/>: 
      
        checkIdes(2,1,1) ? <Warehouses state={state}/>:
      
        checkIdes(0,0,0) ? <Organizations state={state}/>:
        
        checkIdes(0,1,0) ? <Products state={state}/> :

        checkIdes(0,1,2) ? <Subgroups state={state}/> :

        checkIdes(1,0,0) ? <Invoices state={state}/> :
        (
        <>
          <MaterialTables isAdd={true} state={state}/>
        <button
          className="btn btn-dark btn-position"
          onClick={() => {
            props.setData(state.path, setData);
          }}
        >
          Обновить данные
        </button>
          </>)
      }
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
    setData: (path, setter) => dispatch(takeData(path, setter)),
    add: (data, path) => dispatch(AddToData(data, path)),
    destroy: (data, path) => dispatch(destroyData(data, path)),
  })
)(MaterialTableDemo);