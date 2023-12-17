import { combineReducers } from 'redux'
import appReducer from './application'
import authReducer from './auth.reducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `appData`, handled by `appReducer`
  appData: appReducer,
  authReducer: authReducer,
})

export default rootReducer
