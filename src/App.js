import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Forgotpassword from "./components/Forgotpassword";
import Login from "./components/Login";
import { supply } from "./store/Context";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Men from "./category/Men";
import Women from "./category/Women";
import Watch from "./category/Watch";
import Shoe from "./category/Shoe";
import Headphones from "./Common/Headphones";
import Earphones from "./category/Earphones";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Nomatchroute from "./components/Nomatchroute";
import Updatepassword from "./components/Updatepassword";
import Toaster from "./Common/Toaster";

function App() {
  const { state, dispatch } = useContext(supply);

  const api = async () => {
    //const response = await fetch("https://demo7303877.mockable.io/");
    const response = await fetch("https://dummyjson.com/products?limit=0");

    const data = await response.json();

    // setarr([...data.products]);

    let rating = [1, 2, 3, 4, 5]; //for rating
    let boolean = [true, false]; // boolean
    let instock = [0, 1, 3, 5, 6, 8]; // no of items

    //api mapping to object
    console.log(data.products);

    const productslist = data.products.map((val) => ({
      id: uuidv4(),
      name: val.title,
      price: val.price+500,
      image: val.images[0],
      category: val.category,
      instock: instock[Math.floor(Math.random() * instock.length)],
      fastDelivery: boolean[Math.floor(Math.random() * boolean.length)],
      ratings: rating[Math.floor(Math.random() * rating.length)],
      gender: ['mens-shirts'].includes(val.category)?'Men':'Women',
      mrp:val.price+1000 ,
    }));

    dispatch({ type: "data", payload: productslist });
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />

          <Route path="men" element={<Men />} />
          <Route path="updatepassword" element={<Updatepassword />} />

          <Route path="women" element={<Women />} />
          <Route path="shoe" element={<Shoe />} />
          <Route path="watch" element={<Watch />} />
          <Route path="headphones" element={<Earphones />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpassword" element={<Forgotpassword />} />
          <Route path="*" element={<Nomatchroute />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
