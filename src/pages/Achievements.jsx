import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import {
    Link
} from "react-router-dom";
import { Table } from 'react-bootstrap';

const Achievements = () => {
    const [data, setData] = useState([ ])
    const deletHandler = (index) => {
        let copyData = [...data]
        copyData.splice(index, 1)
        setData(copyData)
    }

    return (
        <div>
            <div className='text-center f-edit'>
                <h1>Achievements:-</h1>
                <Formik
                    initialValues={{
                        title: '',
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
                                <label className='m-2' htmlFor="title">Title :-</label>
                                <Field id="title" name="title" className='m-2' placeholder="Enter Your Title" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="description">Description:-</label>
                                <Field id="description" name="description" className='m-2' placeholder="Enter Your Description" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to='/skills' type='button' className='button'>Previous</Link>
                            <button type='submit' className='button'>Save</button>
                            <Link to='/projects' type='button' className='button'>Next</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
            <center>
                <Table striped bordered hover>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>delete</th>
                    </tr>
                    {
                     data.map((el, index) => {
                        return <tr>
                            <td>{el.title}</td>
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

export default Achievements
