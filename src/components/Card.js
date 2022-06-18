import React from "react";



export default function(props){
    return (
        
<div className="ui special cards">
  <div className="card">
    <div className="blurring dimmable image">
      <div className="ui dimmer">
        <div className="content">
          <div className="center">
            <div className="ui inverted button">Add Friend</div>
          </div>
        </div>
      </div>
      <img src={props.image1} />
    </div>
    <div className="content">
      <a className="header">{props.UserData.fullName}</a>
      <div className="meta">
        <span className="date">Created in Sep 2014</span>
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="users icon" />{props.UserData.totalFriends} Nerds
      </a>
    </div>
  </div>
  
</div>

    )
      
}