import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import axiosClient from '../../utilities/axios';

const User = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axiosClient.get('/admin/v1/users')
            .then(({ data }) => {
                setUsers(data)
            })
            .catch(console.log)
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className='m-5'>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length && users.map(({ firstName, lastName, username, role, phone, email }, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>@{username}</td>
                                    <td>{role.join(', ')}</td>
                                    <td>{phone}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button className=''><AiFillDelete /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default User;