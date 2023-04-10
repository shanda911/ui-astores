
import React from 'react';
import {Route, Routes} from "react-router-dom";

import Login from "./Login/Login";

import MasterAuthLayout from "../components/MasterAuthLayout/MasterAuthLayout";
import Register from '../components/Register/Register'
import UnAuth from '../components/UnAuthorized/UnAuth'
import Home from "./Home/Home";
import Product from "./Product/Product";
import Admin from "./Admin/Admin";
import Cart from "./Cart/Cart";
import Order from "./Orders/Orders";


const ROLES = {
  'CUSTOMER':'CUSTOMER',
  'ADMIN' : 'ADMIN'
}

const Main = () => {

  return(
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<UnAuth />} />

            <Route path="/" element={<MasterAuthLayout allowedRoles={[ROLES.CUSTOMER, ROLES.ADMIN]} />}>          
              <Route path="/" element={<Home />} >
                <Route path=":id" element={<Product />} />
              </Route>
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Order />} />
            </Route>
            
            <Route path="/" element={<MasterAuthLayout allowedRoles={[ROLES.ADMIN]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>
            
            {/* <Route path="*" element={<ERROR />} ></Route> */}
          </Routes>
  
);
        };
export default Main;
