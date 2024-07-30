import { useState } from 'react'
import XpLoading from './components/bases/xp-loading/XpLoadig'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <XpLoading></XpLoading>
       </div>
    </>
  )
}

export default App
