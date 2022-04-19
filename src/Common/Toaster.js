import React from 'react'
import { GrStatusGood } from "react-icons/gr";

const Toaster = (props) => {
  return (
    <div style={{margin:"0",backgroundColor:"green",color:"white",display:"flex",alignItems:"center",justifyContent:"flex-start",columnGap:"5px"}}><p style={{fontSize:"10px",margin:"0",padding:"4px 6px",}}><GrStatusGood style={{marginRight:"5px",fontSize:"13px",color:"white"}}/>{props.value} has been added to your cart</p></div>
  )
}

export default Toaster