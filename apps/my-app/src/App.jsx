import { useEffect } from 'react'
import auth from 'lib/services/auth'
import './App.css'

function App() {

  useEffect(() => {
    console.log(auth())
  }, [])

  return (
    <>
      <h1>My App</h1>

    </>
  )
}

export default App