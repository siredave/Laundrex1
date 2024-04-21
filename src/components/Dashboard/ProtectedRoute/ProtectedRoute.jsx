import React, {useContext} from 'react'
import { Navigate } from "react-router-dom"
import { UserContext } from "../../Context/UserProvider"

const ProtectedRoute = ({children}) => {
    const {userEmail} = useContext(UserContext)
  return (
    <div>
      {!userEmail ? (
        <Navigate to="/login"></Navigate>
      ) : (
        { children }
      )}
    </div>
  )
}

export default ProtectedRoute
