import { useState, useEffect } from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import { signIn, signOut } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json'
import '@aws-amplify/ui-react/styles.css';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
Amplify.configure(outputs)
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()

function callApi(){
  fetch('/api')
  .then(response=>console.log(response))
}

useEffect(()=>{
  console.log(data)
}, [data])

  return (
    <Authenticator>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={callApi}>
          count is {count}
        </button>
        <button onClick={signOut}>
          sign out
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Authenticator>
  )
}

export default App
