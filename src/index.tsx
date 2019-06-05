import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import LocaleProvider from 'shared/components/Locale';
import { history } from './store/middleware/routerMiddleware';
import store from './store/createStore';
import App from './App';

const renderRoot = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  renderRoot
);
