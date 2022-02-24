import React from 'react'
import "./highlights.css";
import Pic1 from "../../images/highlights1.jpg";
import Pic2 from "../../images/highlights2.jpg";
import Pic3 from "../../images/highlights3.jpg";

function Hightlights() {
    return (
        <div className="highlights">
            <div className="highlight-section">

                <div className="highlight-row">
                    <div className="highlight-border">
                        <img className="highlight-icon" src={Pic1} />
                    </div>
                    <div className="highlight-name">Highlights</div>
                </div>

                <div className="highlight-row">
                <div className="highlight-border">
                    <img className="highlight-icon" src={Pic2} />
                </div>
                    <div className="highlight-name">Highlights</div>
                </div>

                <div className="highlight-row">
                <div className="highlight-border">
                    <img className="highlight-icon" src={Pic3} />
                </div>
                    <div className="highlight-name">Highlights</div>
                </div> 

            </div>
        </div>
    )
}

export default Hightlights;