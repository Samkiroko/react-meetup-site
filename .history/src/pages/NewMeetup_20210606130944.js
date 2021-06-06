import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup() {
  function addMeetupHandler(meetupData) {
    fetch('https://sam-react-c-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return (
    <section>
      <h1>Add meetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup
