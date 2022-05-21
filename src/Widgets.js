import React from 'react' ;
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon'/>
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>

        <TwitterTweetEmbed tweetId={'1527418023069503511'}/>
        
        <TwitterTimelineEmbed sourceType="profile"
          screenName="elonmusk"
          options={{height:400}}/>

        
      </div>
    </div>
  )
}

export default Widgets
