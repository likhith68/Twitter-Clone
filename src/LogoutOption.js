import React from 'react';
import './LogoutOption.css';

function LogoutOption({active,Icon,text}) {
  return (
    <div className={`logoutOption ${active && 'logoutOption--active'}`}>
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default LogoutOption
