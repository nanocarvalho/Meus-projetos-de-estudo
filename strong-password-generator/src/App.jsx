import { useEffect, useState } from 'react'

import Display from './components/Display.jsx'
import Options from './components/Options.jsx'
import Generator from './components/Generator.jsx'

import './styles/App.css'

function App() {
  const [settings, setSettings] = useState()
  const [size, setSize] = useState()

  const [finalPassword, setFinalPassword] = useState('')

  return (
    <div className="app">
      <h1>Password Generator</h1>
      <Display
      password={finalPassword}
       />

      <Options
      settings={setSettings}
      size={setSize} 
      />

      <Generator 
      settings={settings}
      size={size}
      setPasswordFinal={setFinalPassword}
      />

      <div className='description'>
        <span>Made by <a href="https://github.com/nanocarvalho" target='_blank'>Nano Carvalho</a></span>
      </div>
    </div>
  )
}

export default App
