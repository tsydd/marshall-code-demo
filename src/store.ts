import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export default store;

export type AppDispatch = typeof store.dispatch;
