import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//thunk works with firebase to allow dispatching after asynchronous actions like making DB queries and updates
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk)) 
    );
    
    return store;
};