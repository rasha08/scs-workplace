import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app-logic-components/App';
import configureStore from './store/store';

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('app')
);
