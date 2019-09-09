import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore.js';
import Routes from './routes';
import './less/app.less';
render(
  <Provider store={store}>
    <Routes />
  </Provider>

  , document.getElementById("root"));
if (module.hot) {// 开启热替换
  module.hot.accept()
}