import 'react-hot-loader'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App'

const renderApp = () =>
  ReactDOM.render(
    <App />,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();
