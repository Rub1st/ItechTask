import React from 'react'
import TopNavbar from './topNavbar'
import LeftNavbar from './leftNavbar'
import {connect} from 'react-redux'
import TopNavbarItems from '../../itemsOfTopNavbar.js'
import TableField from './tableField'
import './style.css'

const MainPage = (props) => {
    return(
        <div className={'page'}>
          <TopNavbar topNavbarItems={TopNavbarItems}/>
          <div className={'body'}>
          <LeftNavbar mainList={TopNavbarItems[props.Id.idTop].mainList}/>
          <TableField data={TopNavbarItems[props.Id.idTop]
            .mainList[props.Id.idLeftField].childrenList[props.Id.idLeft]}/>
          </div>
        </div>
    )
}

export default connect(
    state => ({
      Id: state.idReducer
    }),
    dispatch => ({})
  )(MainPage)

  