import { useState } from 'react';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
name: '',
address: '',
email: '',
age: ''
}


const AddUser = () => {
const [user, setUser] = useState(initialValue);
const { name, address, email, age } = user;

let navigate = useNavigate();

const onValueChange = (e) => {
setUser({...user, [e.target.name]: e.target.value})
}

const addUserDetails = async() => {
await addUser(user);
navigate('/all');
}

return (
<div className=' text-box container'>
    
<h1 className=' my-4  text-center' >  Add User</h1>
   
    
    <div  className="mb-3">
                <label for="name" class="form-label">Name</label>
                    <input className="form-control rounded-pill" onChange={(e)=> onValueChange(e)} name='name' value={name} />
    </div>
    <div className="mb-3">
                <label for="name" class="form-label">Address</label>
                    <input className="form-control rounded-pill" onChange={(e)=> onValueChange(e)} name='address' value={address}address  />
    </div>
    <div className="mb-3">    
                <label for="name" class="form-label">Email</label>
                <input className="form-control rounded-pill" onChange={(e)=> onValueChange(e)} name='email' value={email} />
    </div>
    <div className="mb-3">
                <label  for="age" class="form-label">Age</label>
                    <input className="form-control rounded-pill" onChange={(e)=> onValueChange(e)} name='age' value={age}  />
    </div>
    <div className="mb-3">
                <button className='btn btn-primary' onClick={()=> addUserDetails()}>Add User</button> <br></br>
               <a className="btn btn-sm my-4 btn-secondary" href="/">Home</a>
    </div>
 
</div>
)
}

export default AddUser;