import React from "react";
import "./card.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { supply } from "../store/Context";
import { useToast } from "@chakra-ui/react";
import Toaster from "./Toaster";
import Wishtoaster from "./Wishtoaster";

const Card = ({ single }) => {
  const { dispatch } = useContext(supply);
  const [found, setfound] = useState(false);
  const [wish, setwish] = useState(false);
  const toast = useToast();

  // const notify = () => {

  //   toast.success(`${single.name} has been added to your cart`, {
  //     toastId: 'success1',
  //     position: "bottom-right",
  //     autoClose: 4000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };
  // console.log(single);
  return (
    <>
      <div className="card" style={{ border: "0px" }}>
        <img src={single.image} className="card-img-top" alt="..." />
        <div className="card-body c">
          <p className="card-title">{single.name}</p>
          <p>
            <strong>₹ {single.price}</strong>
          </p>
          {single.fastDelivery ? (
            <p className="card-text">Fast Delivery</p>
          ) : (
            <p className="card-text">4 day Delivery</p>
          )}
        </div>
        <div className="rating">
          <div>
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {single.ratings > i ? (
                  <AiFillStar fontSize="15px" />
                ) : (
                  <AiOutlineStar fontSize="15px" />
                )}
              </span>
            ))}
          </div>
          <div>
            <span className="addwish">Add to wishlist</span>
            {wish ? (
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: single });
                  setwish(!wish);
                }}
                className=" wishbut"
              >
                <AiFillHeart style={{ color: "red" }} />
              </button>
            ) : (
              <button
                onClick={() => {
                  toast({
                    position: "bottom-left",
                    render: () => <Wishtoaster value={single.name} />,
                  });

                  dispatch({ type: "ADD_TO_WISHLIST", payload: single });
                  setwish(!wish);
                }}
                className=" wishbut"
              >
                <AiOutlineHeart />
              </button>
            )}
          </div>
        </div>

        <div className="add-button">
          {found ? (
            <button
              type="submit"
              class="btn btn-danger"
              onClick={() =>
                dispatch(
                  { type: "REMOVE_FROM_CART", payload: single },
                  setfound(!found)
                )
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => {
                toast({
                  position: "bottom-left",
                  render: () => <Toaster value={single.name} />,
                });

                dispatch(
                  { type: "ADD_TO_CART", payload: single },
                  setfound(!found)
                );
              }}
              disabled={!single.instock}
              class="btn "
              style={{ backgroundColor: "black", color: "white" }}
            >
              {" "}
              {!single.instock ? "Out of Stock" : "Add to Cart"}{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
