import React from 'react'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <div className="App">
    <div className="sideheader" />
    <Header />
    <div className="sideheader" />
    <div className="side" />
    <div className='content'></div>
    <div className="side" />
    <div className="sidefooter" />
    <div className='footer'></div>
    <div className="sidefooter" />
  </div>
  )
}

export default Home