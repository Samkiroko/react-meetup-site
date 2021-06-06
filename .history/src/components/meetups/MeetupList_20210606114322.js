import React from 'react'
import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetup.map((meetup) => (
        <MeetupItem />
      ))}
    </ul>
  )
}

export default MeetupList
