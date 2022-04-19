import React from 'react'
import "./staticimage.css"

const Staticimage = () => {
  return (
    <>
    <div className='fourimages'>
        <div className='firstimage'><img className='staticfour' src="cut1.jpg"></img><p className='statictext1'>Best Stitching and <br/>Fabric quality</p></div>
        <div className='secondimage'><img className='staticfour' src="cut3.jpg"></img><p className='statictext2'>Mercerized Cotton</p></div>
        <div className='thirdimage'><img className='staticfour' src="cut2.jpg"></img><p className='statictext3'>Resilient Micro Modal</p></div>
        <div className='fourthimage'><img className='staticfour' src="cut4.jpg"></img><p className='statictext4'>Stay Fresh and Dry</p></div>
        
    </div>


    </>
  )
}

export default Staticimage