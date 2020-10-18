import React from 'react'
import { takeData } from "../reduxMain/reducer/id/actions";
import { setData } from '../reduxMain/reducer/id/actions.js'
import { connect } from "react-redux";


const WithError = WrappedComponent => props => {
    return class WithErrorComponent extends React.Component {
        componentDidMount() {
            this.props.set(this.props.state.path, setData); 
        }

        render() {
        if (this.props.errors) {
            return (
            <p>
                Sorry!
                {this.props.CosPro.errors.message}
            </p>
            )
        }
        return <WrappedComponent {...this.props} />
        }
    }
}

export default connect(
    state => ({
        IdReducer: state.idReducer,
        CosPro: state.cosProReducer,
    }),
    dispatch => ({
        set: (path, setter) => dispatch(takeData(path, setter))
    })
)(WithError)