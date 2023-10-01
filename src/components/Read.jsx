import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { showUser } from '../redux/UserSlice'
import CustomModal from './CustomModal'
import { deleteUser } from '../redux/UserSlice'
import { Link } from 'react-router-dom'

const Read = () => {
  const { users, loading, searchData } = useSelector((state) => state.app)
  const [id, setId] = useState()
  const [radioData ,setRadioData] =useState("")
  const [showPopup, setShowPopup] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showUser());

  }, [])
  if (loading) {
    return (<h2>Loading.....</h2>)
  }
  return (
    <div>
<<<<<<< HEAD
      {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
      <h2>All Data</h2>
      <input className="form-check-input"  name="gender" checked={ radioData === ""} onChange={(e)=>setRadioData("")} type="radio" />
      <label className="form-check-label" >  All </label>
      <input className="form-check-input" name="gender"  value="Male" type="radio" checked={radioData ==="Male"}
      onChange={(e)=>setRadioData(e.target.value)}
      />
      <label className="form-check-label" > Male </label>
      <input
        className="form-check-input"
        name="gender"
        value="Female"
        type="radio"
        checked={radioData=== "Female"}
        onChange={(e)=>setRadioData(e.target.value)}


      />
      <label className="form-check-label">
        Female
      </label>


      {users &&
        users.filter((ele) => {
          if (searchData.length === 0) {
            return ele
          } else {
            return ele.name.toLowerCase().includes(searchData.toLowerCase())
          }
        }).filter((ele)=>{
          if(radioData ==="Male"){
            return ele.gender === radioData
          } else if(radioData ==="Female"){
            return ele.gender === radioData
          }else return ele
        })
          .map((ele) => (
            <div key={ele.id} className="card w-50 mx-auto my-2"  >
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className='card-text'>{ele.email}</h6>
                <p className="card-text">{ele.gender}</p>
                <a href="#" className="btn btn-primary mx-auto" onClick={() => [setId(ele.id), setShowPopup(true)]}>View</a>
                <Link to={`/edit/${ele.id}`} className="btn btn-primary mx-auto">Edit</Link>
                <Link onClick={() => dispatch(deleteUser(ele.id))} className="btn btn-primary mx-auto">Delete</Link>
              </div>
            </div>
          ))}
=======
        <h2>All Data</h2>
        <div>
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
>>>>>>> 1469e41eb91820741ef311f6416014837b2dd75a
    </div>
  )
}

export default Read