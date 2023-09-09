import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import {
    Link, useHistory
} from "react-router-dom";
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Educational = () => {

    const history = useHistory()

    const [EducationList, setEducationList] = useState([ ])

    const getAppEducation = async () => {
        try {
            const token = localStorage.getItem('token')
            const { data } =await axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/educationsdetails', {
                headers: { Authorization: token }
            })
            // console.log(data.data);
            setEducationList(data.data)
        } catch (err) {
            
        }
    }

    useEffect(() => {
        getAppEducation()
        const token = localStorage.getItem('token')
        if (!token) {
            return history.push('/login')
        }
    }, )


    const deletHandler = (index) => {
        let copyData = [...EducationList]
        copyData.splice(index, 1)
        setEducationList(copyData)
    }
    
    return (
        <>
            <div className='text-center f-edit'>
                <h1>Educational Details:-</h1>
                <Formik
                    initialValues={{
                        degree: '',
                        school: '',
                        grade: '',
                        year: '',
                    }}
                    onSubmit={async (values) => {
                        console.log(values);
                        let copyArr = [...EducationList]
                        copyArr.push(values)
                        setEducationList(copyArr)
                    }}
                >
                    <Form>
                        <div className="form-input">
                            <div>
                                <label className='m-2' htmlFor="degree  ">degrees / Degree :-</label>
                                <Field id="degree" name="degree" className='m-2' placeholder="Enter Your degree s" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="school">School / University:-</label>
                                <Field id="school" name="school" className='m-2' placeholder="Enter Your school" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="grade">Grade / Score :-</label>
                                <Field id="grade" name="grade" className='m-2' placeholder="Grade" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="year">Year :-</label>
                                <Field id="year" name="year" className='m-2' placeholder="year" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to='/professional' type='button' className='button'>Previous</Link>
                            <button type='submit' className='button'>Save</button>
                            <Link to='/experience' type='button' className='button'>Next</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
            <center>
                <Table striped bordered hover>
                    <tr>
                        <th>degree  </th>
                        <th>school</th>
                        <th>grade</th>
                        <th>year</th>
                        <th>delete</th>
                    </tr>
                    {
                        EducationList.map((el, index) => {
                            return <tr>
                                <td>{el.degree}</td>
                                <td>{el.school}</td>
                                <td>{el.grade}</td>
                                <td>{el.year}</td>
                                <td><button onClick={() => deletHandler(index)}>delete</button></td>

                            </tr>
                        })
                    }
                </Table>
            </center>
        </>
    )
}

export default Educational
