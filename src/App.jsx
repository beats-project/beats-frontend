import { Suspense, lazy, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader.jsx'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/BaseLayouts/Header.jsx'
import { Home } from './components/Home.jsx'
import { Toaster } from 'react-hot-toast'
import routes from './routes/index.js'

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'))

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <div className="parent rounded-md">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/auth/signin" element={<Header />} />
        <Route path="/auth/signup" element={<Header />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {routes.map((route, index) => {
            const { path, component: Component } = route
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<div>Fallback</div>}>
                    <Component />
                  </Suspense>
                }
              />
            )
          })}
        </Route>
      </Routes>
    </div>
  )
}

export default App
