import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [Mode, setMode] = useState('')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (Mode === '') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title='textUtils'
          aboutText='About Us'
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <TextForm
                heading='Enter text to analyse'
                mode={Mode}
                showAlert={showAlert}
              />
            }
          />
          <Route
            exact
            path='/about'
            element={
              <div className='container my-3'>
                <About />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
