import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"vivek",
    age:24
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>

 <Card username="chai aur coad" someObje={myObj}/>
 <Card/>
        

      </>
  )
}

export default App
