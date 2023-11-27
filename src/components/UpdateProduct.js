import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const location  = useLocation();
  const id = location.state;

  const [values, setValues] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8000/products/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="form-control"
              placeholder="Enter Name"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Description : </label>
            <input
              type="text"
              name="description"
              value={values.description}
              onChange={(e) => setValues({ ...values, description: e.target.value })}
              className="form-control"
              placeholder="Enter Description"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Category : </label>
            <input
              type="text"
              name="category"
              value={values.category}
              onChange={(e) => setValues({ ...values, category: e.target.value })}
              className="form-control"
              placeholder="Enter Category"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website">Price : </label>
            <input
              type="text"
              name="price"
              value={values.price}
              onChange={(e) =>
                setValues({ ...values, price: e.target.value })
              }
              className="form-control"
              placeholder="Enter Price"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">Stock : </label>
            <input
              type="text"
              name="stock"
              value={values.stock}
              onChange={(e) =>
                setValues({ ...values, stock: e.target.value })
              }
              className="form-control"
              placeholder="Enter Stock"
              autoComplete="off"
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/home" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
