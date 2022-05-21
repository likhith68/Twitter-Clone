import React,{useState} from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LogoutOption from './LogoutOption';



function Sidebar() {
  const[{user},dispatch]=useStateValue();

  const signOut=()=>{
    dispatch({//pushing the data into the data layer
      type:actionTypes.SET_USER, //calling set user from the reducer
      user:null, //user data is there in the datalayer with this line of code
    })
  }

  return (
    <div className='sidebar'>
       
        <Link className="Links" to="/home"><TwitterIcon className='twitterIcon'/></Link>
        
        <Link className="Links" to='/home'><SidebarOption active Icon={HomeIcon} text='Home'/></Link>
        <Link className="Links" to='/explore'><SidebarOption Icon={SearchIcon} text='Explore'/></Link>
        <Link className="Links" to='/notifications'><SidebarOption Icon={NotificationsNoneOutlinedIcon} text='Notifications'/></Link>
        <Link className="Links" to='/messages'><SidebarOption Icon={MailOutlineIcon} text='Messages'/></Link>
        <Link className="Links" to='/bookmarks'><SidebarOption Icon={BookmarksOutlinedIcon} text='Bookmarks'/></Link>
        <Link className="Links" to='/lists'><SidebarOption Icon={ListAltIcon} text='Lists'/></Link>
        <Link className="Links" to='/profile'><SidebarOption Icon={PermIdentityIcon} text='Profile'/></Link>
        <Link className="Links" to='/more'><SidebarOption Icon={MoreHorizIcon} text='More'/></Link>
        
        <a onClick={signOut}><LogoutOption active Icon={LogoutRoundedIcon} text='Logout'/></a>

        
        <Button variant='outlined' className='sidebar__tweet openModalBtn' fullWidth>Tweet</Button>
    </div>
)
}

export default Sidebar 
