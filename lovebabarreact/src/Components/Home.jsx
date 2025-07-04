import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home=()=>{
  const navigate=useNavigate();

  function handleClick(){
    navigate('/aboutpage')
  }




  return (
    <div>Home
      <button onClick={handleClick}>
        move to about page
      </button>
    </div>
  )
}

export default Home