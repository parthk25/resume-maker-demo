import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Personal = () => {

    const history = useHistory()
    const [btnDisable, setBtnDisable] = useState(false)
    
    const getAppPersonal = async () => {
        try {
            const token = localStorage.getItem('token')
            const { data } = await axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/personaldetails', {
                headers: { Authorization: token }
            })
            console.log(data.data);
        } catch (err) {
            console.log(err)
        }
    }

    const addHandler = async (values) => {
        try {
            setBtnDisable(true)
            const token = localStorage.getItem('token')
            await axios.post('https://portfolio-api-new.onrender.com/api/v1/resume/personaldetails', values, {
                headers: { Authorization: token }
            })
            getAppPersonal()
            setBtnDisable(false)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAppPersonal();
        const token = localStorage.getItem('token')
        if (!token) {
            return history.push('/login')
        }
    },)

    return (
        <div>
            <div className='text-center f-edit'>
                <h1>Personal Details:-</h1>
                <Formik
                    initialValues={{
                        userProfileImage: '',
                        mobileNumber: '',
                        dob: '',
                        gender: '',
                        address: '',
                        pincode: '',
                    }}
                    onSubmit={async (values, actions) => {
                        console.log(values);
                        addHandler(values)
                        actions.resetForm()
                    }}
                >
                    <Form>
                        <div className="form-input">
                            <div className='d_flex'>
                                <label className='m-2' htmlFor="userProfileImage">Profile Image :-</label>
                                <Field id="userProfileImage" name="userProfileImage" className='m-2' type="file" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="mobileNumber">Mobile Number :-</label>
                                <Field id="mobileNumber" name="mobileNumber" className='m-2' type="number" placeholder="Enter Your mobileNumber" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="dob">Dob :-</label>
                                <Field id="dob" name="dob" className='m-2' type="date" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="gender">Gender :-</label>
                                <label>
                                    <Field type="radio" name="gender" value="Male" />Male
                                </label>
                                <label>
                                    <Field type="radio" name="gender" value="Female" />Female
                                </label>
                            </div>
                            <div>
                                <label className='m-2' htmlFor="address">Address :-</label>
                                <Field id="address" name="address" className='m-2' placeholder="address" />
                            </div>

                            <div>
                                <label className='m-2' htmlFor="pincode">Pin code :-</label>
                                <Field id="pincode" name="pincode" className='m-2' placeholder="pincode" />
                            </div>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <button disabled={btnDisable} type='submit' className='button'>Save</button>
                            <Link to='/professional' type='button' className='button'>Next</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Personal
