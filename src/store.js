
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  && window.__REDUX_DEVTOOLS_EXTENSION__

export const store=createStore(rootReducers,applyMiddleware(thunk))




