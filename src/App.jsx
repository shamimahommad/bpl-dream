
import { Suspense, useState } from 'react'
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json();
}

function App() {
  const [toggle, setToggle] = useState(true);
  const playersPromise = fetchPlayers();

  return (
    <>

      <Navbar></Navbar>

      <div className='flex justify-between items-center max-w-[1200px] mx-auto '>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='font-bold'>
          <button onClick={()=>setToggle(true)} className={`py-3 px-5 border-1 ${toggle===true?'bg-[#E7FE29]' :''} border-gray-400 rounded-l-2xl border-r-0`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-3 px-5 ${toggle===false?'bg-[#E7FE29]' :''} border-1 border-gray-400 rounded-r-2xl border-l-0`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading h-[150px] loading-infinity loading-xl"></span>}><AvailablePlayers playersPromise={playersPromise}></AvailablePlayers></Suspense> : <SelectedPlayers></SelectedPlayers>
      }


    </>
  )
}

export default App
