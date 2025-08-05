import React from 'react'

const Heading = (props: { heading: string }) => {
  return (
    <div>
      <h3  style={{fontSize:'28px'}}>{props.heading}</h3>
    </div>
  )
}

export default Heading
