import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';


const Orders = () => {

   const cartCtx = useContext(CartContext);

   console.log(cartCtx.items)
   console.log(cartCtx.totalAmount)
//TODO : POST '/order'
   return( <h1>Order</h1>);
}

export default Orders;