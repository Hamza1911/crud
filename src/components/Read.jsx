import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { showUser } from '../redux/UserSlice'
import CustomModal from './CustomModal'
import { deleteUser } from '../redux/UserSlice'
import { Link } from 'react-router-dom'

const Read = () => {
  const {users ,loading}=useSelector((state)=>state.app)
  const [id,setId]=useState()
  const [showPopup,setShowPopup] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showUser());

  }, [])
  if(loading){
    return(<h2>Loading.....</h2>)
  }
  return (
    <div>
  {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
       <h2>All Data</h2>
      {users &&
       users.map((ele)=>( 
      <div key={ele.id} className="card w-50 mx-auto my-2"  >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ele.name}</h5>
          <h6 className='card-text'>{ele.email}</h6>
          <p className="card-text">{ele.gender}</p>
          <a href="#" className="btn btn-primary mx-auto" onClick={()=>[setId(ele.id),setShowPopup(true)]}>View</a>
          <a href="#" className="btn btn-primary mx-auto">Edit</a>
          <Link onClick={()=>dispatch(deleteUser(ele.id))}  className="btn btn-primary mx-auto">Delete</Link>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Read