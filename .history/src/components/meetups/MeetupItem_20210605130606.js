import React from 'react'

function MeetupItem(props) {
  return (
    <li>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <address>Address</address>
        <p>Description</p>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </li>
  )
}

export default MeetupItem
