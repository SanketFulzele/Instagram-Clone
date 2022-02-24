import React from 'react'
import "./profileicon.css";
import ProfileIcon from "../../images/Profile.jpg";

function ProfilIcon() {
  return (
    <div className='storyBorder'>
      <img className='profileIcon' src={ProfileIcon} />
    </div>
  )
}

export default ProfilIcon; 