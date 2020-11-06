import React from 'react'

// Formik and Yup
import { useFormik } from 'formik'
import * as Yup from 'yup'

// React Redux
import { useDispatch, useSelector } from 'react-redux'

// Styles
import '../App.css'

// Icons
import CloseIcon from '@material-ui/icons/Close';


export default function Login({ setLogin }) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    console.log(user)

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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <div 
            className="loginModal__wrapper"
            onClick={ () => setLogin(false) }
        >
            <div className="loginBox">
                <button className="close__LoginModal" onClick={ () => setLogin(false) }>
                    <CloseIcon className="close__LoginBtn" />
                </button>
                <form 
                    className="loginForm"
                    onSubmit={ formik.handleSubmit }
                >
                    <label htmlFor="email">Email Address</label>
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.email }
                        required={ true }
                    />
                    { formik.touched.email && <div className="form-field-error">{ formik.errors.email }</div> }
                    
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.password }
                        required={ true }
                        minLength={ 8 }
                        maxLength={ 32 }
                    />
                    { formik.touched.password && <div className="form-field-error">{ formik.errors.password }</div> }
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
