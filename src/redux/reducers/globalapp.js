import { combineReducers } from 'redux'
import appReducer from './application'
import authReducer from './auth.reducer'
import projectReducer from './project.reducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `appData`, handled by `appReducer`
  appData: appReducer,
  authReducer: authReducer,
  projectReducer: projectReducer,
})

// const mainReducer = combineReducers({
//   /* Top-level reducers */
//   appData: appReducer,
//   authReducer: authReducer,
//   projectReducer: projectReducer,
// })

// const rootReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     return mainReducer(undefined, action)
//   }

//   return mainReducer(state, action)
// }

export default rootReducer
