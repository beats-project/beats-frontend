import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getState } from '../redux/reducers/auth.reducer.js'
import {clientPaths} from '../utils/constants.js'
const PrivateRoutes = () => {
  const state = useSelector(getState)
  const loggedIn = state.authReducer.isLoggedIn

  return loggedIn ? <Outlet /> : <Navigate to={clientPaths.signinURL} />
}

export default PrivateRoutes
