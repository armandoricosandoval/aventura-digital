import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRputers from './routers/AppRputers'

const App = () => {
  return (
    <BrowserRouter>
      <AppRputers />
    </BrowserRouter>
  )
}

export default App

