import React from 'react'
import './style.css'
import {connect} from 'react-redux'
import {setIdTopBar} from '../../../../reduxMain/reducer/id/actions'

const TopNavbarElement = (props) => {
    return(
    <div className="for-decorator">
        <button className="for-top-navbar-element"
        onClick={() => props.setIdTopBar(props.id)}>
            <img src={props.pic} className="for-picture" alt={props.note}/>
            <p style={{textAlign: "center"}}>{props.note}</p>
        </button>
    </div>
)
}

export default connect(
    state => ({
      Id: state
    }),
    dispatch => ({
        setIdTopBar: (id) => dispatch(setIdTopBar(id)),
    })
  )(TopNavbarElement)