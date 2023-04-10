import { useContext } from 'react';
import Card from '../../components/UI/Card';
import CartItem from '../../components/CartItem/CartItem';
import classes from './Cart.css';
import CartContext from '../../store/cart-context';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const navigate = useNavigate();

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        // console.log(cartCtx.items);
        navigate('/orders');
    };

    const cartItems = (
        <Card>
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
        </Card>
    );

    return (
        <>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
                <div className='actions'>
                    {hasItems && <button onClick={orderHandler} className='button'>Order</button>}
                </div>
            </div>
            
        </>
    );
};

export default Cart;