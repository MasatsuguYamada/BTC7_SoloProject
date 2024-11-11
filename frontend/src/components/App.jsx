import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../style/App.css'
import { Searchbar } from './Searchbar'

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Tsugu");

  async function getTitle(){
      let response = await fetch("/api/hello");
      response = await response.json();
      setTitle(response.title);
  }

  return (
    <>
      <Searchbar />
      <h1>{title}</h1>
      <div className="card">
        <button onClick={() => {
            getTitle();
            }}>
          count
        </button>
      </div>
    </>
  )
}

export default App
