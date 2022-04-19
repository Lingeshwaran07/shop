
import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Announceoffer from '../Common/Announceoffer'
import Carosal from '../Common/Carosal'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Headphones from '../Common/Headphones'
import Staticimage from '../Common/Staticimage'
import Forgotpassword from './Forgotpassword'
import Login from './Login'
import Signup from './Signup'




const Home = () => {
  return (
    <>
    <Announceoffer/>
      <Header/>
      <Carosal/>
      <Staticimage/>
      <Headphones/>
      <Footer/>
      
   
    
    
    </>
  )
}

export default Home