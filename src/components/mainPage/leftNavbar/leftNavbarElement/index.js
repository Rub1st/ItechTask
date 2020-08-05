import React from 'react'
import {connect} from 'react-redux'
import open from '../../../../icons/open.png'
import form from '../../../../icons/form.png'
import './style.css'
import {setIdLeftBar,
        setIdLeftField}
 from '../../../../reduxMain/reducer/id/actions'

const LeftNavbarElement = (props) => (
    <>
    <p title={props.label}><img src={open} alt=""/> {props.label}</p>
    {
       <ul className="for-children-list">
        {
            props.childrenList.map(el => <li key={el.id} onClick={() =>
             (props.setIdLeftBar(el.id),props.setIdLeftField(props.id))}>
                <p title={el.label} className={'prelabel'}><img src={form} alt=""/> {el.label}</p>
            </li>) 
        }
    </ul>
    }
    </>
)

export default connect(
    state => ({}),
    dispatch => ({
        setIdLeftBar: (id) => dispatch(setIdLeftBar(id)),
        setIdLeftField: (id) => dispatch(setIdLeftField(id))
    })
  )(LeftNavbarElement);