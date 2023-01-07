import { useState } from 'react'
import Logo from './assets/logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>I am from Marsrererer</h1>
      <div className="card">
        <p>
          i know your mom's address
        </p>
      </div>
    </div>
  )
}

export default App
