import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState({});

  const getUserData = (e) => {
    setUsers((prevUsers) => ({
      ...prevUsers,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate('/read');
  };

  return (
    <div>
      <h2 className="my-2">Fill the Data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEamil1">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAge1">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            id="exampleRadios1"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            id="exampleRadios2"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
