import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const id = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users/' + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of Users</h3>
        
        <div className="mb-2">
          <strong>Name : </strong>
          {data.name}
        </div>
        <div className="mb-2">
          <strong>Email : </strong>
          {data.email}
        </div>
        <div className="mb-2">
          <strong>Phone : </strong>
          {data.phone}
        </div>
        <div className="mb-2">
          <strong>Address : </strong>
          {data.address}
        </div>
        <div className="mb-2">
          <strong>Username : </strong>
          {data.username}
        </div>
        <div className="mb-2">
          <strong>Password : </strong>
          {data.password}
        </div>
        <Link to="/home" className='btn btn-primary'>Back</Link>
      </div>
    </div>
  );
};

export default Profile;
