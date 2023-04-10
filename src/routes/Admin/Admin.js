import React, {useState} from 'react';

import Modal from '../../components/UI/Modal';
const Admin = () => {
const [shown, setShown] = useState(false);

const hideModal = () =>{
    setShown(false);
}


return(
    <>
    <button onClick={()=>setShown(true)}>Users</button>
        {shown  && <Modal onClose={hideModal}>
        <h1>USERS</h1>
        <h1>AVAILABLE PRODUCTS</h1>
        <h1>ORDERS</h1>
        </Modal>
    }</>
);
}

export default Admin;