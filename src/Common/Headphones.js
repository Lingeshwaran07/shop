import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { supply } from '../store/Context';
import Card from './Card';
import "./headphones.css"

const Headphones = () => {
    const {state:{products}}=useContext(supply);
    
    const filtered=products.filter((i)=>  i.category === 'Headphones' );
    const threefilter=filtered.filter((i,index)=>index<3)
    console.log(filtered);
  return (
    <>
    <h3 className='featured'>FEATURED BRANDS</h3>
    <div className='boatslide scrolling-limit1'><div className='scrolling1 boattext'>BOAT UPTO <span style={{color:"white"}}>60% OFF </span>HEADPHONES <span style={{color:"white"}}>SPEAKERS & CABLES</span>  </div></div>
    <div className='boatimagediv'>
    <img className='boatimage' src="boat.jpg"/>
    </div>
    <div className='demoheadset'>
        {threefilter.map((i)=> <Card key={i.id} single={i}/>)}
         
    </div>
    <div className='twoimages'>
    <div className='pumaimage'>
           <Link to="/shoe"><img className='homeimg1'
    src="orangepuma.png"/></Link> 
        </div>
        <div className='cuteimage'>
           <Link to="watch"><img className='homeimg2' src="newwatch.jpg"/></Link> 
        </div>
        
    </div>
    </>
  )
}

export default Headphones