import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import CounterComponent from './containers/CounterComponent'
import store from './store'
import App from './App';


render(
  <Provider store={store}>
    <CounterComponent />
    <App />
  </Provider>,
  document.getElementById('root')
)