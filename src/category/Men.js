import React from "react";
import Header from "../Common/Header";
import { supply } from "../store/Context";
import { Form } from "react-bootstrap";
import Rating from "../components/Rating";
import { useContext } from "react";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Card from "../Common/Card";
import "./men.css";
import Announceoffer from "../Common/Announceoffer";
const Men = () => {
  const {
    state: { products },
    dispatch,
    state2: { byfastdelivery, byoutofstock, byrating, sort, search },
    dispatch2,
  } = useContext(supply);

  


 

  const mencategoryfilter = products.filter(
    (i) =>
      (i.gender === "Men" || i.gender === "Unisex" || i.gender === "Boys") &&
      (i.category === "Shirts" ||
        i.category === "Jeans" ||
        i.category === "Track Pants" ||
        i.category === "Sweatshirts" ||
        i.category === "Jackets" ||
        i.category === "Trousers" ||
        i.category === "Kurtas" ||
        i.category === "Tshirts")
  );
  

  // console.log(byfastdelivery,
  //   byoutofstock,
  //   byrating,
  //   sort);

    const finalfiltering=()=>{
      let transformedproduct=mencategoryfilter;

      if(sort=='lowtohigh'||sort=='hightolow'){
        transformedproduct=transformedproduct.sort((a,b)=> (
          sort==='lowtohigh' ? a.price-b.price : b.price-a.price) 




        );
      if(sort==''||undefined) {
        transformedproduct=mencategoryfilter;

      } 

      }
      if(!byoutofstock){
        transformedproduct=transformedproduct.filter((q)=>q.instock);
      }
      if(byfastdelivery){
        transformedproduct=transformedproduct.filter((q)=>q.fastDelivery);
      }
      if(byrating){
        transformedproduct=transformedproduct.filter((q)=>q.ratings==byrating);
      }
      if(search){
        transformedproduct=transformedproduct.filter((q)=>q.name.toLowerCase().includes(search));
      }






return transformedproduct;
    }
 

  return (
    <>
    <Announceoffer/>
      <Header />
      <div className="mainmen">
        <div className="leftmen">
          <div className="heading">Filter Products</div>
          <div className="formmen">
            <Form>
              <div className="mb-3">
                <Form.Check
                  className="pb-3"
                  type={"radio"}
                  id={`rad`}
                  label={"Ascending"}
                  name="radio"
                  onClick={() =>
                    dispatch2({
                      type: "ASCENDING-DESCENDING",
                      payload: "lowtohigh",
                    })
                  }
                  checked={sort === "lowtohigh" ? true : false}
                />
                <Form.Check
                  className="pb-3"
                  type={"radio"}
                  id={`rad`}
                  label={"Descending"}
                  name="radio"
                  onClick={() =>
                    dispatch2({
                      type: "ASCENDING-DESCENDING",
                      payload: "hightolow",
                    })
                  }
                  checked={sort === "hightolow" ? true : false}
                />
                <Form.Check
                  className="pb-3"
                  type={"Checkbox"}
                  id={`check1`}
                  label={"Include out of stock"}
                  onClick={() => dispatch2({ type: "INSTOCK" })}
                  checked={byoutofstock}
                />

                <Form.Check
                  className="pb-3"
                  type={"Checkbox"}
                  id={`check2`}
                  label={"Fast delivery only"}
                  onClick={() => dispatch2({ type: "BYDELIVERY" })}
                  checked={byfastdelivery}
                />
              </div>
            </Form>
            <span className="ratingmedia">
              <label>Rating:</label>
              <span className="star">
                <Rating
                  rating={byrating}
                  onClick={(i) => dispatch2({ type: "BY_RATING", payload: i })}
                  style={{ cursor: "pointer" }}
                />
              </span>
              <button
                type="button"
                className="btn btn-light clear-button"
                onClick={() => dispatch2({ type: "CLEARFILTER" })}
              >
                Clear filters
              </button>
            </span>
          </div>
        </div>

        <div className="rightmen">
          {finalfiltering().map((i, index) => (
            <Card key={index} single={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Men;
