import { createContext, useState } from "react";
import { MenItems } from "../Dashboard/Menwear/items";
import { OthersItems } from "../Dashboard/Others/items";
import { WomenItems } from "../Dashboard/Womenwear/items";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null)
  const [userName, setUserName] = useState(null)


  const LoginEmail =(email) =>{
    setUserEmail(email)
  }
  const LoginName = (name) =>{
    setUserName(name)
  }

  const [formFields, setFormFields] = useState({
    HomeAddress: '',
    PhoneNumber: '',
    date:'',
    time: ''

  })

  const updateFormData = (event) => {
    setFormFields({
    ...formFields,
      [event.target.name]: event.target.value
    })
  }

  const [menItems, setMenItems] = useState(MenItems);
  const calculateMenTotalPrice = () => {
    const totalPrice = menItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return `₦${totalPrice.toFixed(2)}`;
  };

  

  const [womenItems, setWomenItems] = useState(WomenItems);
  const calculateWomenTotalPrice = () => {
    const totalPrice = womenItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return `₦${totalPrice.toFixed(2)}`;
  };

 

  const [otherItems, setOtherItems] = useState(OthersItems);

  const calculateOtherTotalPrice = () => {
    const totalPrice = otherItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return `₦${totalPrice.toFixed(2)}`;
  };

  const TotalPrice = () => {
    const menPrice = parseFloat(calculateMenTotalPrice().replace('₦', ''));
    const womenPrice = parseFloat(calculateWomenTotalPrice().replace('₦', ''));
    const otherPrice = parseFloat(calculateOtherTotalPrice().replace('₦', ''));
    
    const totalPrice = menPrice + womenPrice + otherPrice;
    
    return `${totalPrice.toFixed(2)}`;
};


  const value = {
    menItems, 
    setMenItems,
    womenItems, 
    setWomenItems,
    otherItems, 
    setOtherItems,
    calculateMenTotalPrice,
    calculateWomenTotalPrice,
    calculateOtherTotalPrice,
    formFields,
    setFormFields,
    updateFormData,
    TotalPrice,
    userEmail, 
    setUserEmail,
    userName, 
    setUserName,
    LoginEmail,
    LoginName
  };

  return (
    <UserContext.Provider
    value={value}
    >
    {children}
    </UserContext.Provider>
  );
};





























// import React, {useContext, useState, useEffect} from 'react'
// import { createContext } from "react";

// export const AuthContext = createContext()

// export const useAuth = () => {
//   return  useContext(AuthContext);
// }

// const AuthProvider = ({children}) => {
//     const [userEmail, setUserEmail] = useState(null)
//     const [userName, setUserName] = useState(null)
//     // const [userName, setUserName] = useState(null)
//     const [isloggedIn, setIsloggedIn] = useState(false)

//     const LoginEmail =(email) =>{
//       setUserEmail(email)
//     }
//     const LoginName = (name) =>{
//       setUserName(name)
//     }

//     const value = {
//         userEmail,
//         setUserEmail,
//         userName,
//         setUserName,
//         isloggedIn,
//         setIsloggedIn,
//         LoginEmail,
//         LoginName
//     }

//     // const Logout = () => {
//     //   setUserEmail(null)
//     //   setUserName(null)
//     //   setIsloggedIn(false)
//     // }
//   return (
//     <>
//       <AuthContext.Provider value={value}>
//         {children}
//       </AuthContext.Provider>
//     </>
//   )
// }

// export default AuthProvider






// value={{
//   laundryItems,
//   setLaundryItems,
//   calculateTotalPrice,
//   pickupDate,
//   setPickupDate,
//   pickupTime,
//   setPickupTime,
//   laundryItems2,
//   setLaundryItems2,
//   calculateTotalPrice2,
//   pickupDate2,
//   setPickupDate2,
//   pickupTime2,
//   setPickupTime2,
//   laundryItems3,
//   setLaundryItems3,
//   calculateTotalPrice3,
//   pickupDate3,
//   setPickupDate3,
//   pickupTime3,
//   setPickupTime3,
// }}