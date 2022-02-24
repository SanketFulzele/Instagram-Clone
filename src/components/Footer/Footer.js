import React from 'react'
import "./footer.css";
import Arrow from "../../images/downArrow.png" 

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-section">
                    <ul>
                        <li> Meta </li>
                        <li> About </li>
                        <li> Blog </li>
                        <li> Jobs </li>
                        <li> Help </li>
                        <li> API </li>
                        <li> Privacy </li>
                        <li> Terms </li>
                        <li> Top Accounts </li>
                        <li> Hashtags </li>
                        <li> Locations </li>
                        <li> Instagram Lite </li>
                    </ul>
                </div>
                <div className="footer-second">
                    English  <img className='arrow-icon' src={Arrow} />  
                          &copy; 2022 Instagram from Meta
                </div>
            </div>

        </div>
    )
}

export default Footer