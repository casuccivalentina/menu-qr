import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MenuLanding from './App'
import { PrivacyPage } from './privacy' // 👈 IMPORT CORRETTO

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuLanding />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)