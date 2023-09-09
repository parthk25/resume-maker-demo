import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import {
    Link, useHistory
} from "react-router-dom";
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Skills = () => {
    const history = useHistory()
    const [skillList, setSkillList] = useState([])
    // const [btnDisable, setBtnDisable] = useState(false)

    const deletHandler = (index) => {
        let copyData = [...skillList]
        copyData.splice(index, 1)
        setSkillList(copyData)
    }

    const getAppSkills = async () => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/skills', {
                headers: { Authorization: token }
            })
            // console.log(data.data);
            setSkillList(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            return history.push('/login')
        }
        getAppSkills()
    }, )

    return (
        <div>
            <div className='text-center f-edit'>
                <h1>Skills:-</h1>
                <Formik
                    initialValues={{
                        name: '',
                        rate: '',
                    }}
                    onSubmit={async (values, actions) => {
                        console.log(values);
                        actions.resetForm()
                    }}
                >
                    <Form>
                        <div className="form-input">
                            <div>
                                <label className='m-2' htmlFor="name">Skills Name :-</label>
                                <Field id="name" name="name" className='m-2' placeholder="Enter Your Skills name" />
                            </div>
                            <div>
                                <label className='m-2' htmlFor="rate">Skill level:-</label>
                                <Field className='ps-5 pe-5 pt-2 pb-2' name="rate" id="rate" as="select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </Field>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to='/experience' type='button' className='button'>Previous</Link>
                            <button type='submit' className='button'>Save</button>
                            <Link to='/achievements' type='button' className='button'>Next</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
            <center>
                <Table striped bordered hover>
                    <tr>
                        <th>Skill Name</th>
                        <th>Skill Level</th>
                        <th>Delete</th>
                    </tr>
                    {
                        skillList.map((el, index) => {
                            return <tr>
                                <td>{el.name}</td>
                                <td>{el.rate}</td>
                                <td><button onClick={() => deletHandler(index)}>delete</button></td>
                            </tr>
                        })
                    }
                </Table>
            </center>
        </div>
    )
}

export default Skills
