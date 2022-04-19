import React from "react";
import "./forgotpassword.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import Header from "../Common/Header";
import Announceoffer from "../Common/Announceoffer";
import Footer from "../Common/Footer";


const Forgotpassword = () => {
  const initialvalue = {
    email: " ",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });
  const onSubmit = (values) => console.log(values);
  return (
    <>
    <Announceoffer/>
      <Header/>
      <div className="resetpassword">
        <h5 style={{fontWeight:"bolder"}}>Reset Password</h5>
        <p className="resetdesp">
          Fill in your email below to request a new password. An email will be
          sent to the address below
          <br /> containing a link to verify your email address.
        </p>
        <Formik
          initialValues={initialvalue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="resetpasswordform">
                <FormikControl
                  label="EMAIL ADDRESS"
                  name="email"
                  control="input"
                  type="email"
                ></FormikControl>
                <button type="submit" className="resetpasswordbutton" disabled={!formik.isValid}>RESET PASSWORD</button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Footer/>
    </>
  );
};

export default Forgotpassword;
