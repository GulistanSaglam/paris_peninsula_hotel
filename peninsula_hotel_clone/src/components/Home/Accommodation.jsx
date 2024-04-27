import React from 'react'
import SmallHeader from '../Util/SmallHeader'
import FilterTab from '../Util/FilterTab'
import Slider from '../Util/Slider'

function Accommodation() {
  return (
    <div className='accommodation'>
     <SmallHeader smallHeader="ELEGANT" header="ACCOMMODATION" />
     <div className='containerAC'>
     <Slider/>
     </div>
     </div>
  )
}

export default Accommodation