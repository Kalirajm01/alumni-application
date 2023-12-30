import React from 'react'
import Events from '../components/events'
import News from '../components/news'
import Welcome from '../components/welcome'
import Map from '../components/map'

function Home() {
  return (
    <div>
      <Welcome/>
      <Events/>
      <News/>
      <Map/>
    </div>
  )
}

export default Home
