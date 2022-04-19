import React, { useContext, useEffect } from "react";
import Header from "../Common/Header";
import "./cart.css";
import { AiFillDelete } from "react-icons/ai";
import { supply } from "../store/Context";
import { Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

// import for delete confirmation dialog box

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Bill from "./Bill";
import Announceoffer from "../Common/Announceoffer";
import Nomatchroute from "./Nomatchroute";
import Empty from "./Empty";

const Cart = () => {
  let navigate=useNavigate();


  const {
    state: { cart, },
    dispatch,
    total,
    settotal,discount,setdiscount
  } = useContext(supply);

  console.log(cart.length);

  useEffect(() => {
    settotal(cart.reduce((tot, a) => tot + a.price * Number(a.qty), 0));
    setdiscount(cart.reduce((tot, a) => tot + a.mrp * Number(a.qty), 0));
    
  }, [cart]);

  console.log(cart,total);

  return (
    <>
    <Announceoffer/>
      <Header />
      <div className="cart1">
        <button onClick={()=>navigate("/")} className="continueshop">Continue Shopping</button>
      </div>

     {cart.map((sin) => {
        return (
          <div className="cart2">
          
            <img className="cartimage" src={sin.image} />
            <p className="carttitle" style={{fontWeight:"bolder"}}>{sin.name}</p>

           
            <div className="pricediv">
              <span className="price0" style={{fontWeight:"bolder"}}>Price</span>
              <span style={{fontWeight:"bolder"}} className="price1">₹{sin.price}</span>
              <span style={{fontWeight:"bolder",color:"red"}} className="price2">{sin.mrp}</span>
            </div>
            <div className="form-ctrl">
              <span className="quantity" style={{fontWeight:"bolder"}}>Quantity</span>
              <Form.Control
                onChange={(e) =>{
                  dispatch({
                    type: "QTY_CHANGE",
                    payload: { qty: e.target.value, id: sin.id },
                  });
                 

                }

                }
                as="select"
                value={sin.qty}
              >
                {[...Array(sin.instock)].map((_, x) => (
                  <option key={x + 1}>{x + 1}</option>
                ))}
              </Form.Control>
            </div>
            <div className="priceitem">
              <span className="pricetitle" style={{fontWeight:"bolder"}}>Total Price</span>
              <span style={{fontWeight:"bolder"}} className="pricenumber">₹{sin.price * Number(sin.qty)}</span>
            </div>

            <span className="binicon">
              <button onClick={()=>confirmAlert({
                title: 'Are You Sure?',
                message: 'Do you want to remove this item from cart?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => dispatch({type:"REMOVE_FROM_CART",payload:sin})
                    
                  },
                  {
                    label: 'No',
                    onClick: () => console.log("exit")
                  }
                ]
              })} type="submit" className="btn "><AiFillDelete  className="deletecolor" /></button>
            </span>
          </div>
        );
      })}
      {cart.length===0?<Empty value="cart"/>:
     
      (<Bill value={{total,discount}}/>
      )}
      {cart.length!=0?(<div className="checkoutdiv">
        <button type="submit" className="btn checkoutbutton btn-warning">Proceed To Checkout</button>
        <img className="checkoutimage" src="checkout.png"></img>
      </div>):null

      }

      
    </>
  );
};

export default Cart;
