import {legacy_createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as AuthReducer  } from './AuthReducer/reducer';
import { reducer as ProductReducer } from './Product Reducer/reducer';

const Rootreducer = combineReducers({AuthReducer,ProductReducer});

export const store = legacy_createStore(Rootreducer,applyMiddleware(thunk))

