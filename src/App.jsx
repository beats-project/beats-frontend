import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader.jsx'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import routes from './routes/index.js'
import SignIn from './pages/auth/Signin.jsx'
import SignUp from './pages/auth/Signup.jsx'
import PrivateRoutes from './components/PrivateRoutes.jsx'

const DefaultLayout = lazy(() =>
  import('./components/layout/DefaultLayout.jsx'),
)
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard.jsx'))

function App() {
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
        containerStyle={{
          top: 22,
          left: 20,
          bottom: 20,
          right: 40,
        }}
      />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route element={<PrivateRoutes />}>
            <Route index element={<Dashboard />} />
            {routes.map((route, index) => {
              const { path, component: Component } = route
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              )
            })}
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
