import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import SignUp from './pages/sign-up/SignUp'
import Users from './pages/users/Users'
import CreateProduct from './pages/createproduct/CreateProduct'
import MasageProduct from './pages/masageproduct/MasageProduct'
import page404 from './images/page404.jpg'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/createproduct' element={<CreateProduct />} />
        <Route path='/masageproduct' element={<MasageProduct />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<img className='page404' src={page404} alt="" />} />
      </Routes>

    </>
  )
}

export default App
