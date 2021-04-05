import 'semantic-ui-css/semantic.min.css'
import 'toastify-js/src/toastify.css'

import '../styles/globals.css'

import { Provider } from 'react-redux'
import { useStore } from '../redux'

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
