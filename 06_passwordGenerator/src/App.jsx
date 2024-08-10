import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  
  const passwordGenerator = useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numAllowed){
      str+='1234567890'
    }
    if(charAllowed){
      str+='!@#$%^&*(){}?~`-=+_<>'
    }
    let strLength = str.length
    for (let i = 0; i <length; i++) {
      pass+=str[Math.ceil(Math.random()*strLength)]
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])
  
  const passwordRef=useRef(null)

  const copyToClipboard =useCallback(()=>{
    passwordRef.current?.select() //highlights the selected text    
    passwordRef.current.setSelectionRange(0,30) // we can give range of how much to select
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">

        <h1 className="text-white text-center">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" 
          className='outline-none w-full py-1 px-3'
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef} /> 

          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipboard}>copy</button>

        </div>

        <div className="flex text-sm gap-x-4">

          <div className="flex items-center gap-x-2">

            <input 
            id='len'
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}} />

            <label htmlFor="len">Length:{length}</label>

          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={(e)=>{setNumAllowed((prev)=>!prev)}} />

            <label htmlFor="numberInput">Number</label>

          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={(e)=>{setCharAllowed((prev)=>!prev)}} />

            <label htmlFor="numberInput">Character</label>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App