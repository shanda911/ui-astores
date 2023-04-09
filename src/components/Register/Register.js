import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import classes from '../../routes/Login/Login.css';

import axios from '../../api/axios';
const REGISTER_URL = '/users';

const Register = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const userRef = useRef();
    const pwdRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = userRef.current.value;
        const password = pwdRef.current.value;

        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // console.log(JSON.stringify(response?.data));
            //  console.log(JSON.stringify(response));
            setSuccess(true);
            navigate(-1);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return(<div className={classes['login-page']}>
            <div className={classes.form}>
            <div className={classes.login}>
                <div className='login-header'>
                <h3>Register</h3>
                <p>Enter your credentials for Sign up.</p>
                </div>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    ref={userRef}
                    required/>
                <input
                    type="password"
                    placeholder="Password"
                    ref={pwdRef}
                    required/>
                <button>Register</button>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            </form>
            </div>
        </div>
    
        );
}

export default Register;