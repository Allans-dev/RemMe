import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/homePage';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
