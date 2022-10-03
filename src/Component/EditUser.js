import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    address: '',
    email: '',
    age: ''
}



const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, address, email, age } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
        <div className='text-box container'>
            

            <h1 className=' my-4  text-center' >  Edit User </h1>

            <div className="mb-3" >
            <label for="name" class="form-label">Name</label>
                <input className="form-control rounded-pill" onChange={(e) => onValueChange(e)} name='name' value={name}  />
            </div>
            <div className="mb-3"  >
            <label for="address" class="form-label">Address</label>
                <input className="form-control rounded-pill" onChange={(e) => onValueChange(e)} name='address' value={address}  />
            </div>
            <div className="mb-3" >
            <label for="email" class="form-label">Email</label>
                <input className="form-control rounded-pill" onChange={(e) => onValueChange(e)} name='email' value={email}  />
            </div>
            <div className="mb-3" >
            <label for="age" class="form-label">Age</label>
                <input className="form-control rounded-pill" onChange={(e) => onValueChange(e)} name='age' value={age}  />
            </div>
            <div className="mb-3" >
                <button className='btn btn-primary' onClick={() => editUserDetails()}>Edit User</button><br></br>
                          <a className="btn btn-sm my-3 btn-secondary" href="/">Home</a>
            </div>
        </div>




        

        </>
    )
}

export default EditUser;