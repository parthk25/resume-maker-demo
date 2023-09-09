import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import {
  Link, useHistory
} from "react-router-dom";
import axios from 'axios';

const Professional = () => {

  const history = useHistory()

  const [btnDisable, setBtnDisable] = useState(false)

  const getAppProfesson = async () => {
    try {
      const token = localStorage.getItem('token')
      const {data} = await axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/professionaldetails',{
        headers: {Authorization: token}
      })
      console.log(data.data);
    } catch (err) {
      
    }
  }

  useEffect(()=>{
    getAppProfesson()
    const token = localStorage.getItem('token')
        if (!token) {
            return history.push('/login')
        }
  },)

  const addHandler = async (values) => {
    try {
        setBtnDisable(true)
        const token = localStorage.getItem('token')
        await axios.post('https://portfolio-api-new.onrender.com/api/v1/resume/professionaldetails', values, {
            headers: { Authorization: token }
        })
        getAppProfesson()
        setBtnDisable(false)
    } catch (err) {
        console.log(err);
    }
}

  return (
    <div className='text-center f-edit'>
      <h1>Professional Details:-</h1>
      <Formik
        initialValues={{
          Profession: '',
          Qualification: '',
          Language: '',
          Experience: '',
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          addHandler(values)
          actions.resetForm()
        }}
      >
        <Form>
          <div className="form-input">
            <div>
              <label className='m-2' htmlFor="Profession">Profession :-</label>
              <Field id="Profession" name="Profession" className='m-2' placeholder="Enter Your Profession" />
            </div>
            <div>
              <label className='m-2' htmlFor="Qualification">Qualification :-</label>
              <Field id="Qualification" name="Qualification" className='m-2' placeholder="Enter Your Qualification" />
            </div>
            <div>
              <label className='m-2' htmlFor="Language">Language :-</label>
              <Field id="Language" name="Language" className='m-2' placeholder="Language you speak" />
            </div>
            <div>
              <label className='m-2' htmlFor="Experience">Experience :-</label>
              <Field id="Experience" name="Experience" className='m-2' placeholder="Experience" />
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <Link to='/personal' type='button' className='button'>Previous</Link>
            <button disabled={btnDisable} type='submit' className='button'>Save</button>
            <Link to='/educational' type='button' className='button'>Next</Link>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Professional;
