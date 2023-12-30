import React from 'react'
import Events from '../components/Events'
import News from '../components/News'
import Welcome from '../components/Welcome'
import Map from '../components/Map'

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
