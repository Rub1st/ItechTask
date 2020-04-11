import React from 'react'
import './style.css'
import TopNavbarElement from './topNavbarElement'

const TopNavbar = ({topNavbarItems}) => (
    
    <div className="for-top-navbar">
    <ul className="list-inline for-list">
        {
            topNavbarItems.map(el => 
                <li key={el.id} className="list-inline-item">
                    <TopNavbarElement id={el.id} pic={el.pic} note={el.note}/>
                </li>
                )
        }
    </ul>
    <hr className="for-horizontal-line"/>
    </div>
)

export default TopNavbar;