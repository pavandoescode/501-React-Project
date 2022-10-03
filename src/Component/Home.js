import react, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../Service/api';




const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (

        <>
        <h1 className=' my-4 text-center' >  CRUD in React</h1>
        <table className=" table-hover table-striped table">
            <thead>
                <tr>
                    <th class="table-primary" scope="col" >Id</th>
                    <th class="table-primary" scope="col">Age</th>
                    <th class="table-primary" scope="col">Name</th>
                    <th class="table-primary" scope="col">Email</th>
                    <th class="table-primary" scope="col">Address</th>
                    <th class="table-primary" ></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr scope="row" key={user.id}>
                        <th >{user._id}</th> 
                        <th >{user.age}</th>
                        <th >{user.name}</th>
                        <th >{user.email}</th>
                        <th >{user.address}</th>
                        <th >
                            <a className='btn mx-2 btn-sm btn-warning' href={`/edit/${user._id}`}>Edit</a>| 
                            <button className='btn mx-2 btn-sm btn-danger' onClick={() => deleteUserData(user._id)}>Delete</button> 
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
                                <center>
                                                <a id='homBtn' href='add' className="btn my-3 btn-success">Add New Data</a>
                                 </center>
        </>
    )
}

export default AllUsers;