import React from 'react'
import './style.css'
import TopNavbarElement from './topNavbarElement'

const TopNavbar = ({topNavbarItems}) => (
    
    <div className="for-top-navbar">
    <ul className="list-inline for-list">
        {
            topNavbarItems.map(el => 
                <li title={el.note} key={el.id} className="list-inline-item">
                    <TopNavbarElement id={el.id} pic={el.pic} note={el.note}/>
                </li>
                )
        }
    </ul>
        <div>
            <hr className="for-horizontal-line"/>
        </div>
    </div>
)

export default TopNavbar;