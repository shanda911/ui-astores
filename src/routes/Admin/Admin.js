import React, {useState} from 'react';

import Modal from '../../components/UI/Modal';
import classes from './Admin.css'
const Admin = () => {
const [shown, setShown] = useState(false);

const hideModal = () =>{
    setShown(false);
}


return(
    <>
    <button onClick={()=>setShown(true)}>Users</button>
        {shown  && <Modal onClose={hideModal}>
        <div className='actions'>
            <h1>USERS</h1>
            <h1>AVAILABLE PRODUCTS</h1>
            <h1>ORDERS</h1>
        </div>
        </Modal>
    }</>
);
}

export default Admin;