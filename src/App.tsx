import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to BugBrekr's personal hosting space!</h1>
      <text>The landing page is still (might forever be) under construction, so check back later. <i>or not.</i></text>
      <h3>Contact me at:</h3>
      <p>Email: <a href="mailto:me@bugbrekr.dev">me@bugbrekr.dev</a></p>
    </>
  )
}

export default App
