import React, { useState } from 'react'
import imgRegester from '../images/Registration.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    username: '',
    password: '',
    conformpassword: ''
  })

  const [error, setError] = useState({
    status: false,
    type: '',
    msg: ''
})

const navigate = useNavigate();


  const handleSubmit = ((e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      address: data.get('address'),
      username: data.get('username'),
      password: data.get('password'),
      conformpassword: data.get('conformpassword'),
    }

    if (actualData.name && actualData.email && actualData.phone && actualData.address && actualData.username && actualData.password && actualData.conformpassword) {
      if (actualData.password === actualData.conformpassword) {
          axios.post("http://localhost:8000/users", values)
          .then(res => navigate('/login'))
          .catch(err => console.log(err))
      }
      else {
          setError({ status: true, msg: "Password does not match", type: "Error" })

      }
  } else {
      setError({ status: true, msg: "All fields are require", type: "Error" })
  }

  })

  return (
    <>
      <div className="card d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h2 className='text-secondary'><u>Registration From</u></h2>
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className='col-md-8 col-lg-5 col-xl-5'>
                <img src={imgRegester} alt="..." style={{ height: 200, width: 200 }} />
              </div>
              <div className='col-md-9 col-lg-7 col-xl-5 mt-3'>
                <div className='mb-3'>
                  <input type='text' name='name' onChange={e => setValues({ ...values, name: e.target.value })} className='form-control' placeholder='Enter Name' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='email' name='email' onChange={e => setValues({ ...values, email: e.target.value })} className='form-control' placeholder='Enter Email' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='text' name='phone' onChange={e => setValues({ ...values, phone: e.target.value })} className='form-control' placeholder='Enter Phone No' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='text' name='address' onChange={e => setValues({ ...values, address: e.target.value })} className='form-control' placeholder='Enter Address' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='text' name='username' onChange={e => setValues({ ...values, username: e.target.value })} className='form-control' placeholder='Enter Username' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='password' name='password' onChange={e => setValues({ ...values, password: e.target.value })} className='form-control' placeholder='Enter Password' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='password' name='conformpassword' onChange={e => setValues({ ...values, conformpassword: e.target.value })} className='form-control' placeholder='Enter Conform Password' autoComplete='off' />
                </div>
                {error.status ? <div className='mb-3 alert alert-danger'>{error.type}, {error.msg}</div> : ''}
                <div className='mb-3'>
                  <button className='btn btn-success'>Submit</button>
                  <Link to='/login' className='ms-5'>Click here to login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
