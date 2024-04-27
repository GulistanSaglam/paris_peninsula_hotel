import React from 'react'
import { NavLink } from 'react-router-dom'

function MainHeader() {
  return (
    <header className='mHeader'>
      <div className='main_header'>
         <h1>THE PENINSULA HOTELS</h1>
         <span></span>
         <p>PARIS</p>
      </div>

      <div className='navlist'>
      <p>PERCEPTIVES</p>
      <span></span>
      <p>SUSTAINABILITY</p>
      <span></span>
      <p>MY PENINSULA</p>
      <span></span>
      <p>ENGLISH</p>
      </div>
      
      </header>
  )
}

export default MainHeader