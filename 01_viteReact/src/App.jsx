import Chai from "./Chai.jsx"
import React from 'react' 
//what if i write my custom fn and return it directly here.
function NewFn(){
  return(
    <div>
      <h1>newFn() h1</h1>
    </div>
  )
}

//we can only pass a valid jsx fn to return.
//if we want to pass object then we have to pass it with correct syntax.

const NewObj=React.createElement('a',{
  href:'https://google.com',
  target:'_blank'
},'click me to go to google')

function App() { 

  return (
    // we can also write it as newFn() , as it is just a fn.
    <>
    {NewObj} 
    {/* in curly bases we can only inject evaluated variable i.e end result
    we cant just simply write js code there unlike ${} in js. */}
    <Chai/>
    <h1>Heading</h1>
    </>
  )
}

export default App
// in jsx we can only export 1 element.
// soo if we have to import more elements we can wrap then in fragments.
// <> this are fragments </>.
// now it whole becomes 1 single element.