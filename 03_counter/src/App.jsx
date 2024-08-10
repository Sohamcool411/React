import { useState } from 'react'
import './App.css'


function App() {
  let [count, setCount] = useState(10)

  function addValue(){
    if (count<20 && count >=0){
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1) // count will be updated by 1.

      //this is because of fibre in which the tasks are sent in batches.
      //soo all the setCount will be sent in single batch & it will only be affected 1 time.


      /*to do that effectively we can pass it in form of callback as setCount accepts a callback fn.
      this fn is of the form (prevCounter)=>{return prevCounter +1} */

      setCount((count)=>(count+1)) //here callback fn takes previous value of count as parameter
      setCount(count=>count+1)
      setCount(count=>count+1)
      setCount(count=>count+1) // count will be updated by 4


    }else{
      alert('You are going out of allowed limit')
    }
  }
  function removeValue(){
    if (count<=20 && count >0){
      setCount(count-1)
    }else{
      alert('You are going out of allowed limit')
    }
  }
  return (
    <>
    <h1>react with me</h1>
    <h2>counter value : {count}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={removeValue}>decrease value</button>
    </>
  )
}

export default App
