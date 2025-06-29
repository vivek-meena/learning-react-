import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)//hook hai ye ek



  //let counter=5
  const addVlue=()=>{
    console.log("clicked",counter);
    counter=counter+1;
    setCounter(counter);
  }

  const removeValue=()=>{
    console.log("clicked",counter);
    counter=counter-1;
    setCounter(counter);
  }

  return (
    <>
     <h1>chai aur react</h1> 
     <h2>Counter value:{counter}</h2>
     
     <button
     onClick={addVlue}
     >Add value{counter}</button>

     <br/>

     <button
     onClick={removeValue}>remove value{counter}</button>


     <p>footer:{counter}</p>
     
    </>
  )
}

export default App
