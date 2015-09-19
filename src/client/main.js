import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configureStore';


const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
 document.getElementById('app')
);
