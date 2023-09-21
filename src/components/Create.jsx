import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { createUser } from '../redux/UserSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate =useNavigate()
    const dispatch=useDispatch()
    const [users, setUsers] = useState({})
    const getUserData = (e) => {
        setUsers({
            ...users, [e.target.name]: e.target.value

        })
        console.log(users);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(users))
        navigate("/read")

    }
    return (
        <div>
            <h2 className='my-2'>Fil the Data</h2>
            <form className='w-50 mx-auto my-5'onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input type="name" name="name" class="form-control" onChange={getUserData} />
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputEamil1">Email</label>
                    <input type="email" name="email" class="form-control" onChange={getUserData} />
                </div>
                <div class="form-group">
                    <label for="exampleInputAge1">Age</label>
                    <input type="numeric" name="age" class="form-control" onChange={getUserData} />
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="gender" value="Male" type="radio" id="exampleRadios1"  onChange={getUserData}  />
                    <label class="form-check-label" for="exampleRadios1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="gender" value="Female" type="radio" id="exampleRadios2" onChange={getUserData} />
                    <label class="form-check-label" for="exampleRadios2">
                        Female
                    </label>
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create