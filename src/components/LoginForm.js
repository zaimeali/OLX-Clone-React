import React from 'react'

// Formik and Yup
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Styling
import '../App.css'


export default function LoginForm() {

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
        <form 
            className="loginForm"
            onSubmit={ formik.handleSubmit }
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

            <button 
                disabled={formik.isValid} 
                type="submit" 
                className={ 
                    `form__Btn ${
                        (formik.values.password.length && formik.values.email.length) ? 
                            'form_Btn_Active' : 'form_Btn_Disable'}` 
                }
            >Sign in</button>
        </form>
    )
}
