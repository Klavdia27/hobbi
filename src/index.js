import React from 'react';
import {createStore} from "redux";
import './index.scss';
import App from './components/App';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';

const defaultState = {
  count: 0,
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case "ADD_COUNT":
        return {...state, count: state.count + action.payload}


    default: 
      return state
  }
}
const store = createStore(reducer);

const RenderApp = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>

    </React.StrictMode>
  )
}

createRoot(
  document.getElementById('root'),
).render(<RenderApp />);
