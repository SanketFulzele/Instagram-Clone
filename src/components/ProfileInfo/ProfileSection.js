import React from 'react'
import "./profile-section.css";
import ProfileIcon from "../../images/Profile.jpg";
import { ReactComponent as Setting } from '../../images/Setting.svg';
import Hightlights from './Hightlights';

function ProfileSection() {
    return (
        <div> 
        <div className="profile">
            <div className="profile-section">
                <img className='main-profile-icon' src={ProfileIcon} />
                <div className="right-side">
                    <div className="row">
                        <div className="profile-name"> womenfitnesspro </div>
                        <button className='profile-button'> Edit Profile </button>
                        <Setting className='setting-icon' />
                    </div>
                    <div className="row">
                        <div className="column">
                            <span className="bold">490 </span>
                            <span className="thin"> posts</span>
                        </div>
                        <div className="column">
                            <span className="bold">52,899 </span>
                            <span className="thin"> followers</span>
                        </div>
                        <div className="column">
                            <span className="bold">533 </span>
                            <span className="thin"> following</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className='bold'> weight loss | womenfitnesspro </div>
                            <div className='faint'> Fitness Trainer </div>
                            <div className="thin">
                                It's Time to Be Fit & Healthy <br />
                                Its Time To Take The <br />
                                FAST KETO CHALLENGE! </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Hightlights />

        </div>
    )
}

export default ProfileSection;