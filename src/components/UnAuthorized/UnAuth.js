import { useNavigate } from "react-router-dom"
import classes from '../../routes/Login/Login.css';

const UnAuth = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='login-page'>
            <div className='form'>
            <div className='login'>
                <div className='login-header'>
                <h3>Unauthorized</h3>
                <p>Contact Admin to access.</p>
                </div>
            </div>
            <button onClick={goBack}>Back</button>
            </div>
        </div>
    )
}

export default UnAuth
