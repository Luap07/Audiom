import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'


const App = () => {
  return (
    <div className='h-screen w-screen bg-black text-white'>
      <div className='h-[90%] flex'>
        <Sidebar />
      </div>
      <Player />
      <Display />
    </div>
  )
}

export default App
