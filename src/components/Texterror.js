import React from 'react'
import "./texterror.css"

const Texterror = (props) => {
    console.log(props);
  return (<div className='error'>{props.children}</div>)}


export default Texterror