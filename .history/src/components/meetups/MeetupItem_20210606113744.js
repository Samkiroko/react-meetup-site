import React from 'react'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </li>
  )
}

export default MeetupItem
