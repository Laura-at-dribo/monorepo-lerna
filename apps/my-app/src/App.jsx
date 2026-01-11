import auth from 'lib/services/auth'
import './App.css'

function App() {

  return (
    <>
      <h1>My App</h1>
      <h2>{auth()}</h2>
    </>
  )
}

export default App