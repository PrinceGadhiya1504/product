import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {

    
  const [values, setValues] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    stock: '',
  })

  const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const actualData = {
      name: data.get('name'),
      description: data.get('description'),
      category: data.get('category'),
      price: data.get('price'),
      stock: data.get('stock'),
    }

    if (actualData.password === actualData.conformpassword) {
      axios.post('http://localhost:8000/products', values)
        .then(res => {
          console.log(res);
          navigate('/home');
        })
        .catch(err => console.log(err))
    } else {
      setError({ status: true, msg: "All fields are require", type: "Error" })
    }
  }

  return (
    <div>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>Name : </label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' autoComplete='off' onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Description : </label>
            <input type='text' name='description' className='form-control' placeholder='Enter Description' autoComplete='off' onChange={e => setValues({ ...values, description: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone'>category : </label>
            <input type='text' name='category' className='form-control' placeholder='Enter Category' autoComplete='off' onChange={e => setValues({ ...values, category: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label htmlFor='website'>Price : </label>
            <input type='text' name='price' className='form-control' placeholder='Enter Price' autoComplete='off' onChange={e => setValues({ ...values, price: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label htmlFor='username'>Stock : </label>
            <input type='text' name='stock' className='form-control' placeholder='Enter Stock' autoComplete='off' onChange={e => setValues({ ...values, stock: e.target.value })} />
          </div>
            {error.status ? <div className='mb-3 alert alert-danger'>{error.type}, {error.msg}</div> : ''}
          <button className='btn btn-success'>Submit</button>
          <Link to="/home" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default AddProduct
