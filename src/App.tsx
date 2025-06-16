import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to BugBrekr's personal hosting space!</h1>
      <text>This landing page is still (and might forever be) under construction, so check back later. <i>or not.</i></text>
      <h2>Contact me at:</h2>
      <p>Email: <a href="mailto:me@bugbrekr.dev">me@bugbrekr.dev</a></p>
    </>
  )
}

export default App
