import React from 'react'
import { useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
]

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true)
  fetch('https://sam-react-c-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setIsLoading(false)
    })
  if (isLoading) {
    return <section></section>
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  )
}

export default AllMeetups
