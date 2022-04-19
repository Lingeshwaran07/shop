import React from 'react'
import "./bill.css"
import { supply } from '../store/Context';
import { useContext } from 'react';

const Bill = (value) => {
  // const [total,discount]=value;
  // console.log(value.value.discount);
    const {
        state: { cart,}
      } = useContext(supply);

      let percent= Math.round(((value.value.discount-value.value.total)/value.value.discount)*100);
      console.log(percent);
  return (
    
    
      
      <div className="thankmiddle">
        <table style={{ width: "100%" }}>
          <tr>
            <th>Product</th>
            <th style={{ textAlign: "center" }}>ProductName</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
          {cart.map((prod,i) => {
            return (
              <tr key={i}>
                <td>
                  <img
                    src={prod.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>x{prod.qty}</td>
                <td>{Number(prod.price * prod.qty)}</td>
              </tr>
            );
          })}
        </table>
        <div className="grandtotal">
          <div className="leftend">
            
            <h5 className="brandnam">DEXTER</h5>
          </div>
          <div className="rightend">
          <strong style={{textDecoration:"line-through",color:"red"}}>{value.value.discount}</strong><span style={{fontSize:"10px"}}>&nbsp;({percent}% &nbsp;  discount)</span>
            <h5 className="tot">Grand Total </h5>
            <h5 className="totamt">&nbsp; &nbsp; &nbsp; Rs  &nbsp; {value.value.total}</h5>
          </div>
        </div>

      </div>
      
    
    
  )
}

export default Bill