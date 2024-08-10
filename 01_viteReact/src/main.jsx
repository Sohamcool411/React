import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewFn from './App.jsx'
import _ from "./App"
//even if we call export Newfn , the value in it will still be from app because that was exported by default.
// even if we import using any variable it will still import.


createRoot(document.getElementById('root')).render(
    <>
    <App />
    <NewFn />
    <_/>
    </>
)
// in react it gives us option to render html elements through js.