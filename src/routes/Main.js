
import React from 'react';
import {Route, Routes} from "react-router-dom";

import Login from "./Login/Login";

import MasterLayout from "../components/MasterLayout/MasterLayout";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Admin from "./Admin/Admin";
import Cart from "./Cart/Cart";
import Order from "./Orders/Orders";

const Main = () => {
  const isLogin = true;
  return(
          <Routes>
          <Route path="/login" element={<Login />} />
          {
          isLogin && 
          <Route path="/" element={<MasterLayout />} >          
            <Route path="products" element={<Home />} >
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Order />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          }
          {/* <Route path="*" element={<ERROR />} ></Route> */}
          </Routes>
  
);
        };
export default Main;
