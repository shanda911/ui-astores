import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

import classes from './Login.css';

import axios from '../../api/axios';
const LOGIN_URL = '/auth/login';

const Login = () => {
    const { setAuth } = useAuth();

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
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // console.log(JSON.stringify(response?.data));
            //  console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, roles, accessToken });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
                console.log(err);
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return(
        <div className='login-page'>
        <div className='form'>
          <div className='classes.login'>
            <div className='login-header'>
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
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
            <button>login</button>
            <p className='message'>Not registered? <a href="#">Create an account</a></p>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </form>
        </div>
      </div>
        );
}

export default Login;