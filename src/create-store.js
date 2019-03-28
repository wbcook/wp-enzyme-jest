import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { reducer } from './app-reducer';
import { fetchWithThunk, receivePayees, errorPayees, fetchWithAxios } from './payees/payees-actions';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const storeFactory = {
  createThunkStore: () => {
    const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
    );
    store.dispatch(fetchWithThunk());
    return store;
  },
  createAxiosStore: () => {
    const client = axios.create({
      baseURL: 'http://localhost:8000',
      responseType: 'json',
    });

    client.interceptors.response.use(
      response => {
        const action = receivePayees(response.data);
        return action.payload;
      },
      error => {
        const action = errorPayees(error);
        return action.payload;
      }
    );

    const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(axiosMiddleware(client), logger))
    );
    store.dispatch(fetchWithAxios());
    return store;
  },
};

export { storeFactory };
