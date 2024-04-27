import React from 'react'
import SmallHeader from '../Util/SmallHeader'
import locationImg from '../../images_local/location.png'


function Location() {
  return (
    <div className='location'>
     <SmallHeader smallHeader="OUR" header="LOCATION"/>
     <img src={locationImg} />
     <div className='location-content'>
        <div>
            <h4>ADDRESS</h4>
            <p>The Peninsula Paris, 19 Avenue Kléber Paris, France, 75116</p>
        </div>
        <div>
          <h4>TELEPHONE</h4>
          <p>+33 1 5812 2888</p>
        </div>
        <div>
            <h4>EMAIL</h4>
            <a href='#'>PPR@PENINSULA.COM</a>
        </div>
        <div>
            <h4>AIRPORT DISTANCE</h4>
            <p>25 km / 15.5 miles</p>
        </div>
     </div>
    </div>
  )
}

export default Location