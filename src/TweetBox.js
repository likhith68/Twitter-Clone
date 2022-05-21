import React, { useState } from 'react';
import './TweetBox.css';
import { Button,Avatar } from '@mui/material';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useStateValue } from './StateProvider';


function TweetBox() {
  const[tweetMessage,setTweetMessage]=useState('');
  const[tweetImage,setTweetImage]=useState('');
  const[{user},dispatch]=useStateValue();
  
  const sendTweet =e=>{
    e.preventDefault();

    db.collection('posts').add({
      displayName:user.displayName,
      username:user.email, 
      verified:user.emailVerified,
      avatar:user.photoURL,
      text:tweetMessage,
      image:tweetImage,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
    <form action="">
        <div className="tweetBox__input">
            <Avatar src={user?.photoURL}/>
            <input value={tweetMessage} 
            onChange={(e)=>setTweetMessage(e.target.value)}
            placeholder=' Whats Happening?' type='text'/>
        </div>
        <input className="tweetBox__imageInput" 
        value={tweetImage} 
        onChange={(e)=>setTweetImage(e.target.value)}
        placeholder='  Optional Enter Image URL' type='text'/>
        <Button type='submit' onClick={sendTweet} className='tweetBox_button'>Tweet</Button>
    </form>
    </div>
  )
}

export default TweetBox 
