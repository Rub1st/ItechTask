import React from 'react'
import { SelectedInput, useCheckBox, useDateTime, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setActs,
         setInvoiceProducts
        } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";
import './style.css'

const ActOfDiscrepanciesProducts = (props) => {

    const classes = useStyles();

    const {state} = props;
    const invoice_products = useSelectBox({});
    const act = useSelectBox({});

    return (
        <>
          <MaterialTables state={state}/>
            <div className="d-flex input-panel">
              <SelectedInput label={'Акт расхождения'} classes={classes} object={act} collection={props.CosPro.acts} attribute={'series_and_number'}/>
              <SelectedInput label={'Продукт'} classes={classes} object={invoice_products} collection={props.CosPro.invoice_products} attribute={'full_name'}/>
            </div>
            <div>         
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            act_of_discrepancies_id: act.value.id,
                            invoice_products_id: invoice_products.value.id,
                        },  state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.setData(state.path, setData); 
                        props.setData("customs/act_of_discrepancies", setActs);
                        props.setData("guides/invoice_products", setInvoiceProducts);
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
)(ActOfDiscrepanciesProducts);