import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";

const Wishtoaster = (props) => {
  return (
    <div style={{margin:"0",backgroundColor:"red",color:"white",display:"flex",alignItems:"center",justifyContent:"flex-start",columnGap:"5px"}}><p style={{fontSize:"10px",margin:"0",padding:"4px 6px",}}><BsFillHeartFill style={{marginRight:"5px",fontSize:"13px",color:"white"}}/>{props.value} has been added to your cart</p></div>
  )
}

export default Wishtoaster