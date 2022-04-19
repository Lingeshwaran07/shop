import React, { useContext, useState } from 'react'
import Announceoffer from '../Common/Announceoffer'
import Header from '../Common/Header'
import"./updatepassword.css"
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { supply } from '../store/Context';
import { useNavigate } from 'react-router-dom';

const Updatepassword = () => {
    const[passstatus,setpassstatus]=useState(false);
    const{dispatch3,state3:{currentuser}}=useContext(supply);
    const {email}=currentuser;
    let navigate=useNavigate();


    const initialvalue = {
       
        password: " ",
        confirmpassword: " ",
      };
      const validationSchema = Yup.object({
       
        password: Yup.string()
          .min(8, "Password is too short. must be of atleast 8 Characters")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )
          .required("Required"),
        confirmpassword: Yup.string()
          .oneOf([Yup.ref("password"), " "], "Passwords must match!")
          .required("Required"),
      });
      function onsubmit(values) {
        const val={...values,email}
        console.log(val);
        dispatch3({type:"UPDATE_PASSWORD",payload:val});
        setpassstatus(true)


        
        
      }
  return (
    <>
    <Announceoffer/>
    <Header/>
    <div className='updatepassword'>
    <div className="cart1">
        <button onClick={()=>navigate("/")} className="continueshop">Continue Shopping</button>
      </div>
        <h5 className='updatepasswordtext'>Update Password</h5>
    <Formik
            initialValues={initialvalue}
            validationSchema={validationSchema}
            onSubmit={onsubmit}
          >
            {(formik) => {
              return (
                <Form className="passwordform">
                  
                  <FormikControl
                    label="PASSWORD"
                    name="password"
                    control="input"
                    type="password"
                  ></FormikControl>
                  <FormikControl
                    label="CONFIRM PASSWORD"
                    name="confirmpassword"
                    control="input"
                    type="password"
                  ></FormikControl>
                  <button
                    type="submit"
                    // onClick={(e)=>{notify();
                    //   dispatch3({type:"ADD_USER",payload:e.target.value})
                    
                    
                    // }}
                    className=" accountbutton"
                    disabled={!formik.isValid}
                  >
                    UPDATE PASSWORD
                  </button>
                  {passstatus?<h1 className='passwordupdtmsg' >Your password has been changed successfully</h1>:null}
                 
                  
                    
                  
                </Form>
              );
            }}
          </Formik>
        
    </div>
    
    </>
  )
}

export default Updatepassword