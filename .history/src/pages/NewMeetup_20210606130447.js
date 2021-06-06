import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup() {
  function addMeetupHandler(meetupData) {}
  return (
    <section>
      <h1>Add meetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup
