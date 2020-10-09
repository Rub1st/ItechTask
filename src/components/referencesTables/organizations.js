import React from 'react'
import { SelectedInput, useCheckBox, useInputText, useSelectBox, useStyles, MaterialTables} from '../utils'
import { connect } from "react-redux";
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { setOwnershipForms } from '../../reduxMain/reducer/cospro/actions'
import { destroyData, AddToData } from "../../reduxMain/actions/dataActions";
import { takeData } from "../../reduxMain/reducer/id/actions";


const Organizations = (props) => {

    const classes = useStyles();

    const {state} = props;
    const full_name = useInputText('');
    const short_name = useInputText('');
    const unp = useInputText('');
    const legal_address = useInputText('');
    const phone_or_fax = useInputText('');
    const email = useInputText('');
    const is_provider = useCheckBox(false);
    const is_company = useCheckBox(false);
    const is_buyer = useCheckBox(false);
    const ownership_form = useSelectBox({});
    const organization = useSelectBox({});

    return (
        <>
            <MaterialTables state={state}/>
            <div className="d-flex">
                <input placeholder="Наименование" {...full_name}/>
                <input placeholder="Короткое имя" {...short_name}/>
                <input type="number" placeholder="УНП" {...unp}/>
                <input placeholder="Юр. адрес" {...legal_address}/>
                <input placeholder="Телефон/факс" pattern="\+375\ ?(29|44|17|33)\d{0,3}\d{0,2}\d{0,2}" {...phone_or_fax}/>
                <input placeholder="e-mail" pattern="[\w\W]+@(gmail|yandex|mail)\.(com|ru)$" {...email}/>
                <input type="checkbox" {...is_provider}/>
                <input type="checkbox" {...is_company}/>
                <input type="checkbox" {...is_buyer}/>
            <div>
              <SelectedInput label={'Форма собственности'} classes={classes} object={ownership_form} collection={props.CosPro.ownership_forms} attribute={'name'}/>
            </div>
            </div>
            <div>        
                <button className={'btn btn-info btn-position'} onClick={() => 
                        props.add({
                            full_name: full_name.value,
                            short_name: short_name.value,
                            unp: unp.value,
                            legal_address: legal_address.value,
                            phone_or_fax: phone_or_fax.value,
                            ownership_form_id: ownership_form.value.id,
                            email: email.value,
                            is_provider: is_provider.value,
                            is_company: is_company.value,
                            is_buyer: is_buyer.value
                        }, state.path)
                    }>Добавить</button>
                <button 
                    className="btn btn-success btn-position"
                    onClick={() => {
                        props.set(state.path, setData);
                        props.set("guides/ownership_forms", setOwnershipForms)}
                    }
                    >
                    Обновить данные
                </button>
                <div className='btn btn-delete'>
                    <SelectedInput label={'Организация'} classes={classes} object={organization} collection={props.ID.data} attribute={'full_name'}/>
                    <button className={'btn btn-danger btn-position'} onClick={() => 
                        props.destroy(organization.value, state.path)
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
)(Organizations);