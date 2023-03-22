import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App'
//import 'antd/dist/antd.css';
import store from './app/store'

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )