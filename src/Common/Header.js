import React from "react";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { supply } from "../store/Context";
import { useContext } from "react";
import Badge from "@mui/material/Badge";
import { detectOverflow } from "@popperjs/core";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Header = () => {
  const {
    state3: { currentuser,account },
    state: { cart, wishlist },dispatch3,dispatch2,
  } = useContext(supply);


  const { loginstatus,email } = currentuser;
  


  
if (loginstatus===true){
  const founduser=account.filter((p)=> p.email===email)
  const foundaccount=founduser[0];
  var {username}=foundaccount;
}
  console.log(loginstatus,email,username);
  



  let navigate = useNavigate();


  

  // const displayname=founduser[0].username;


 

  let activeStyle = {
    fontWeight: "bolder",
  };

  // function nav({ isActive }){
  //  {
  //     color: isActive ? '#fff' : '#545e6f';
  //     background: isActive ? '#7600dc' : '#f0f0f0';

  // }

  return (
    <>
      <div className="mainheader">
        <div className="headerone">
          <div className="headeroneleft">
            <span className="search">
              <AiOutlineSearch className="searchicon" />

              <input
              onChange={(e)=>  dispatch2({type:'SEARCH',payload: e.target.value})}
                className="searchtext"
                maxlength="30"
                size="18"
                type="text"
                placeholder="Search for products"
              />
            </span>
          </div>
          <div className="headeronemiddle">
            <p className="title">
              <button onClick={() => navigate("/")} className="buttitle">
                Dexter
              </button>
            </p>
            <p className="subtitle">TRADERS</p>
          </div>

          <div className="headeroneright">
            <span className="wishlist">
              <button title="Wishlist"
                type="submit"
                onClick={() => {
                  loginstatus == true
                    ? navigate("/wishlist")
                    : navigate("/login");
                }}
                className="  position-relative"
                style={{backgroundColor:"transparent",border:"none"}}
              >
                <Badge color="error" badgeContent={wishlist.length}>
                  {" "}
                  <FiHeart className="iallthree" />
                </Badge>
              </button>
            </span>
            <span className="cart">
              <button
              title="Cart"
                type="submit"
                onClick={() => navigate("/cart")}
                className="  position-relative"
                style={{backgroundColor:"transparent",border:"none"}}
              >
                {" "}
                <Badge color="error" badgeContent={cart.length}>
                  <BsHandbag className="iallthree"  />
                </Badge>
              </button>
            </span>
            {loginstatus === false ? (
              <span title="User Login" className="account">
                <NavLink className="userlogin" to="/login">
                  <BiUserCircle className="iall userloginbut" />
                </NavLink>
              </span>
            ) : (
              <div class="btn-group account">
                <button
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "20px",
                   
                    lineHeight: "1",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <FaUserAlt className="ialll"  />
                  <span style={{fontSize:"18px"}}>&nbsp; {username.slice(0,8)}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <button class="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>navigate("/updatepassword")} class="dropdown-item" type="button">
                      Update Password
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>confirmAlert({
                title: 'Are You Sure?',
                message: 'Do you want to log out from your account?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () =>{ dispatch3({type:"LOGOUT"},
                    navigate("/")
                    
                    )}
                    
                  },
                  {
                    label: 'No',
                    onClick: () => console.log("exit")
                  }
                ]
              })}

                     class="dropdown-item" type="button">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="headertwo">
          <span className="firstcat">
            <NavLink
              className="nav"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/men"
            >
              Men
            </NavLink>
          </span>
          <span className="firstcat">
            <NavLink
              className="nav"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/women"
            >
              Women
            </NavLink>
          </span>
          <span className="firstcat">
            <NavLink
              className="nav"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/shoe"
            >
              Shoes
            </NavLink>
          </span>
          <span className="firstcat">
            <NavLink
              className="nav"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/watch"
            >
              Watches
            </NavLink>
          </span>
          <span className="firstcat">
            <NavLink
              className="nav"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/headphones"
            >
              Headphones
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
