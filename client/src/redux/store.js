import { combineReducers, createStore } from 'redux';
import workersReducer from './reducers/workersReducer';


const reducers =
    combineReducers({
        workersReducer
    })

const store = createStore(reducers)
window.store = store;
export default store;