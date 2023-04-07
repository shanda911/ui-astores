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
        <h1>USER</h1>
        </Modal>
    }</>
);
}

export default Admin;