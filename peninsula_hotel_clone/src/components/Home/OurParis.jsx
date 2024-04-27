import React from 'react'
import SmallHeader from '../Util/SmallHeader'
import Tabs from './Tabs'

function OurParis() {

  return (
    <div className='ourParis'>
       <SmallHeader smallHeader="OUR" header="PARIS" /> 
       <h5>Dining</h5>
       <Tabs/>
    </div>
  )
}

export default OurParis