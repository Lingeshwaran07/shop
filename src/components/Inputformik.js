import { ErrorMessage, Field } from 'formik'
import React from 'react'
import Texterror from './Texterror' 
import './inputformik.css'


const Inputformik = ({label,name,...rest}) => {
  return (
      <>
      <div className='inputbox'>
          <label className='inputlabel' htmlFor={name}>{label}</label>
          <Field className="customfield" id={name} name={name} {...rest}/>
          <ErrorMessage name={name} component={Texterror}/>
      </div>
      
      </>
    
  )
}

export default Inputformik