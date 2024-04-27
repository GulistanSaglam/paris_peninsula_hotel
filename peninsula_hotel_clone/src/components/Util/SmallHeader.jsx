import React from 'react'

function SmallHeader({smallHeader, header}) {
  return (
    <div className='unique_header'>
    <h2>{smallHeader}</h2>
    <h1>{header}</h1>
</div>
  )
}

export default SmallHeader