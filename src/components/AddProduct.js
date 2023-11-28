import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    stock: 'inStock',
    // gender: '',
    // language: [],
  });

  const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  // const [checked, setChecked] = useState([]);
  // function handleChange(e) {
  //   if (e.target.checked) {
  //     setChecked([...checked, e.target.value]);
  //   } else {
  //     setChecked(checked.filter((item) => item !== e.target.value));
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const actualData = {
      name: data.get('name'),
      description: data.get('description'),
      category: data.get('category'),
      price: data.get('price'),
      stock: data.get('stock'),
      // gender : data.get('gender'),
      // language: data.get('language'),
    };

    if (actualData.name && actualData.description && actualData.category && actualData.price && actualData.stock) {
      axios.post('http://localhost:8000/products', values)
        .then(res => {
          console.log(res);
          navigate('/home');
        })
        .catch(err => console.log(err))
    } else {
      setError({ status: true, msg: "All fields are require", type: "Error" })
    }
  };

  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
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
            <label htmlFor='username'>stock : </label>
            <select name='stock' onChange={e => setValues({...values, stock: e.target.value})}>
              <option value='inStock'>In Stock</option>
              <option value='outStock'>Out Stock</option>
            </select>
          </div>

            {/* <div className='mb-3'>
            <label htmlFor='username'>Gender : </label>
            <input type='radio' value='Male' name='gender' onChange={e => setValues({...values, select: e.target.checked})} />Male
            <input type='radio' value='Female' name='gender' onChange={e => setValues({...values, select: e.target.checked})} />Female
          </div> */}

            {/* <div className='mb-3'>
          <label htmlFor='username'>Language : </label>&nbsp;&nbsp;&nbsp;
            <input value = "Javascript" type = "checkbox" onChange = {handleChange} />
            <span> Javascript </span>
         
            <input value = "Python" type = "checkbox" onChange = {handleChange} />
            <span> Python </span>
         
            <input value = "Java" type = "checkbox" onChange = {handleChange} />
            <span> Java </span>
          </div> */}

            {error.status ? (
              <div className="mb-3 alert alert-danger">
                {error.type}, {error.msg}
              </div>
            ) : (
              ""
            )}
            <button className="btn btn-success">Submit</button>
            <Link to="/home" className="btn btn-primary ms-3">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
