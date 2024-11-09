import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const appValue=()=>{
    count=count + 1
    setCount(count)
    console.log(count)
  }
  const appNav=()=>{
    count=count-1
    setCount(count)
    console.log(count)
  }
  return (
 
    <>
      <h1>
        hello
      </h1>
      <button onClick={appValue}>values are</button>
      <h5>{count}</h5>
      <button onClick={appNav}>Desc</button>
      <h5>{count}</h5>
      
    </>
  )
}

export default App
