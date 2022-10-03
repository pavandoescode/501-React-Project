import AllUsers from './Component/Home';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   
      <div className='container' >
      <Routes>
        <Route path="/" element={<AllUsers /> } />
        <Route path="/all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        
      </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
