import React, { useState } from 'react'

// Formik and Yup
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Styling
import '../App.css'

// Firebase
import firebase from 'firebase'
import '../firebase/firebase'


export default function Register({ setIfUser, setCreateAccountMessage }) {

    const [registerError, setRegisterError] = useState('')

    const registerUser = ({ email, password, username }, resetForm) => {
        console.log(username)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                setCreateAccountMessage("Created Successfully")
                setIfUser(true);
                resetForm()
                res.user.updateProfile({
                    displayName: username,
                })
            })
            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorMessage, errorCode)
                setRegisterError(errorMessage)
                resetForm()
            }
        );
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '', 
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password has to be longer than 8 characters!'),
            confirmPassword: Yup.string()
                .when("password", {
                    is: password => (password && password.length > 0 ? true : false),
                    then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
                }),
        }),
        onSubmit: (values, { resetForm }) => {
            registerUser(values, resetForm)
            // alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <form 
            className="loginForm"
            method="post"
            onSubmit={ (e) => {
                e.preventDefault()
                formik.handleSubmit()
                
            } }
        >
            <input 
                className="form-fields" 
                id="username"
                name="username"
                type="text"
                onChange={ formik.handleChange }
                // onBlur={ formik.handleBlur }
                value={ formik.values.username }
                required={ true }
                placeholder="Username"
            />
            { formik.touched.username && <div className="form-field-error">{ formik.errors.username }</div> }   

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

            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
            <input 
                className="form-fields" 
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={ formik.handleChange }
                // onBlur={ formik.handleBlur }
                value={ formik.values.confirmPassword }
                required={ true }
                minLength={ 8 }
                maxLength={ 32 }
                placeholder="Confirm Password"
            />
            { formik.touched.confirmPassword && <div className="form-field-error">{ formik.errors.confirmPassword }</div> }

            <span className="loginError">{ registerError }</span>

            <button 
                type="submit" 
                className={ 
                    `form__Btn ${
                        (
                            formik.values.password.length && 
                            formik.values.email.length &&
                            formik.values.confirmPassword.length
                        ) ? 
                        'form_Btn_Active' : 'form_Btn_Disable'}` 
                }
            >Register</button>
        </form>
    )
}
