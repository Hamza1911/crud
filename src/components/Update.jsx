import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateUser } from '../redux/UserSlice'

const Update = () => {
    const { id } = useParams()
    const [updateData, setUpdateData] = useState()
    const dispatch =useDispatch()
    const navigate =useNavigate()

    const { users, loading } = useSelector((state) => state.app)
    useEffect(() => {
        if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0]);
        }
    }, [])
   const NewData =(e)=>{
    setUpdateData({...updateData ,[e.target.name] : e.target.value})
   } 
   const handleUdpate=(e)=>{
    e.preventDefault()
    dispatch(UpdateUser(updateData));
    navigate("/read")

   }
    return (
        <div>
            <h2 className="my-2">Fill the Data</h2>
            <form className="w-50 mx-auto my-5" onSubmit={handleUdpate}
            >
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input
                        type="name"
                        name="name"
                        className="form-control"
                        value={updateData && updateData.name}
                        onChange={NewData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEamil1">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={updateData && updateData.email}
                        onChange={NewData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAge1">Age</label>
                    <input
                        type="number"
                        name="age"
                        className="form-control"
                        value={updateData && updateData.age}
                        onChange={NewData}
                    />
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        id="exampleRadios1"
                        checked={updateData && updateData.gender === "Male"}
                        onChange={NewData}
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
                        checked={updateData && updateData.gender === "Female"}
                        onChange={NewData}
                    />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Female
                    </label>
                </div>

                <button type="submit" className="btn btn-primary0 " >
                Update Data 
                </button>
            </form>
        </div>
    )
}

export default Update

