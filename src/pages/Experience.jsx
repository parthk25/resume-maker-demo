import React, {useState} from 'react'
import { Formik, Field, Form } from 'formik';
import {
    Link
} from "react-router-dom";
import { Table } from 'react-bootstrap';

const Experience = () => {
    const [data, setData] = useState([ ])
    const deletHandler = (index) => {
        let copyData = [...data]
        copyData.splice(index, 1)
        setData(copyData)
    }

    return (
        <div>
            <div className='text-center f-edit'>
                <h1>Work Experience:-</h1>
                <Formik
                    initialValues={{
                        companyName: '',
                        title: '',
                        startDate: '',
                        endDate: '',
                        description: '',
                    }}
                    onSubmit={async (values) => {
                        console.log(JSON.stringify(values, null, 2));
                        let copyArr = [...data]
                        copyArr.push(values)
                        setData(copyArr)
                    }}
                >
                    <Form>
                        <div className="form-input">
                            <div>
                                <label className='m-2' htmlFor="companyName">Company Name :-</label>
                                <Field id="companyName" name="companyName" className='m-2' placeholder="Enter Your company name" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="title">Job Title:-</label>
                                <Field id="title" name="title" className='m-2' placeholder="Enter Your job title" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="startDate">Start Date :-</label>
                                <Field id="startDate" name="startDate" className='m-2' placeholder="Start Date" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="endDate">End Date :-</label>
                                <Field id="endDate" name="endDate" className='m-2' placeholder="end date" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="description">description :-</label>
                                <Field id="description" name="description" className='m-2' placeholder="description" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to='/educational' type='button' className='button'>Previous</Link>
                            <button type='submit' className='button'>Save</button>
                            <Link to='/skills' type='button' className='button'>Next</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
            <center>
                <Table striped bordered hover>
                    <tr>
                        <th>Company name</th>
                        <th>Job Title</th>
                        <th>Start date</th>
                        <th>End Date</th>
                        <th>description</th>
                        <th>Delete</th>
                    </tr>
                    {
                     data.map((el, index) => {
                        return <tr>
                            <td>{el.companyName}</td>
                            <td>{el.title}</td>
                            <td>{el.startDate}</td>
                            <td>{el.endDate}</td>
                            <td>{el.description}</td>
                            <td><button onClick={() => deletHandler(index)}>delete</button></td>
                        </tr>
                    })   
                    }
                </Table>
            </center>
        </div>
    )
}

export default Experience
