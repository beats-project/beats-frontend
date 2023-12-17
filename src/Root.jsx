import { Provider } from 'react-redux'
import store from './redux/store/store'
import App from './App'

function Root() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}

export default Root;