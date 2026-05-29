import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx' // Ensure this matches your export

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Change the tag name to match the Provider component */}
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)