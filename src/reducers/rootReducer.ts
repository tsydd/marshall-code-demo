import {combineReducers} from 'redux';
import ampReducer from './ampReducer';

const rootReducer = combineReducers({
  amp: ampReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
