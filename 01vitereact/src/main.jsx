import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import app from './App.jsx'

function MyApp(){
  return(
    <div>
      <hi>this is vivek</hi>
    </div>
  )
}

const anotherUser="chai aur code"

const reactElement=React.createElement(
  'a',
  {href:'http://goggle.com',target: '_blank'},
 'click me to visit goggle',
 anotherElemnt

)

const anotherUser="chai aur code"

const anotherElemnt=(
  <a href="http://goggle.com" target ='_blank'>visit google</a>
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   reactElement
  </StrictMode>,
)
