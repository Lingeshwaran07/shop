import React from "react";
import Header from "../Common/Header";
import "./wishlist.css";
import { AiFillDelete } from "react-icons/ai";
import { supply } from "../store/Context";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import Empty from "./Empty";

// import for delete confirmation dialog box

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Announceoffer from "../Common/Announceoffer";




const Wishlist = () => {

  let navigate=useNavigate();
  const {state3:{currentuser},
    state: { wishlist },
    dispatch,
  } = useContext(supply);

  // console.log(account);

  

// function used in delete button for delete confirmation dialog box
 

  return (
    <>
    <Announceoffer/>
      <Header />
      <div className="wish0">
        <button onClick={()=>navigate("/")} className="continueshop">Continue Shopping</button>
      </div>

      {wishlist.map((w) => {
        return (
          <div key={w.id} className="wish1">
            <img className="wishimg" src={w.image} />
            <p className="wishdesp">{w.name}</p>
            <div className="wish2">
              <span className="wishpricetxt">Price</span>
              <span className="wishprice">₹{w.price}</span>
            </div>
            <div className="wish3">
              <span className="stockstatus">Stock Status</span>
              {w.instock != 0 ? (
                <span style={{ color: "green" }} className="stockstatus">
                  IN STOCK
                </span>
              ) : (
                <span style={{ color: "red" }} className="stockstatus">
                  OUT OF STOCK
                </span>
              )}
            </div>
            <div className="wish4">
              <button type="submit" onClick={()=>{dispatch({type:"ADD_TO_CART",payload:w}); navigate("/cart");
            
            }
            
            } className="navigatecart btn btn-dark">
                Add To Cart
              </button>
            </div>
            <div className="wish5">
              <button
               onClick={()=>confirmAlert({
                title: 'Are You Sure?',
                message: 'Do you want to remove this item from wishlist?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => dispatch({type:"REMOVE_FROM_WISHLIST",payload:w})
                    
                  },
                  {
                    label: 'No',
                    onClick: () => console.log("exit")
                  }
                ]
              })}
                className="wishdelete"
              >
                <AiFillDelete className="wishdel" style={{ color: "red" }} />
              </button>
            </div>

           
          </div>
        );
      })}
      {wishlist.length===0? (<Empty value="Wishlist"/>):null}
    </>
  );
};

export default Wishlist;
