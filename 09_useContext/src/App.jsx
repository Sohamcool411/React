import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React Context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
