import { useState } from 'react'
function App() {
  const [color, setColor] = useState('white')
  function handleClick(e){
    const body=document.querySelector('#container')
    console.log(e.target.innerHTML);
    
    body.style.backgroundColor=`${e.target.innerHTML}`

  }
  return (
    <>
    <div id="container" className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div id='colorBar' onClick={handleClick} className='flex flex-wrap justify-centre gap-3 shadow-lg bg-white p-2 px-2 rounded-xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'red'}}>Red
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'green'}}>Green
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'blue'}}>Blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'olive'}}>Olive
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'grey'}}>Grey
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'yellow'}}>Yellow
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'pink'}}>Pink
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'lavender'}}>Lavender
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'purple'}}>Purple
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{ backgroundColor: 'black'}}>black
          </button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App
