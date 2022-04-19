import React from 'react'
import Inputformik from './Inputformik'

const FormikControl = ({control,...rest}) => {
  switch(control)
  {
      case 'input': return <Inputformik {...rest}/>
    //   default: return null
  }
}

export default FormikControl