import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configure.store'
import initialState from 'store/initial.state'

const store = configureStore(initialState)

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
)

export default AppProvider
