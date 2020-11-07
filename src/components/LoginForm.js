import React, { useState } from 'react'

// Formik and Yup
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Styling
import '../App.css'

// firebase
import firebase from 'firebase'
import '../firebase/firebase'

// Redux
import { useDispatch } from 'react-redux'

// Redux Action
import { loginSuccess } from '../redux/reducer'


export const login = ({ user }) => async dispatch => {
    try {
        dispatch(loginSuccess(user))
    }
    catch (e) {
        return console.error("Login Failed: ", e)
    }
}

export default function LoginForm({ setLogin }) {

    const dispatch = useDispatch()

    const [loginError, setLoginError] = useState('')

    
    const loggedInUserCheck = ({ email, password }, resetForm) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                // let values = {
                //     user: res.user.displayName
                // }
                dispatch(login({
                    user: res.user.displayName
                }))
                setLogin(false)
                resetForm()
                // console.log(res)
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage, errorCode)
                setLoginError(errorMessage);
                resetForm()
            }
        );
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '', 
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password has to be longer than 8 characters!') ,
        }),
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            loggedInUserCheck(values, resetForm)
            // console.log(values)
        },
    })

    return (
        <form 
            className="loginForm"
            method="post"
            onSubmit={ 
                // formik.handleSubmit();
                (e) => {
                    e.preventDefault()
                    formik.handleSubmit()
                }
            }
        >
            {/* <label htmlFor="email">Email Address</label> */}
            <input
                className="form-fields" 
                id="email"
                name="email"
                type="email"
                onChange={ formik.handleChange }
                // onBlur={ formik.handleBlur }
                value={ formik.values.email }
                required={ true }
                placeholder="Email"
            />
            { formik.touched.email && <div className="form-field-error">{ formik.errors.email }</div> }

            {/* <label htmlFor="password">Password</label> */}
            <input
                className="form-fields" 
                id="password"
                name="password"
                type="password"
                onChange={ formik.handleChange }
                // onBlur={ formik.handleBlur }
                value={ formik.values.password }
                required={ true }
                minLength={ 8 }
                maxLength={ 32 }
                placeholder="Password"
            />
            { formik.touched.password && <div className="form-field-error">{ formik.errors.password }</div> }
            <span className="loginError">{ loginError }</span>
            <button 
                // disabled={formik.isValid} 
                type="submit" 
                className={ 
                    `form__Btn ${
                        (formik.values.password.length && formik.values.email.length) ? 
                            'form_Btn_Active' : 'form_Btn_Disable'}` 
                }
                // onClick={ () => console.log("nice") }
            >Sign in</button>
        </form>
    )
}
