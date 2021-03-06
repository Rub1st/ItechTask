import React from 'react'
import { SelectedInput, useSelectBox, useStyles, MaterialTables, useInputText} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setActs,
         setInvoiceProducts
        } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";
import Error from "../error_notification"
import './style.css'

const ActOfDiscrepanciesProducts = (props) => {

    const classes = useStyles();

    const {state} = props;
    const code = useInputText("")
    const invoice_products = useSelectBox({});
    const act = useSelectBox({});
    const count = useInputText('');

    const pr_act = useSelectBox({})

    return (
        <>
          <MaterialTables state={state}/>
          {
            props.Error.errors ? <Error path={state.path} message={props.Error.errors}/> : null
          }
            <div className="d-flex input-panel">
              <input type="number" placeholder="Код" {...code}/>
              <input type="number" placeholder="Количество" {...count}/>
              <SelectedInput label={'Акт расхождения'} classes={classes} object={act} collection={props.CosPro.acts} attribute={'series_and_number'}/>
              <SelectedInput label={'Продукт'} classes={classes} object={invoice_products} collection={props.CosPro.invoice_products} attribute={'full_name'}/>
            </div>
            <div>
                <button className={'btn btn-info btn-position'} onClick={() =>
                        props.add({
                            code: code.value,
                            count: count.value,
                            act_of_discrepancy_id: act.value.id,
                            invoice_product_id: invoice_products.value.id,
                        },  state.path)
                    }>Добавить</button>
                <button
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.set(state.path, setData);
                        props.set("customs/act_of_discrepancies", setActs);
                        props.set("guides/invoice_products", setInvoiceProducts);
                        act.onChange({target: { value: {}}})
                        invoice_products.onChange({target: { value: {}}})
                    }}
                    >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Акты расхождения товар'} classes={classes} object={pr_act} collection={props.ID.data} attribute={'code'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() =>
                        props.destroy(pr_act.value, state.path)
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
)(ActOfDiscrepanciesProducts);