import React, { useReducer, useState } from "react";
import { reducerfunction ,filterreducer,accountfunc } from "./Reducer";

export const supply = React.createContext();

const Contextprovider = ({ children }) => {
  const [total,settotal]=useState(0);
  const [discount, setdiscount] = useState(0);
 
  // const [logincheck, setlogincheck] = useState(false);
 





  const initialstate = {
    products: [],
    cart:[],
    wishlist:[],
  };

  const initialfilter = {
    byfastdelivery: false,
    byoutofstock: false,
    byrating: 0,
    search: "",
    sort: "",
  };

  const initialaccount={
    account:[{confirmpassword: "Qwerty@12",
    email: "ramesh@gmail.com",
    loginstatus: false,
    password: "Qwerty@12",
    username: " lingeshwaran",}],
    currentuser:{email:"",password:"",loginstatus:false},
    
  }
  const [state, dispatch] = useReducer(reducerfunction, initialstate);
  const[state2,dispatch2]=useReducer(filterreducer,initialfilter);
  const[state3,dispatch3]=useReducer(accountfunc,initialaccount);

  

  return (
    <>
      <supply.Provider value={{state3, dispatch3, state, dispatch,state2,dispatch2,total,settotal ,discount,setdiscount}}>{children}</supply.Provider>
    </>
  );
};

export default Contextprovider;
