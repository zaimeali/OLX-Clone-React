import React, { useState } from 'react'

// React Redux
import { useDispatch, useSelector } from 'react-redux'

// Styles
import '../App.css'

// Icons
import CloseIcon from '@material-ui/icons/Close';
import LoginForm from './LoginForm';
import Register from './Register';

// Components


export default function Login({ setLogin }) {

    const [ifUser, setIfUser] = useState(true)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const signUpText = 'Create an account?'
    const signInText = 'Have an account?'

    return (
        <div 
            // className="loginModal__wrapper"
            // onClick={ () => setLogin(false) }
            // onBlur={ () => setLogin(false) }
        >
            <div 
                className="loginBox"
                onBlur={ () => setLogin(false) }
            >
                <button className="close__LoginModal" onClick={ () => setLogin(false) }>
                    <CloseIcon className="close__LoginBtn" />
                </button>
                { ifUser ? <LoginForm /> : <Register /> }
                <div className="loginOptions">
                    <p 
                        onClick={ () => setIfUser(!ifUser) }
                    >
                        { ifUser ? signUpText : signInText }
                    </p>
                    <p>Sign in with Google</p>
                </div>
            </div>
        </div>
    )
}
