import React, {useContext,useEffect} from 'react'
import axios from "axios";
import { Navigate } from "react-router-dom"
import { UserContext } from "../../Context/UserProvider"
import { API_URI } from '../../../Apis/Api'

const ProtectedRoute = ({children}) => {
    const {authUser,setAuthUser} = useContext(UserContext)
    const token = localStorage.getItem('token')
    console.log(authUser,'from protected')
    useEffect(()=>{
      if(token){
        axios.get(`${API_URI}/users`, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        .then(function(response){
           console.log(response)
           setAuthUser(response.data)
          console.log(authUser);
        })
        .catch(function(error){
           console.log(error)
        })
        return
      }
      setAuthUser('')
    },[])

  return (
    <div>
      {!authUser? (
        <Navigate to="/login"></Navigate>
      ) : (
        <>{ children }</>
      )}
    </div>
  )
}

export default ProtectedRoute
