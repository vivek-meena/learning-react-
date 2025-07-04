import React from "react";
import UserContext from "./UserContext";
import { Children } from "react";
import { useState } from "react";


const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)

return(
    <UserContext.Provider value={user,useState}>
        {children}
    </UserContext.Provider>
)

}
export default  UserContextProvider

