import React from 'react'
import "./empty.css"

const Empty = ({value}) => {
  return (<>
    <div className='empty'><h5 className='emptytext'>Your {value} is empty &#128528;</h5> </div></>
  )
}

export default Empty