import React from 'react'
import { Formik, Field, Form } from 'formik';
import {
    Link
} from "react-router-dom";

const Signup = () => {
    return (
        <>
            <div className='login text-center'>
                <h1 className='text-center'>Sign Up</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    onSubmit={async (values) => {
                        console.log(values);
                    }}
                >
                    <Form>

                        <div className="form-input text-center">
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />     
                            </div>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <Field type="firstName" name="firstName"  />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <Field type="lastName" name="lastName"  />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password"  />
                            </div>
                            <div>
                                <label htmlFor="password">Confirm Password</label>
                                <Field type="password" name="confirmpassword"  />
                            </div>
                        </div>
                        <div className="text-center btn">
                            <button type="submit">Signup</button>
                        </div>
                        <div className="text-center forget1">
                            <p>
                                Already have an account?
                                <Link to="/login" className="forget text-center">
                                    Login
                                </Link>
                            </p>
                        </div>
                        <div className="or text-center">
                            <h4>or</h4>
                        </div>
                        <div className="text-center">
                            <div className="with1 icon2">
                                <Link to="https://www.facebook.com/login" className="with">
                                    <i className="fa-brands fa-facebook" />
                                    Login with facebook
                                </Link>
                            </div>
                            <br />
                            <div className="with2 icon">
                                <Link to="" className="with">
                                    <i className="fa-brands fa-google" />
                                    Login with google
                                </Link>
                            </div>
                        </div>


                    </Form>

                </Formik>
            </div>
        </>
    )
}

export default Signup
