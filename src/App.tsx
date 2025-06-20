import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="font-mono">
      <div className="font-[SourceCodePro]">
        <h1 className="mb-4 text-4xl font-bold">Welcome to BugBrekr's Personal Hosting Space!</h1>
        <text>This landing page is still (and might forever be) under construction, so check back later. <i>or not.</i></text>
        <h2 className="mt-4 mb-1 text-2xl font-bold">Contact me at:</h2>
        <p>Email: <a href="mailto:me@bugbrekr.dev">me@bugbrekr.dev</a></p>
      </div>
    </div>
    </>
  )
}

export default App
