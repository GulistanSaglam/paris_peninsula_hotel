import React from 'react'
import SmallHeader from '../Util/SmallHeader'

function AtGlance({...props}) {

  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <p>{props.title}</p>
    </li>
  )
}

export default AtGlance