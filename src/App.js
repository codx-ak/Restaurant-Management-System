import React from 'react'
import Layout from './routes/Layout'
import {store} from './config/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
    <Layout/>
    </Provider>
  )
}

export default App