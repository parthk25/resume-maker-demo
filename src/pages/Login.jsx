import React from 'react'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory()
    const loginHandler = async (data) => {
        try {
            const logindata = await axios.post('https://portfolio-api-new.onrender.com/api/v1/user/login', data)
            // console.log(logindata.data.token);
            localStorage.setItem('token', logindata.data.token)
            history.push('/personal')
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
        <div className='login text-center '>
            <h1 className='text-center'>Log in</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    // console.log(values);
                    loginHandler(values)
                }}
            >
                <Form>
                    <div className="form-input text-center">
                        <div>
                            <label htmlFor="email" className='m-2'>Email</label>
                            <Field type="email" name="email" className='m-2' placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="password" className='m-2'>Password</label>
                            <Field type="password" name="password" className='m-2' placeholder="Password" />
                        </div>
                    </div>
                    <p className="text-center forget">
                        <Link to="">Forgot Password?</Link>
                    </p>
                    <div className="text-center btn">
                        <button type='Submit'>Login</button> 
                    </div>
                    <div className="text-center forget1">
                        <p>
                            Don't have an account?
                            <Link to="/signup" className="forget" target="_blank">
                                signup
                            </Link>
                        </p>
                    </div>
                    <div className="or text-center">
                        <h4>or</h4>
                    </div>
                    <div className="text-center">
                        <div className="with1 icon">
                            <Link to="" className="with">
                                <i className="fa-brands fa-facebook" />
                                Login with facebook
                            </Link>
                        </div>
                        <br />
                        <div className="with2 icon2">
                            <Link to="" className="with">
                                <i className="fa-brands fa-google" />
                                Login with google
                            </Link>
                        </div>
                    </div>
                </Form>

            </Formik>
        </div>
    )
}

export default Login
