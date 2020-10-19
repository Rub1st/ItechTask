import React from 'react'
import {connect} from 'react-redux'
import { closeError } from "../../reduxMain/reducer/error/actions";

import './style.css'

const Error = (props) => (
    <div className={"Modal Open"}>
        <div className={"error-text"}>
            {props.message}
        </div>
        <button className={"btn btn-info"} onClick={() => props.closeError()}>Закрыть</button>
    </div>
)

export default connect(
    state => ({}),
    dispatch => ({
        closeError: () => dispatch(closeError(null))
    })
)(Error);