import React, { useContext, useEffect } from "react";
import "./signup.css";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Header from "../Common/Header";
import Announceoffer from "../Common/Announceoffer";
import Footer from "../Common/Footer";
import { FcHome } from "react-icons/fc";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useToast } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import Accmessage from "../Common/Accmessage";



import { supply } from "../store/Context";
const toastList = new Set();
const MAX_TOAST = 3;



const Signup = () => {
  const toast1 = useToast();
  const {state3:{account,duplicatestatus},dispatch3}=useContext(supply);
  let navigate=useNavigate();
  console.log(duplicatestatus);

  
  
  


  
function notify() {
  let toastIdToDismiss = null;
  if (toastList.size === MAX_TOAST) {
    const arr = Array.from(toastList);
    const toastId = arr[0];
    if (toastId) {
      toastIdToDismiss = toastId;
    }
    // toast.dismiss(toastId);
  }

  const id = toast.success(`Hello ${account[0].username}, The account has been created`,
  {
    
    // I'm using the onClose hook here to remove the id
    // from the set
    onClose: () => toastList.delete(id),
    onOpen: () => {
      if (toastIdToDismiss !== null) {
        setTimeout(() => {
          toast.dismiss(toastIdToDismiss);
        }, 100);
      }
    },
  });
  toastList.add(id);
}
useEffect(()=>{

  if(duplicatestatus==false){
    toast1({
      position: "bottom-right",
      render: () => <Accmessage value={account[account.length-1].username} />,
    });

  
}

},[account]
);
  // const style = {
  //   position: "absolute",
  //   bottom: 10,
  //   width: "150px",
  //   height: "40px",
  //   background: "purple",
  //   color: "#fff"
  // };
  const initialvalue = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
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
    // const val={...values,loginstatus:false};
    // console.log(val);
    
    
    
    dispatch3({type:"ADD_USER",payload:values});
    // dup();
    // if(duplicatestatus==false){
    //   toast1({
    //     position: "bottom-right",
    //     render: () => <Accmessage value={values.username} />,
    //   });
  
    // }
    
    
  
     
   
    
    
    
  }
  return (
    <>
      <Announceoffer />
      <Header />
      <h5 className="accounttitle">New Account</h5>
      <div className="mainaccount">
        <div className="leftaccount">
        <div className="twobuttons">
          <button title="Back To Home" type="button" onClick={()=>navigate("/")} style={{border:"0",backgroundColor:"transparent"}} ><FcHome/></button>
         <span title="Back To Login" ><Link to="/login"><RiLoginCircleFill/></Link> </span>
        </div>
          <Formik
            initialValues={initialvalue}
            validationSchema={validationSchema}
            onSubmit={onsubmit}
          >
            {(formik) => {
              return (
                <Form className="accountform">
                  <FormikControl
                    label="USERNAME"
                    name="username"
                    control="input"
                    type="text"
                  ></FormikControl>
                  <FormikControl
                    label="EMAIL ADDRESS"
                    name="email"
                    control="input"
                    type="email"
                  ></FormikControl>
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
                    CREATE ACCOUNT
                  </button>
                  <ToastContainer
                  style={{ width: "45%" }}
                    position="bottom-right"
                    hideProgressBar={false}
                    autoClose={5000}
                    newestOnTop={true}
                    closeOnClick={false}
                    draggable={false}
                    rtl={false}
                    
                  
                    
                  />
                </Form>
              );
            }}
          </Formik>
          
        </div>
        <div className="rightaccount">
          <img className='signupimage' src={"signup.png"}></img>
        </div>
       
      </div>
      <Footer />
    </>
  );
};

export default Signup;
