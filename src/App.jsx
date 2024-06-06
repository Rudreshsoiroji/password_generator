import { useState ,useCallback} from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharacAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordgeneretor() =>{

  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-4 my-8 bg-gray-800 text-blue-500 ">
        <h1 className='text-white text-center font-bold my-8'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input type="text" value={password} className='outline-none w-full py-2 px-3' placeholder='password' readOnly  />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 my-10">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={lenght} className='curs0r-pointer' onChange={(e) => setLenght(e.target.value)} 
            name="length" 
            id="length" />
            <label htmlFor="length"> Length: {lenght} </label> 
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }} />
            <label htmlFor="Number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{
              setCharacAllowed((prev) => !prev)
            }} />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
