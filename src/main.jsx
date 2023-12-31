import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Loader from './components/Loader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
