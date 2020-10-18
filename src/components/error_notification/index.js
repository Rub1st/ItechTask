import React from 'react'
import {connect} from 'react-redux'
import { setData } from '../../reduxMain/reducer/id/actions.js'
import { takeData } from "../../reduxMain/reducer/id/actions";

import './style.css'

const Error = (props) => (
    <div className={"Modal Open"}>
        <div>
            {props.message}
        </div>
        <button onClick={props.set(props.path, setData)}>Close</button>
    </div>
)

export default connect(
    state => ({
        idReducer: state.idReducer,
    }),
    dispatch => ({
        set: (path, setter) => dispatch(takeData(path, setter))
    })
)(Error);