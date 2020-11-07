import React, { useEffect, useState } from 'react'

// React Redux
// import { useDispatch, useSelector } from 'react-redux'

// Styles
import '../App.css'

// Logo
import { ReactComponent as Logo } from './../img/olx-logo.svg';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import LoginForm from './LoginForm';
import Register from './Register';

// Components

// Firebase
import firebase from 'firebase'
import '../firebase/firebase'

// Redux
import { useDispatch } from 'react-redux'

// Action
import { login } from './LoginForm'


export default function Login({ setLogin }) {

    const dispatch = useDispatch()

    // const loggedInUserCheck = ({ email, password }) => {
    //     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         console.log(errorMessage, errorCode)
    //     });
    // }

    const [ifUser, setIfUser] = useState(true)
    const [createAccountMessage, setCreateAccountMessage] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setCreateAccountMessage("")
        }, 3000)
        return () => clearTimeout(timer);
    }, [createAccountMessage])

    // const dispatch = useDispatch()
    // const user = useSelector(state => state.user)

    // console.log(user)

    const signUpText = 'Create an account?'
    const signInText = 'Have an account?'

    const signInHead = 'Login'
    const signUpHead = 'Register'


    const googleSignIn = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // console.log("Token: ", token)
            // The signed-in user info.
            var user = result.user;
            // console.log("User: ", user)
            dispatch(login({
                user: user.displayName
            }))
            setLogin(false)
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorMessage, errorCode)
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.error(email, credential)
        });
    }

    return (
        <div 
            // className="loginModal__wrapper"
            // onClick={ () => setLogin(false) }
            // onBlur={ () => setLogin(false) }
        >
            <div 
                className="loginBox"
                // onBlur={ () => setLogin(false) }
            >
                <button className="close__LoginModal" onClick={ () => {
                    setLogin(false)
                    setCreateAccountMessage("")
                } }>
                    <CloseIcon className="close__LoginBtn" />
                </button>
                <Logo />
                <span className="createAccountMessage">{ createAccountMessage }</span>
                <h4 className="login__head">
                    { ifUser ? signInHead : signUpHead }
                </h4>

                { ifUser ? <LoginForm setLogin={ setLogin } /> : <Register onClick={ () => setCreateAccountMessage("") } setIfUser={ setIfUser } setCreateAccountMessage={ setCreateAccountMessage }/> }
                <hr style={{ width: "100%", }} />
                <div className="loginOptions">
                    <p 
                        onClick={ () => setIfUser(!ifUser) }
                        className="loginOptions__navigate"
                    >
                        { ifUser ? signUpText : signInText }
                    </p>
                    <p 
                        className="loginOptions__navigate"
                        onClick={ googleSignIn }
                    >Sign in with Google</p>
                </div>
            </div>
        </div>
    )
}
