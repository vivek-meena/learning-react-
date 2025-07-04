import React from 'react'
import { useNavigate } from 'react-router-dom'


const Aboutpage=()=>{
  const navigate=useNavigate();

  function handleClick(){
    navigate('/dashboard')
  }



  return (
    <div>Aboutpage
      <button onClick={handleClick}>
        Move to Dashboard

      </button>
    </div>
  )
}

export default Aboutpage