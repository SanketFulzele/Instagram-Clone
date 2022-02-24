import React from 'react'
import "./Navigation.css"
import searchIcon from "../../images/searchIcon.png" 
import Menu from "./Menu.js";

function Navigation() {
  return (
    <div className='navigation'>
        <div className="container">
            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="instagram logo" />
            <div className="search">
                <img className="searchIcon" src={searchIcon} alt="search icon" />
                <input placeholder='Search' className='searchText' />
            </div>
            <Menu />
        </div>
        </div>
  )
}

export default Navigation;