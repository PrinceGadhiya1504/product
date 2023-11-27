import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ReadProduct = () => {

  const [data, setData] = useState([])
  const location = useLocation();
  const id = location.state;
    
  useEffect(() => {
      axios.get('http://localhost:8000/products/' +   id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h3>Details of Users</h3>
      <div className='mb-2'>
        <strong>Name : </strong>{data.name}
      </div>
      <div className='mb-2'>
        <strong>Description : </strong>{data.description}
      </div>
      <div className='mb-2'>
        <strong>Category : </strong>{data.category}
      </div>
      <div className='mb-2'>
        <strong>Price : </strong>{data.price}
      </div>
      <div className='mb-2'>
        <strong>Stock : </strong>{data.stock}
      </div>
      {/* <Link to={`/update/${id}`} className='btn btn-success me-2'>Edit</Link> */}
      <Link to="/home" className='btn btn-primary'>Back</Link>
    </div>
  </div>
  )
}

export default ReadProduct
