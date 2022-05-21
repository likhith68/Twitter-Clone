import React,{forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { ChatBubbleOutlined } from '@mui/icons-material';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post=forwardRef(
    ({displayName,username,verified,text,image,avatar,timestamp},ref)=> {
  return (
    <div className='post' ref={ref}>
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post___headerText">
                    <h3>{displayName}
                        <span className='post__headerSpecial'>
                            {verified &&<VerifiedRoundedIcon className='post__badge'/>}@{username}   <span className='timestamp'>{timestamp?.toDate().toUTCString()}</span></span>

                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt=""/>
            <div className="post__footer">
                <ChatBubbleOutlined fontsize="small"/>
                <RepeatIcon fontsize="small"/>
                <FavoriteBorderIcon fontsize="small"/>
                <PublishIcon fontsize="small"/>
            </div>
        </div>
    </div>
);
}
)

export default Post
