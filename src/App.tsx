import { useState } from 'react'
import Logo from './assets/logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div>
        <a href="https://youtu.be/xvFZjo5PgG0" target="_blank">
          <img src={Logo} className="logo"/>
        </a>
      </div>
      <h1 className="hd1">I am from Marsrererer</h1>
      <div className="card">
      <a href="https://www.ninjabot.cf/">
        <p className= "p1">
          i know your mom's address
        </p>
        </a>
      </div>
    </div>
  )
}

export default App