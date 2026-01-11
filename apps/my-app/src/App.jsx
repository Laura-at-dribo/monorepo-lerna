import auth from 'lib/services/auth'
import './App.css'

function App() {

  return (
    <>
      <h1>My App</h1>
      <p>{auth()}</p>
    </>
  )
}

export default App