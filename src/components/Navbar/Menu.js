import React from 'react';
import "./menu.css";
import ProfileIcon from './ProfileIcon';
import { ReactComponent as Home } from '../../images/Home.svg';
import { ReactComponent as Inbox} from "../../images/Message.svg";
import { ReactComponent as Post} from "../../images/Plus.svg";
import { ReactComponent as Explore} from "../../images/Trending.svg";
import { ReactComponent as Notification} from "../../images/Heart.svg";

function Menu() {
  return (
    <div className="menu">
        <Home className='icon' />
        <Inbox className='icon' />
        <Post className='icon' />
        <Explore className='icon' />
        <Notification className='icon' />
        <ProfileIcon />
    </div>
  )
}

export default Menu;