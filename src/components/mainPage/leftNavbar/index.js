import React from 'react'
import LeftNavbarElement from './leftNavbarElement'
import './style.css'

const LeftNavbar = ({mainList}) => (
    <div className={'for-left-block'}>
    <div>
    <ul className="for-main-list">
        {
            mainList.map(el => <li key={el.id}>
                <LeftNavbarElement id={el.id} label={el.label} childrenList={el.childrenList}/>
            </li>)
        }
    </ul>
    <hr className="for-short-horizontal-line"/>
    </div>
    <div className="for-vertical-line"/>
    </div>
)

export default LeftNavbar;