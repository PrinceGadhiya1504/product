import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import AddProduct from "./components/AddProduct";
import ReadProduct from "./components/ReadProduct";
import UpdateProduct from "./components/UpdateProduct";
import Add from "./components/Add";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/addProduct' element={<AddProduct />}/>
      <Route path='/readProduct' element={<ReadProduct />}/>
      <Route path='/updateProduct' element={<UpdateProduct />}/>
      <Route path='/add' element={<Add />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
