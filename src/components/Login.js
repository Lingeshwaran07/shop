import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./login.css";
import FormikControl from "./FormikControl";
import Header from "../Common/Header";
import Announceoffer from "../Common/Announceoffer";
import Footer from "../Common/Footer";
import { useNavigate } from "react-router-dom";
import { supply } from "../store/Context";

const Login = () => {
  // setting up initial values for formik
  let navigate=useNavigate();
  const {state3:{account},dispatch3}=useContext(supply);
  console.log(account)

  const initialvalue = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password is too short. must be of atleast 8 Characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ).required("Required"),
  });
  const onSubmit = (values) =>{ 
    // const val={...values,logincheck:false};
    dispatch3({type:"CHECK_LOGIN",payload:values})
    navigate("/");
    
    console.log(values);}
  return (
    <>
    <Announceoffer/>
      <Header/>
      <div className="loginouter">
        <h4 className="signintitle">Sign in</h4>
        <div className="signinflex">
          <div class="flexleft">
            <Formik initialValues={initialvalue} validationSchema={validationSchema} onSubmit={onSubmit}>
              { formik =>{
              return <Form className="loginform">
                <FormikControl label="EMAIL ADDRESS" name="email" control="input" type="email"></FormikControl>
                <FormikControl label="PASSWORD" name="password" control="input" type="password"></FormikControl>
                <div className="buttonplusreset">
                <button type="submit" className="loginbutton" disabled={!formik.isValid}>SIGN IN</button>
                <span className="forgotpassword"><a href="#">FORGOT YOUR PASSWORD?</a></span>

            </div>

              </Form>}
              
              
              
              }
            </Formik>





          </div>
          <div class="flexright">
            <h5 style={{ fontWeight: "bolder" }}>New Customer?</h5>
            <p className="signindesp">
              Create an account with us and you'll be able to:
            </p>
            <ul className="signinlist">
              <li>Check out faster</li>
              <li>Save multiple shipping addresses</li>
              <li>Access your order history</li>
              <li>Track new orders</li>
              <li>Save items to your wish list</li>
            </ul>
           
            <button className="createbutton" onClick={()=>navigate("/signup")}>CREATE ACCOUNT</button>
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
